import Gallery from "@/components/Gallery";
import { PageHero, Cta } from "@/components/Bits";
import { gallery } from "@/data/gallery";
export const metadata = { alternates: { canonical: "/gallery" }, keywords: ["survey photos","DGPS field work","total station survey","drone mapping gallery"], title: "Gallery", description: "Field photographs from Shrihari Geo Services: DGPS, total station, drone, mining and forestry surveys." };
export default function GalleryPage() {
  return (<>
    <PageHero title="Project Gallery" sub="Moments from the field: DGPS control, total station surveys, mining, forestry and infrastructure projects." />
    <section className="sec"><div className="wrap"><Gallery items={gallery} /></div></section>
    <Cta />
  </>);
}
