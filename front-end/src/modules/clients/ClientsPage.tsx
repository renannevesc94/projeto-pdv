export default function ClientsPage() {
  const colors = [
    "--background",
    "--foreground",
    "--card",
    "--card-foreground",
    "--popover",
    "--popover-foreground",
    "--primary",
    "--primary-foreground",
    "--secondary",
    "--secondary-foreground",
    "--muted",
    "--muted-foreground",
    "--accent",
    "--accent-foreground",
    "--destructive",
    "--destructive-foreground",
    "--border",
    "--input",
    "--ring",
    "--chart-1",
    "--chart-2",
    "--chart-3",
    "--chart-4",
    "--chart-5",
    "--sidebar-background",
    "--sidebar-foreground",
    "--sidebar-primary",
    "--sidebar-primary-foreground",
    "--sidebar-accent",
    "--sidebar-accent-foreground",
    "--sidebar-border",
    "--sidebar-ring",
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {colors.map((color) => (
        <div
          key={color}
          className="p-4 rounded-xl shadow-md"
          style={{ backgroundColor: `hsl(var(${color}))` }}
        >
          <p
            className="text-sm font-semibold"
            style={{ color: `hsl(var(${color}-foreground, 0 0% 0%))` }}
          >
            {color}
          </p>
        </div>
      ))}
    </div>
  );
}
