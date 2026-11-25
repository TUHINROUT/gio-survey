import Photo from "@/components/Photo";
import Icon from "@/components/Icon";
import { PageHero, SectionHead, Cta, IconCard } from "@/components/Bits";
import { why, values } from "@/data/site";

export const metadata = { alternates: { canonical: "/about" }, keywords: ["about Shrihari Geo Services","geospatial consultancy Bhubaneswar","surveying company Odisha"], title: "About Us", description: "Shrihari Geo Services is a premier geospatial, surveying and land consultancy firm based in Bhubaneswar, Odisha." };

export default function About() {
  return (
    <>
      <PageHero title="About Us" sub="Bridging the gap between physical terrain and actionable digital data." />
      <section className="sec">
        <div className="wrap about-grid">
          <Photo name="about" className="about-photo" label="Aerial river valley" />
          <div className="prose">
            <p>Based in temple city Bhubaneswar, Shrihari Geo Services Pvt Ltd is a premier provider of comprehensive geospatial, surveying, and land consultancy solutions. We specialize in bridging the gap between physical terrain and actionable digital data.</p>
            <p>In an era where precision drives progress, we empower infrastructure, mining, and government sectors with highly accurate spatial data. From navigating complex regulatory frameworks like Forest Diversion to executing millimeter-accurate field surveys, our expertise spans the entire spectrum of engineering and geomatics.</p>
            <p>Our multidisciplinary team comprises seasoned surveyors, GIS analysts, urban planners, and environmental experts. We combine deep local knowledge of Odisha and surrounding regions with global technological standards to deliver projects on time, within budget, and with absolute precision.</p>
          </div>
        </div>
      </section>
      <section className="sec tint">
        <div className="wrap grid g2">
          <div className="panel"><span className="ico"><Icon name="Compass" /></span><h3>Our Vision</h3><p>To be India’s most trusted and technologically advanced geospatial and engineering consulting firm, driving sustainable infrastructure and resource management through flawless spatial intelligence.</p></div>
          <div className="panel"><span className="ico"><Icon name="Target" /></span><h3>Our Mission</h3><p>To provide state-of-the-art surveying, engineering design, and GIS solutions that simplify complex land acquisition and regulatory compliance processes for our clients, while fostering a culture of continuous technological advancement.</p></div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap"><SectionHead title="Core Values" center /><div className="grid g3">{values.map((v) => <IconCard key={v.title} {...v} />)}</div></div>
      </section>
      <section className="sec dark">
        <div className="wrap"><SectionHead title="Why Choose Us?" center /><div className="grid g4">{why.map((w) => <IconCard key={w.title} {...w} />)}</div></div>
      </section>
      <Cta />
    </>
  );
}
