import ResultItem from './ResultItem';
import { SearchItem } from './data';
export default function Result({ items, onClick }: { items: SearchItem[]; onClick: (tag: string) => void }) {
  return items.map((resultItem, index) => <ResultItem onClick={onClick} item={resultItem} key={index} />);
}
