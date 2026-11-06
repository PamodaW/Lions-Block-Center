import { T } from "@/lib/i18n";
import { stats } from "@/lib/data/services";

export function StatsBand() {
  return (
    <section className="stats">
      <div className="wrap">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <b>{s.value}</b>
            <span><T>{s.label}</T></span>
          </div>
        ))}
      </div>
    </section>
  );
}
