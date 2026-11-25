import Link from "next/link";
import Icon from "@/components/Icon";
import Photo from "@/components/Photo";
import { PageHero, Cta } from "@/components/Bits";
import { services } from "@/data/services";

export const metadata = { alternates: { canonical: "/services" }, keywords: ["survey services Odisha","DGPS survey","forest diversion","land acquisition","GIS services","geotechnical investigation"], title: "Services", description: "Forest diversion, land acquisition, railway and highway engineering, mining, town planning, surveying, geotechnical, GIS and environmental services." };

export default function Services() {
  return (
    <>
      <PageHero title="Our Services" sub="Comprehensive survey, engineering and geospatial services for infrastructure, land, mining and environmental development." />
      <section className="sec"><div className="wrap grid g3">
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="scard">
            <Photo name={s.img} className="scard-img" />
            <div className="scard-body"><span className="ico sm"><Icon name={s.icon} size={20} /></span><h3>{s.title}</h3><p>{s.short}</p><span className="more">View details <Icon name="ArrowRight" size={16} /></span></div>
          </Link>
        ))}
      </div></section>
      <Cta />
    </>
  );
}
