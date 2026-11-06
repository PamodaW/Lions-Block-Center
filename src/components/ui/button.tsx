import Link from "next/link";

export function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
}) {
  return (
    <Link className={variant === "ghost" ? "btn ghost" : "btn"} href={href}>
      {children}
    </Link>
  );
}
