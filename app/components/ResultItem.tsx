import { Card, CardBody, CardHeader, Img, Link, Tag, Text, Tooltip } from '@chakra-ui/react';
import { SearchItem } from './data';
import GitHubIcon from './GitHubIcon';
import { useEffect, useState } from 'react';

const httpTagRegex = /<[^>]*>?/gm;
const markdownLinkRegex = /\]\(https.*\)/gm;
const markdownImageRegex = /\[!\[.*\]\[.*]/gm;
const startingPattern = /^ *[-—\|]* */gm;
const emptyLinePattern = /^[-—\| $./]*$/gm;
const removeTrailingPattern = /[-—\| ]*$/gm;

export default function ResultItem({ item, onClick }: { item: SearchItem; onClick: (tag: string) => void }) {
  const [cleanItem, setCleanItem] = useState<SearchItem | null>(null);

  useEffect(() => {
    let origin_description = item.origin_description;
    if (origin_description) {
      origin_description = origin_description
        .replace(httpTagRegex, '')
        .replace(markdownLinkRegex, '')
        .replace(markdownImageRegex, '')
        .replace(startingPattern, '')
        .replace(emptyLinePattern, '')
        .replace(removeTrailingPattern, '');
    }
    setCleanItem({ ...item, origin_description });
  }, [item]);

  if (!cleanItem) {
    return <></>;
  }

  return (
    <Card size="sm" width="76vw">
      <CardHeader>
        <Text pt={0}>
          <Tooltip label={cleanItem.description}>
            <Link mx={2} href={cleanItem.URL} isExternal color="teal.500">
              {cleanItem.displayName ? cleanItem.displayName : 'No title found'} {cleanItem.isGithub && <GitHubIcon />}
            </Link>
          </Tooltip>
          - {cleanItem.origin_description}
          <Tag
            ml={2}
            color="teal"
            cursor="pointer"
            _hover={{ textDecor: 'underline' }}
            onClick={() => onClick(cleanItem.repositoryname)}
          >
            {cleanItem.repositoryname}
          </Tag>
        </Text>
      </CardHeader>
    </Card>
  );
}
