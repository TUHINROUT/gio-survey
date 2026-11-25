import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const sora = Sora({ subsets: ["latin"], variable: "--f-head", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--f-body", display: "swap" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Geospatial, Surveying & Engineering Consultancy in Odisha`, template: `%s | ${site.short}` },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name, authors: [{ name: site.name }], creator: site.name, publisher: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { title: site.name, description: site.description, type: "website", locale: "en_IN", siteName: site.name, url: "/", images: [{ url: "/images/hero.jpg", width: 1672, height: 941, alt: site.name }] },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/images/hero.jpg"] },
  formatDetection: { telephone: true, email: true },
};
export const viewport = { themeColor: "#0a1a3f", width: "device-width", initialScale: 1 };

const orgLd = {
  "@context": "https://schema.org", "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
  name: site.name, alternateName: "Shrihari Geo Services Private Limited", url: site.url, logo: `${site.url}/logo.png`, image: `${site.url}/images/hero.jpg`,
  description: site.description, email: site.email, telephone: site.phones[0],
  address: { "@type": "PostalAddress", streetAddress: "Plot No. 1330/384, Palasuni, Rasulgarh", addressLocality: "Bhubaneswar", addressRegion: "Odisha", postalCode: "751010", addressCountry: "IN" },
  areaServed: [{ "@type": "State", name: "Odisha" }, { "@type": "Country", name: "India" }],
  knowsAbout: site.keywords,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
