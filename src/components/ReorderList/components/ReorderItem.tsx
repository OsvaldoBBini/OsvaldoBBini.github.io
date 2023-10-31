import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "../../../hooks/useRaisedShadow";
import { IListItem } from "../../../types/types";

interface Props {
  item: IListItem;
  onRemoveItens: (itemId: number) => void
}

export default function ReorderItem({ item, onRemoveItens }: Props): JSX.Element {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item value={item} id={item.name} style={{ boxShadow, y }}>
      <span>{item.icon} {item.name}</span>
      <button onClick={() => onRemoveItens(item.id)}>remover produto</button>
    </Reorder.Item>
  );
}
