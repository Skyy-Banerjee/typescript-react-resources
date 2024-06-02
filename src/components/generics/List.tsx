import { ReactNode } from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
  renderItem: (item: T) => ReactNode; // Add renderItem prop
};

function List<T>({ items, onClick, renderItem }: ListProps<T>) {
  return (
    <div>
      <h2>List of items -</h2>
      {items.map((item, idx) => (
        <h3 key={idx} onClick={() => onClick(item)}>
          {renderItem(item)} {/* Using renderItem to render the item */}
        </h3>
      ))}
    </div>
  );
}

export default List;
