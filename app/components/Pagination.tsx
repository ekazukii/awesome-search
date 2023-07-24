import { Button, ButtonGroup } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export type PaginationProps = {
  onChange: (page: number) => void;
  page: number;
  total: number;
};

export default function Pagination({ onChange, page, total }: PaginationProps) {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const pages = new Set<number>();

    if (page > 2) {
      pages.add(1);
      if (page > 4) pages.add(0);
    }

    const previousPages = Math.min(2, page - 1);
    const nextPages = Math.min(2, total - page);

    for (let i = page - previousPages; i <= page + nextPages; i++) {
      if (i > 0 && i <= total) {
        pages.add(i);
      }
    }

    if (page < total - 2) {
      if (page < total - 3) pages.add(-1);
      pages.add(total);
    }

    setPages([...pages]);
  }, [page, total]);

  return (
    <>
      <ButtonGroup variant="outline" spacing="6">
        {pages.map((p, i) =>
          p <= 0 ? (
            <Button key={i} disabled>
              ...
            </Button>
          ) : (
            <Button key={i} colorScheme={p === page ? 'blue' : undefined} onClick={() => onChange(p)}>
              {p}
            </Button>
          )
        )}
      </ButtonGroup>
    </>
  );
}
