import Link from "next/link";
import Photo from "@/components/Photo";
import Icon from "@/components/Icon";
import { PageHero, Cta } from "@/components/Bits";
import { insights } from "@/data/site";
export const metadata = { title: "Insights & News", description: "Technical articles and regulatory guidance on drone surveys, DGPS, forest diversion, land acquisition, GIS and mining from the experts at Shrihari Geo Services.", alternates: { canonical: "/insights" } };
export default function Insights() {
  return (<>
    <PageHero title="Insights & News" sub="Updates, technical articles and regulatory guidance from our experts." />
    <section className="sec"><div className="wrap grid g3">{insights.map((p) => (
      <Link key={p.slug} href={`/insights/${p.slug}`} className="pcard blog-card"><Photo name={p.img} className="pimg"><span className="tag">{p.tag}</span></Photo><div className="pbody"><time dateTime={p.iso}>{p.date} · {p.read} min read</time><h3>{p.title}</h3><p>{p.text}</p><span className="more">Read article <Icon name="ArrowRight" size={16} /></span></div></Link>
    ))}</div></section>
    <Cta />
  </>);
}
