type BadgeListProps = {
  items: string[];
};

export function BadgeList({ items }: BadgeListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span className="badge" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}
