import { site, insights } from "@/data/site";
import { services } from "@/data/services";
export default function sitemap() {
  const top = ["", "/about", "/services", "/projects", "/gallery", "/industries", "/insights", "/contact"];
  return [
    ...top.map((p) => ({ url: site.url + p, lastModified: new Date(), changeFrequency: p === "" ? "weekly" : "monthly", priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 })),
    ...insights.map((a) => ({ url: `${site.url}/insights/${a.slug}`, lastModified: new Date(a.iso), changeFrequency: "yearly", priority: 0.6 })),
  ];
}
