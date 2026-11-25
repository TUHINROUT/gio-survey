import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/data/site";

export function SectionHead({ title, sub, center }) {
  return (
    <div className={`shead ${center ? "center" : ""}`}>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}
export function PageHero({ title, sub, crumb }) {
  return (
    <section className="phero">
      <div className="wrap">
        <p className="crumb"><Link href="/">Home</Link> / {crumb || title}</p>
        <h1>{title}</h1>
        {sub && <p className="lead">{sub}</p>}
      </div>
    </section>
  );
}
export function Cta() {
  return (
    <section className="cta">
      <div className="wrap cta-in">
        <div>
          <h2>Partner with Precision</h2>
          <p>Ready to drive your next project forward with flawless spatial intelligence and engineering excellence?</p>
        </div>
        <Link href="/contact" className="btn btn-light">Request a Consultation <Icon name="ArrowRight" size={18} /></Link>
      </div>
    </section>
  );
}
export function IconCard({ icon, title, text }) {
  return (
    <div className="icard">
      <span className="ico"><Icon name={icon} /></span>
      <h3>{title}</h3>
      {text && <p>{text}</p>}
    </div>
  );
}
