import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '@/sanity'

const query = groq`*[_type == 'product'] {
  _id,
  ...
} | order(_createdAt asc)`

type Data = {
  products: ProductProps[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products: ProductProps[] = await sanityClient.fetch(query)
  res.status(200).json({ products })
}
