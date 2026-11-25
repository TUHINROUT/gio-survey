"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Plane, Satellite, Map, Mountain, Trees } from "lucide-react";

const slides = [
  { img: "hero", kicker: "Geospatial, Surveying & Engineering Consultancy", a: "Engineering Precision.", b: "Mapping Possibility.", text: "Geospatial, surveying and engineering consultancy for infrastructure, land, mining and environmental development.", chips: [[Satellite, "Sub-cm DGPS Accuracy"], [Plane, "PPK Drone Mapping"]], href: "/services", cta: "Explore Our Services" },
  { img: "drone", kicker: "Drone & Aerial Mapping", a: "High-Resolution Drone Surveys.", b: "From Sky to Decision.", text: "PPK-enabled UAV mapping, orthomosaics, DEM and 3D models for projects of every scale.", chips: [[Plane, "PPK Drone Mapping"], [Map, "Orthomosaic & DEM"]], href: "/services", cta: "View Drone Services" },
  { img: "geotech", kicker: "Engineering & Geotechnical", a: "Built on Solid Ground.", b: "Engineered to Last.", text: "Topographic, geotechnical and ETS surveys that give your project a reliable technical foundation.", chips: [[Mountain, "Geotechnical Investigation"], [Satellite, "Total Station Survey"]], href: "/services", cta: "Our Capabilities" },
  { img: "mining", kicker: "Mining & Land Consultancy", a: "Accurate Mine Surveys.", b: "Compliant Land Solutions.", text: "Mine planning, volume estimation, land records and clearance support across Odisha and beyond.", chips: [[Mountain, "Mine Survey"], [Map, "Land Consultancy"]], href: "/services", cta: "Discuss Your Project" },
  { img: "forest", kicker: "Environmental & Wildlife Advisory", a: "Responsible Development.", b: "Protected Landscapes.", text: "Forest, wildlife and environmental clearance support backed by geospatial evidence.", chips: [[Trees, "Forest & Wildlife"], [Satellite, "GIS Analysis"]], href: "/services", cta: "Learn More" },
];
const DELAY = 6500;

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((n) => setI((n + slides.length) % slides.length), []);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(i + 1), DELAY);
    return () => clearTimeout(t);
  }, [i, paused, go]);

  return (
    <div className="hs" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel" aria-label="Featured services">
      {slides.map((s, n) => (
        <div key={s.img} className={`hs-slide ${n === i ? "on" : ""}`} aria-hidden={n !== i}>
          <div className="hs-bg" style={{ backgroundImage: `url(/images/${s.img}.jpg)` }} />
          <div className="hs-shade" />
          <div className="hs-wrap">
            <div className="hs-copy">
              <p className="hs-kicker">{s.kicker}</p>
              <h1 className="hs-title">{s.a} <span>{s.b}</span></h1>
              <p className="hs-text">{s.text}</p>
              <div className="btns">
                <Link href={s.href} className="btn btn-primary" tabIndex={n === i ? 0 : -1}>{s.cta} <ArrowRight size={18} /></Link>
                <Link href="/contact" className="btn hs-ghost" tabIndex={n === i ? 0 : -1}>Request a Consultation</Link>
              </div>
            </div>
            <div className="hs-chips">
              {s.chips.map(([Ic, t]) => <div className="hs-chip" key={t}><Ic size={18} /> {t}</div>)}
            </div>
          </div>
        </div>
      ))}
      <button className="hs-arrow l" onClick={() => go(i - 1)} aria-label="Previous slide"><ChevronLeft /></button>
      <button className="hs-arrow r" onClick={() => go(i + 1)} aria-label="Next slide"><ChevronRight /></button>
      <div className="hs-ctrl">
        <span className="hs-count">0{i + 1}<i> / 0{slides.length}</i></span>
        <div className="hs-dots">
          {slides.map((s, n) => (
            <button key={s.img} onClick={() => go(n)} className={n === i ? "on" : ""} aria-label={`Go to slide ${n + 1}`}>
              <b style={n === i ? { animationDuration: `${DELAY}ms`, animationPlayState: paused ? "paused" : "running" } : undefined} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
