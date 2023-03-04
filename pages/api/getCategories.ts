// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'

type Data = {
  categories: [CategoryProps]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query = groq`*[_type == "category"] {
    _id,
    ...
  }`

  const categories = await sanityClient.fetch(query)

  return res.status(200).json(categories)
}
