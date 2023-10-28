import { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import { IListItem } from "../../types/types";
import ReorderItem from "./components/ReorderItem";

interface IReorderList {
  selectedItens: IListItem[],
  onRemoveItens: (itemId: number) => void
}

export default function ReorderList({selectedItens, onRemoveItens}: IReorderList) {
  
  const [items, setItems] = useState<IListItem[]>([]);

  useEffect(() => {
    setItems(selectedItens)
  }, [selectedItens])

  return (
    <Reorder.Group
      axis="y"
      onReorder={setItems}
      values={items}
    >
      {items.map((item) => (
        <ReorderItem key={item.id} item={item} onRemoveItens={onRemoveItens}/>
      ))}
    </Reorder.Group>
  );
}
