import { T } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="wrap" style={{ gridTemplateColumns: "1fr" }}>
        <div>
          <p className="eyebrow">404</p>
          <h1><T>Page not found.</T></h1>
          <ButtonLink href="/"><T>Back home →</T></ButtonLink>
        </div>
      </div>
    </section>
  );
}
