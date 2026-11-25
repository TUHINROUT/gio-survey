import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/Bits";
import { site } from "@/data/site";
export const metadata = { alternates: { canonical: "/contact" }, keywords: ["contact surveyor Bhubaneswar","geospatial consultant Odisha","request survey quote"], title: "Contact", description: "Get in touch with Shrihari Geo Services, Bhubaneswar, Odisha." };
export default function Contact() {
  return (<>
    <PageHero title="Get in Touch" sub="Let’s discuss your project, requirements or collaboration opportunities." />
    <section className="sec"><div className="wrap two">
      <div className="cinfo">
        <h2>Shrihari Geo Services Pvt Ltd</h2>
        <p><Icon name="MapPin" /><span>{site.address}</span></p>
        <p><Icon name="Phone" /><span>{site.phones.map((p) => <a key={p} className="blk" href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>)}</span></p>
        <p><Icon name="Mail" /><a href={`mailto:${site.email}`}>{site.email}</a></p>
        <iframe title="Map to Shrihari Geo Services" loading="lazy" className="map" src="https://www.google.com/maps?q=Palasuni+Rasulgarh+Bhubaneswar&output=embed" />
      </div>
      <div className="panel"><h3>Request a Consultation</h3><ContactForm /></div>
    </div></section>
  </>);
}
