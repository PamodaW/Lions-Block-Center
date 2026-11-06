import { T } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { steps } from "@/lib/data/services";

export function ProcessSteps() {
  return (
    <section className="block" id="process">
      <div className="wrap">
        <SectionHeading eyebrow={<T>How we work</T>} title={<><T>A clear path</T><br /><T>from idea to handover.</T></>} />
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <b>{s.n}</b>
              <h3><T>{s.title}</T></h3>
              <p><T>{s.text}</T></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
