import Link from "next/link";
export default function NotFound() {
  return <section className="phero"><div className="wrap"><h1>Page not found</h1><p className="lead">The page you are looking for does not exist.</p><Link href="/" className="btn btn-light">Back to home</Link></div></section>;
}
