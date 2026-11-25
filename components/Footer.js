import Link from "next/link";
import { site, nav } from "@/data/site";
import { services } from "@/data/services";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap fgrid">
        <div>
          <Logo light />
          <p className="fabout">A geospatial and engineering consultancy delivering accurate, compliant and sustainable project solutions.</p>
        </div>
        <div>
          <h4>Our Services</h4>
          <ul className="fcols">{services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>{nav.slice(1).map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul>
            <li>{site.address}</li>
            <li>{site.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="blk">{p}</a>)}</li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap fbar">
        <span>© {new Date().getFullYear()} Shrihari Geo Services Private Limited. All Rights Reserved.</span>
        <span>Integrity • Innovation • Excellence</span>
      </div>
    </footer>
  );
}
