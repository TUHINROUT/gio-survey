import Link from "next/link";
import Icon from "@/components/Icon";
import Photo from "@/components/Photo";
import Gallery from "@/components/Gallery";
import { gallery } from "@/data/gallery";
import HeroSlider from "@/components/HeroSlider";
import { SectionHead, Cta, IconCard } from "@/components/Bits";
import { highlights, why, values, tech, process, industries, projects, insights } from "@/data/site";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      <section className="hero">
        <HeroSlider />
        <div className="wrap">
          <ul className="strip">{highlights.map((h) => <li key={h.title}><Icon name={h.icon} size={26} /><span>{h.title}</span></li>)}</ul>
        </div>
      </section>

      <section className="sec">
        <div className="wrap about-grid">
          <Photo name="about" className="about-photo" label="River valley aerial view" />
          <div>
            <SectionHead title="Shrihari Geo Services Private Limited" />
            <p>Based in the temple city of Bhubaneswar, Odisha, Shrihari Geo Services Pvt. Ltd. is a premier provider of comprehensive geospatial, surveying and land consultancy solutions. Our multidisciplinary team of surveyors, GIS analysts, urban planners and environmental experts combines deep local knowledge of Odisha with modern technology to deliver accurate, reliable and compliant solutions for diverse development needs.</p>
            <ul className="mini">
              {["Local Expertise (Odisha & Beyond)", "Multidisciplinary Expert Team", "Technology-Driven Approach", "Reliable & Compliant Solutions"].map((t) => <li key={t}><Icon name="Check" size={18} />{t}</li>)}
            </ul>
            <Link href="/about" className="link">Learn more about us <Icon name="ArrowRight" size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="sec tint">
        <div className="wrap">
          <SectionHead title="Comprehensive Survey, Engineering & Geospatial Services" sub="Specialist teams across the full project lifecycle, from first survey to final clearance." />
          <div className="grid g3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="scard">
                <Photo name={s.img} className="scard-img" />
                <div className="scard-body">
                  <span className="ico sm"><Icon name={s.icon} size={20} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="more">View details <Icon name="ArrowRight" size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap">
          <SectionHead title="Our Technical Capabilities" sub="High-accuracy instruments and modern software behind every deliverable." />
          <div className="grid g4">{tech.map((t) => <IconCard key={t.title} {...t} />)}</div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead title="Our Project Methodology" sub="A structured and quality-driven approach for reliable project outcomes." />
          <ol className="steps">{process.map((p, i) => (
            <li key={p.title}><span className="ico"><Icon name={p.icon} /></span><b>{p.title}</b><small>{p.text}</small></li>
          ))}</ol>
        </div>
      </section>

      <section className="sec tint">
        <div className="wrap">
          <SectionHead title="Industries We Serve" />
          <div className="grid g4">{industries.map((i) => <IconCard key={i.title} icon={i.icon} title={i.title} />)}</div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap two">
          <div>
            <SectionHead title="Why Choose SGS?" />
            <div className="grid g2">{why.map((w) => <IconCard key={w.title} {...w} />)}</div>
          </div>
          <div>
            <SectionHead title="Our Values" />
            <div className="vals">{values.map((v) => (
              <div key={v.title}><span className="ico sm"><Icon name={v.icon} size={20} /></span><div><h3>{v.title}</h3><p>{v.text}</p></div></div>
            ))}</div>
          </div>
        </div>
      </section>

      <section className="sec tint">
        <div className="wrap">
          <div className="rowhead"><SectionHead title="Featured Projects" sub="A glimpse of our work across infrastructure, mining, forestry and water resources." /><Link href="/projects" className="btn btn-primary">View All Projects</Link></div>
          <div className="grid g3">{projects.slice(0, 3).map((p) => (
            <article key={p.slug} className="pcard"><Photo name={p.img} className="pimg"><span className="tag">{p.tag}</span></Photo><div className="pbody"><h3>{p.title}</h3><p>{p.text}</p></div></article>
          ))}</div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="rowhead"><SectionHead title="Insights & News" sub="Updates, technical articles and regulatory guidance from our experts." /><Link href="/insights" className="btn btn-primary">View All Insights</Link></div>
          <div className="grid g3">{insights.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/insights/${p.slug}`} className="pcard blog-card"><Photo name={p.img} className="pimg"><span className="tag">{p.tag}</span></Photo><div className="pbody"><time dateTime={p.iso}>{p.date}</time><h3>{p.title}</h3><p>{p.text}</p><span className="more">Read article <Icon name="ArrowRight" size={16} /></span></div></Link>
          ))}</div>
        </div>
      </section>
      <section className="sec tint">
        <div className="wrap">
          <div className="rowhead"><SectionHead title="Life in the Field" sub="Real sites, real instruments: a look at our survey teams at work." /><Link href="/gallery" className="btn btn-primary">View Full Gallery</Link></div>
          <Gallery items={[gallery[0], gallery[4], gallery[2], gallery[1]]} className="gal-home" />
        </div>
      </section>
      <Cta />
    </>
  );
}
