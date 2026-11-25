"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";
import Logo from "./Logo";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const k = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, [open]);
  const [sc, setSc] = useState(false);
  useEffect(() => { const f = () => setSc(window.scrollY > 12); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  const active = (h) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header className={`header ${sc ? "scrolled" : ""}`}>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span>{site.address.split(",").slice(-3).join(",").trim()}</span>
          <span className="tb-links"><a href={`tel:${site.phones[0].replace(/\s/g, "")}`}>{site.phones[0]}</a><a href={`mailto:${site.email}`}>{site.email}</a></span>
        </div>
      </div>
      <div className="wrap navbar">
        <Link href="/" className="brand" aria-label="Shrihari Geo Services home"><Logo /></Link>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
          {nav.map((n, i) => (
            <Link key={n.href} href={n.href} style={{ "--i": i }} className={active(n.href) ? "on" : ""}>{n.label}</Link>
          ))}
          <Link href="/contact" style={{ "--i": nav.length }} className="btn btn-primary nav-cta">Request a Consultation</Link>
        </nav>
        <div className={`scrim ${open ? "on" : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />
        <button className="burger" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
