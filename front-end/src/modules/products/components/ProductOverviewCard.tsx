type ProductOverviewCardProps = {
  title: string;
  content: string;
  footer: string;
};

export default function ProductOverviewCard({ title, content, footer }: ProductOverviewCardProps) {
  return (
    <div className="shadow-accent-foreground shadow-sm rounded-md p-1 h-full min-w-44">
      <h1 className="text-center h-1/3">{title}</h1>
      <div className="font-semibold text-2xl h-1/3">{content}</div>
      <div className="text-[13px] flex items-end h-1/3">
        Nos ultimos 30 dias: <span className="font-semibold ml-1 text-green-600">{footer}</span>{" "}
      </div>
    </div>
  );
}
