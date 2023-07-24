'use client';

import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Kbd,
  VisuallyHidden,
  chakra,
  HStack,
  InputLeftElement,
  VStack,
  Flex,
  Text,
  Select,
  Box,
  Img,
  Spinner,
} from '@chakra-ui/react';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import Result from './Result';
import { SearchItem } from './data';
import Pagination from './Pagination';
import SmallWithSocial from './Footer';

const ACTION_KEY_DEFAULT = ['Ctrl', 'Control'];
const ACTION_KEY_APPLE = ['⌘', 'Command'];

const placeholders = [
  'Kubernetes',
  'Machine learning',
  'Nextjs',
  'React',
  'Vue',
  'Docker',
  'AWS',
  'GCP',
  'Azure',
  'Python',
];

export default function Home() {
  const [actionKey, setActionKey] = useState<string[]>(ACTION_KEY_APPLE);
  const [placeholder, setPlaceholder] = useState<string>(() => {
    return placeholders[Math.floor(Math.random() * placeholders.length)];
  });
  const [search, setSearch] = useState<string>('');
  const [items, setItems] = useState<SearchItem[]>([]);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const doSearch = useCallback(
    async (tag?: string) => {
      setItems([]);
      setIsSearch(true);
      const data = await fetch(`/api?q=${tag ? tag : search}&page=${page}`);
      const json = await data.json();

      const total = json.total as number;
      const pagesNumber = Math.ceil(total / 10);
      const items = json.data as SearchItem[];

      setMaxPage(pagesNumber > 100 ? 100 : pagesNumber);

      setItems(items);
      setIsSearch(false);
    },
    [search, page]
  );

  useEffect(() => {
    doSearch();
  }, [page]);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
    if (!isMac) {
      setActionKey(ACTION_KEY_DEFAULT);
    }

    const ctrl1 = (e: KeyboardEvent) => e.ctrlKey && e.key === 'k';
    const enter = (e: KeyboardEvent) => e.key === 'Enter';

    const handler = (e: KeyboardEvent) => {
      if (ctrl1(e)) {
        inputRef.current?.focus();
      } else if (enter(e)) {
        doSearch();
      }
    };

    const ignore = (e: KeyboardEvent) => {
      if (ctrl1(e)) {
        e.preventDefault();
      }
    };

    window.addEventListener('keyup', handler);
    window.addEventListener('keydown', ignore);

    return () => {
      window.removeEventListener('keyup', handler);
      window.removeEventListener('keydown', ignore);
    };
  }, [doSearch]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const setTagSearch = (tag: string) => {
    setSearch(tag);
    doSearch(tag);
  };

  return (
    <VStack>
      <Flex gap={4}>
        <Text display={'flex'} alignItems={'center'} fontSize={'1.2rem'}>
          I want to learn about
        </Text>
        <InputGroup size="lg" width="60vw">
          <Input
            pr="8rem"
            type="text"
            placeholder={placeholder}
            ref={inputRef}
            onSubmit={() => doSearch()}
            value={search}
            onChange={handleChange}
          />
          <InputRightElement width="8rem">
            <HStack spacing="4px">
              <VisuallyHidden>Hotkey for opening search bar</VisuallyHidden>
              <Kbd rounded="2px">
                <chakra.div as="abbr" title={actionKey[1]} textDecoration="none !important">
                  {actionKey[0]}
                </chakra.div>
              </Kbd>
              <Kbd rounded="2px">K</Kbd>
            </HStack>
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Box mt="4rem">
        {isSearch && <Spinner size="xl" mt={10} />}
        <Box minHeight={'60vh'}>
          <Result items={items} onClick={setTagSearch} />
        </Box>
        {items.length !== 0 && (
          <Flex justifyContent={'center'} mt={6}>
            <Pagination onChange={setPage} page={page} total={maxPage} />
          </Flex>
        )}
      </Box>
      <SmallWithSocial />
    </VStack>
  );
}
