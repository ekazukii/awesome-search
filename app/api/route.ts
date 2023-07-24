import { NextResponse } from 'next/server';
import { searchResult, SearchItem } from '../components/data';
import { Client } from '@elastic/elasticsearch';

const client = new Client({
  node: process.env.ELASTIC_URL || '',
  auth: {
    apiKey: {
      id: process.env.ELASTIC_KEY_ID || '',
      api_key: process.env.ELASTIC_KEY || '',
    },
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams);
  const query = searchParams.get('q') || '';
  const page = parseInt(searchParams.get('page') || '1');
  const size = 10;
  const res = await client.search({
    index: 'awesome-search',
    body: {
      from: size * (page - 1),
      size: size,
      query: {
        multi_match: {
          query: query,
          fields: ['title^4', 'description', 'origin_description^2', 'repositoryname^2', 'origin^6'],
        },
      },
      aggs: {
        unique_URLs: {
          terms: {
            field: 'URL.keyword',
            size: 10000,
          },
          aggs: {
            top_hits: {
              top_hits: {
                size: 1,
              },
            },
          },
        },
      },
    },
  });

  let total = 0;
  if (res.hits.total) {
    total = typeof res.hits.total === 'number' ? res.hits.total : res.hits.total.value;
  }

  return NextResponse.json({
    total,
    data: res.hits.hits.map((item: any) => item._source),
  });
}
