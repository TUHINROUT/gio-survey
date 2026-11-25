// Drop real photos in /public/images/<name>.jpg — a branded gradient shows until then.
export default function Photo({ name, className = "", children, label }) {
  return (
    <div className={`photo ${className}`} style={{ "--img": `url(/images/${name}.jpg)` }} role={label ? "img" : undefined} aria-label={label}>
      {children}
    </div>
  );
}
