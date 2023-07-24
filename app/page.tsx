'use client';

import styles from './page.module.css';
import SearchInput from './components/SearchInput';
import { Box, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Heading textAlign="center" my={12} color="teal">
        Awesome search
      </Heading>
      <SearchInput />
    </Box>
  );
}
