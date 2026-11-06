import { T } from "@/lib/i18n";
import { site } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="block dark cta" id="contact">
      <div className="wrap">
        <p className="eyebrow"><T>Start a project</T></p>
        <h2><T>Let’s build something that lasts.</T></h2>
        <a className="btn" href={`tel:${site.phone}`}><T>Call</T> {site.phoneDisplay} →</a>
      </div>
    </section>
  );
}
