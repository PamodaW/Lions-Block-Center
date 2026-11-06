import { T } from "@/lib/i18n";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <a className="ul" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        <span><T>{site.contactNote}</T></span>
      </div>
    </footer>
  );
}
