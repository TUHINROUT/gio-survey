import { Target, Layers, Leaf, Settings, ShieldCheck, Plane, FileCheck, Handshake, Lightbulb, Star, Satellite, Ruler, Monitor, Search, Compass, BarChart3, BadgeCheck, Route, TrainFront, Pickaxe, TreePine, Droplets, Building2, Landmark, Map, Triangle, PawPrint, Drill, ArrowRight, Check, Phone, Mail, MapPin } from "lucide-react";
const map = { Target, Layers, Leaf, Settings, ShieldCheck, Plane, FileCheck, Handshake, Lightbulb, Star, Satellite, Ruler, Monitor, Search, Compass, BarChart3, BadgeCheck, Route, TrainFront, Pickaxe, TreePine, Droplets, Building2, Landmark, Map, Triangle, PawPrint, Drill, ArrowRight, Check, Phone, Mail, MapPin };
export default function Icon({ name, size = 22, ...p }) {
  const C = map[name] || Target;
  return <C size={size} strokeWidth={1.8} aria-hidden="true" {...p} />;
}
