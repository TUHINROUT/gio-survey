import { PageHero, Cta, IconCard } from "@/components/Bits";
import { industries } from "@/data/site";
export const metadata = { alternates: { canonical: "/industries" }, keywords: ["infrastructure survey","railway survey","mining survey","forestry consultancy","water resources mapping"], title: "Industries", description: "Industries we serve: infrastructure, railways, mining, forestry, water resources, urban development and government." };
export default function Industries() {
  return (<>
    <PageHero title="Industries We Serve" sub="Spatial intelligence and engineering expertise for the sectors that build and manage land." />
    <section className="sec"><div className="wrap grid g3">{industries.map((i) => <IconCard key={i.title} {...i} />)}</div></section>
    <Cta />
  </>);
}
