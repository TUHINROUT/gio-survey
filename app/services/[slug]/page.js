import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import Photo from "@/components/Photo";
import { PageHero, Cta } from "@/components/Bits";
import { services } from "@/data/services";
import { site } from "@/data/site";

export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }
export function generateMetadata({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  return s ? { title: s.title, description: s.short } : {};
}

export default function ServicePage({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const groups = s.groups || [{ title: "Our Services Include", items: s.items }];
  const ld = { "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.short, provider: { "@type": "Organization", name: site.name, url: site.url }, areaServed: "Odisha, India", serviceType: s.title };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHero title={s.title} sub={s.short} crumb={<><Link href="/services">Services</Link> / {s.title}</>} />
      <section className="sec">
        <div className="wrap detail">
          <div>
            <p className="intro">{s.intro}</p>
            {groups.map((g) => (
              <div key={g.title} className="group">
                <h2>{g.title}</h2>
                <ul className="checks">{g.items.map((i) => <li key={i}><Icon name="Check" size={18} /><span>{i}</span></li>)}</ul>
              </div>
            ))}
            {s.closing && <p className="closing">{s.closing}</p>}
          </div>
          <aside>
            <Photo name={s.img} className="side-photo" />
            <div className="panel sticky">
              <h3>Discuss this service</h3>
              <p>Talk to our team about your project requirements.</p>
              <Link href="/contact" className="btn btn-primary">Request a Consultation</Link>
              <h4>Other services</h4>
              <ul>{services.filter((x) => x.slug !== s.slug).slice(0, 5).map((x) => <li key={x.slug}><Link href={`/services/${x.slug}`}>{x.title}</Link></li>)}</ul>
            </div>
          </aside>
        </div>
      </section>
      <Cta />
    </>
  );
}
