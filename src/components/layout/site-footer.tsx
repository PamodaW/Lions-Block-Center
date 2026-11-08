import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <a className="ul" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        <a className="ul" href={`mailto:${site.email}`}>{site.email}</a>
      </div>
    </footer>
  );
}
