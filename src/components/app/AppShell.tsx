import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Home, PlusCircle, Bell, User, ChevronLeft } from "lucide-react";
import { useStore } from "@/lib/store";

export function AppShell({ title, back, children, requireAuth = true }: { title?: string; back?: boolean; children: ReactNode; requireAuth?: boolean }) {
  const { user, hydrated, notis } = useStore();
  const nav = useNavigate();
  useEffect(() => { if (requireAuth && hydrated && !user) nav({ to: "/login" }); }, [requireAuth, hydrated, user, nav]);
  const items = [
    { to: "/", label: "홈", Icon: Home },
    { to: "/create", label: "쉐어 등록", Icon: PlusCircle },
    { to: "/notifications", label: "알림", Icon: Bell },
    { to: "/my", label: "마이", Icon: User },
  ] as const;
  return (
    <div className="min-h-screen bg-secondary">
      <div className="mx-auto flex min-h-screen max-w-[480px] flex-col bg-background shadow-app">
        {title && (
          <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b bg-background/90 px-4 backdrop-blur">
            {back && <button aria-label="뒤로" onClick={() => history.back()} className="-ml-2 p-2"><ChevronLeft className="size-5" /></button>}
            <h1 className="text-lg font-bold">{title}</h1>
          </header>
        )}
        <main className="flex-1 px-4 pb-28 pt-4">{children}</main>
        {requireAuth && (
          <nav className="fixed bottom-0 left-1/2 z-20 grid w-full max-w-[480px] -translate-x-1/2 grid-cols-4 border-t bg-background">
            {items.map(({ to, label, Icon }) => (
              <Link key={to} to={to} activeOptions={{ exact: true }} className="relative flex flex-col items-center gap-1 py-2.5 text-xs text-muted-foreground data-[status=active]:font-semibold data-[status=active]:text-primary">
                <Icon className="size-5" />{label}
                {to === "/notifications" && notis.length > 0 && <span className="absolute right-[30%] top-2 size-2 rounded-full bg-primary" />}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
export const btn = "inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary font-semibold text-primary-foreground transition active:scale-[.98] disabled:opacity-40";
export const btnGhost = "inline-flex h-12 w-full items-center justify-center rounded-xl bg-secondary font-semibold text-secondary-foreground";
export const input = "h-12 w-full rounded-xl border bg-background px-4 outline-none focus:border-primary";
export const card = "rounded-2xl border bg-card p-4";
