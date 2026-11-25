import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import Icon from "@/components/Icon";
import { Cta } from "@/components/Bits";
import { insights, site } from "@/data/site";

export function generateStaticParams() { return insights.map((a) => ({ slug: a.slug })); }
export function generateMetadata({ params }) {
  const a = insights.find((x) => x.slug === params.slug);
  if (!a) return {};
  return {
    title: a.title, description: a.text, keywords: a.keywords,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.text, publishedTime: a.iso, url: `/insights/${a.slug}`, images: [{ url: `/images/${a.img}.jpg` }] },
    twitter: { card: "summary_large_image", title: a.title, description: a.text, images: [`/images/${a.img}.jpg`] },
  };
}

export default function Article({ params }) {
  const a = insights.find((x) => x.slug === params.slug);
  if (!a) notFound();
  const related = insights.filter((x) => x.slug !== a.slug).slice(0, 3);
  const ld = {
    "@context": "https://schema.org", "@type": "BlogPosting", headline: a.title, description: a.text,
    image: `${site.url}/images/${a.img}.jpg`, datePublished: a.iso, dateModified: a.iso, keywords: a.keywords.join(", "),
    mainEntityOfPage: `${site.url}/insights/${a.slug}`,
    author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/logo.png` } },
  };
  const crumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url }, { "@type": "ListItem", position: 2, name: "Insights", item: `${site.url}/insights` }, { "@type": "ListItem", position: 3, name: a.title, item: `${site.url}/insights/${a.slug}` } ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <section className="phero art-hero">
        <div className="wrap">
          <p className="crumb"><Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / {a.tag}</p>
          <h1>{a.title}</h1>
          <p className="art-meta"><span className="tag-pill">{a.tag}</span><time dateTime={a.iso}>{a.date}</time><span>{a.read} min read</span></p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap detail">
          <article className="article">
            <Photo name={a.img} className="art-cover" label={a.title} />
            <p className="intro">{a.text}</p>
            {a.body.map((s) => (
              <div key={s.h} className="group">
                <h2>{s.h}</h2>
                {s.p.map((t) => <p key={t}>{t}</p>)}
                {s.list && <ul className="checks">{s.list.map((i) => <li key={i}><Icon name="Check" size={18} /><span>{i}</span></li>)}</ul>}
              </div>
            ))}
            <p className="closing">Need survey or consultancy support for your project? <Link href="/contact" className="link">Talk to our team</Link></p>
            <div className="kw">{a.keywords.map((k) => <span key={k}>{k}</span>)}</div>
          </article>
          <aside>
            <div className="panel sticky">
              <h3>Related articles</h3>
              <ul>{related.map((r) => <li key={r.slug}><Link href={`/insights/${r.slug}`}>{r.title}</Link></li>)}</ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: "1rem" }}>Request a Consultation</Link>
            </div>
          </aside>
        </div>
      </section>
      <Cta />
    </>
  );
}
