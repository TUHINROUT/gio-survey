"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function Gallery({ items, className = "" }) {
  const [open, setOpen] = useState(null);
  const closeRef = useRef(null);
  const last = useRef(null);
  const n = items.length;
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (open === null) return;
    const key = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { document.removeEventListener("keydown", key); document.body.style.overflow = ""; last.current?.focus?.(); };
  }, [open, close, step]);

  const cur = open === null ? null : items[open];
  return (
    <>
      <div className={`gal ${className}`}>
        {items.map((g, i) => (
          <button key={g.src} type="button" className="gal-item" onClick={(e) => { last.current = e.currentTarget; setOpen(i); }} aria-label={`View ${g.title}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={g.src} alt={g.title} width={g.w} height={g.h} loading="lazy" decoding="async" />
            <span className="gal-ov">
              <span className="gal-zoom"><Maximize2 size={20} /></span>
              <span className="gal-cap"><small>{g.cat}</small>{g.title}</span>
            </span>
          </button>
        ))}
      </div>
      {cur && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={cur.title} onClick={close}>
          <button ref={closeRef} className="lb-close" onClick={close} aria-label="Close image"><X size={26} /></button>
          {n > 1 && <button className="lb-nav l" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous image"><ChevronLeft size={28} /></button>}
          <figure className="lb-fig" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img key={cur.src} src={cur.src} alt={cur.title} />
            <figcaption><small>{cur.cat}</small>{cur.title}<span>{open + 1} / {n}</span></figcaption>
          </figure>
          {n > 1 && <button className="lb-nav r" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next image"><ChevronRight size={28} /></button>}
        </div>
      )}
    </>
  );
}
