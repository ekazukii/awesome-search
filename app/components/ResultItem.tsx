import { Card, CardBody, CardHeader, Img, Link, Tag, Text, Tooltip } from '@chakra-ui/react';
import { SearchItem } from './data';
import GitHubIcon from './GitHubIcon';

export default function ResultItem({ item, onClick }: { item: SearchItem; onClick: (tag: string) => void }) {
  return (
    <Card size="sm" width="76vw">
      <CardHeader>
        <Text pt={0}>
          <Tooltip label={item.description}>
            <Link mx={2} href={item.URL} isExternal color="teal.500">
              {item.displayName ? item.displayName : 'No title found'} {item.isGithub && <GitHubIcon />}
            </Link>
          </Tooltip>
          - {item.origin_description}
          <Tag
            ml={2}
            color="teal"
            cursor="pointer"
            _hover={{ textDecor: 'underline' }}
            onClick={() => onClick(item.repositoryname)}
          >
            {item.repositoryname}
          </Tag>
        </Text>
      </CardHeader>
    </Card>
  );
}
