import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page-hero">
      <p className="text-xs uppercase tracking-widest text-muted">404</p>
      <h1 className="page-title mt-6 sm:mt-8">Nothing here.</h1>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-11 items-center text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-ink sm:mt-10"
      >
        Go back home
      </Link>
    </section>
  );
}
