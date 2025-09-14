import { NextApiRequest, NextApiResponse } from 'next'
import client from '../../utils/api-client'
import { gql } from '@apollo/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //const airports = await allAirports()
  //res.status(200).json(airports)

  const { search, limit } = req.query;

  try {
    const result = await client
    .query({
      query: gql`
        query GetAirports($search: String!, $limit: Int) {
          getAirports(search: $search, limit: $limit) {
            iata
            name
            city
            country
          }
        }
      `,
      variables: { search, limit: Number(limit) }
    });

    return res.status(200).json(result.data.getAirports);
  }
  catch(error) {
    return res.status(500).json({error})
  }
}
