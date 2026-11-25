import Image from "next/image";
// Full SGS logo (public/logo.png). On dark backgrounds it sits on a white pill for legibility.
export default function Logo({ light = false, height = 56 }) {
  return (
    <span className={`logo ${light ? "light" : ""}`}>
      <Image src={light ? "/logo-card.jpg" : "/logo.png"} alt="Shrihari Geo Services Private Limited" width={light ? 220 : Math.round(height * 2.16)} height={light ? 102 : height} priority style={{ height: light ? 102 : height, width: "auto" }} />
    </span>
  );
}
