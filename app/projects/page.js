import Photo from "@/components/Photo";
import { PageHero, Cta } from "@/components/Bits";
import { projects } from "@/data/site";
export const metadata = { alternates: { canonical: "/projects" }, keywords: ["highway alignment survey","railway FLS survey","mine survey projects","forest diversion proposal"], title: "Projects", description: "Featured work across infrastructure, mining, forestry and water resources." };
export default function Projects() {
  return (<>
    <PageHero title="Featured Projects" sub="A glimpse of our work across infrastructure, mining, forestry and water resources." />
    <section className="sec"><div className="wrap grid g3">{projects.map((p) => (
      <article key={p.slug} className="pcard"><Photo name={p.img} className="pimg"><span className="tag">{p.tag}</span></Photo><div className="pbody"><h3>{p.title}</h3><p>{p.text}</p></div></article>
    ))}</div></section>
    <Cta />
  </>);
}
