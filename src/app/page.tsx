import { Button } from "@/components/ui/button";
import { StatusStrip, type DayStatus } from "@/components/status-strip";

// Deterministic demo data for the marketing page only. Real orgs get real
// history from the `Incident` table once M4 ships the public status page.
const DEMO_DAYS: DayStatus[] = Array.from({ length: 45 }, (_, i) => {
  if (i === 12) return "outage";
  if (i === 13) return "degraded";
  if (i === 30) return "maintenance";
  return "operational";
});

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-10 px-6 py-24 text-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Statusly
        </h1>
        <p className="max-w-md text-balance text-muted-foreground">
          Declare incidents, keep customers in the loop, and see your uptime
          story — on a status page you can stand up in minutes.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <StatusStrip days={DEMO_DAYS} />
        <p className="font-mono text-sm text-muted-foreground">
          99.94% uptime over the last 45 days
        </p>
      </div>

      <Button size="lg">Get started</Button>
    </main>
  );
}