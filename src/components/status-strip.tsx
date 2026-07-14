import { cn } from "@/lib/utils";

export type DayStatus = "operational" | "degraded" | "outage" | "maintenance";

const STATUS_STYLES: Record<DayStatus, string> = {
  operational: "bg-status-operational",
  degraded: "bg-status-degraded",
  outage: "bg-status-outage",
  maintenance: "bg-status-maintenance",
};

const STATUS_LABEL: Record<DayStatus, string> = {
  operational: "Operational",
  degraded: "Degraded performance",
  outage: "Outage",
  maintenance: "Maintenance",
};

/**
 * A day-by-day uptime history strip, the same pattern used on the public
 * status page (M4). Each bar is one day; color is the only thing that
 * carries meaning anywhere in this product - see globals.css.
 */
export function StatusStrip({
  days,
  className,
}: {
  days: DayStatus[];
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Uptime history: ${days.filter((d) => d === "operational").length} of ${days.length} days fully operational`}
      className={cn("flex items-end gap-[3px]", className)}
    >
      {days.map((status, i) => (
        <span
          key={i}
          title={STATUS_LABEL[status]}
          className={cn("h-8 w-1.5 rounded-sm sm:w-2", STATUS_STYLES[status])}
        />
      ))}
    </div>
  );
}