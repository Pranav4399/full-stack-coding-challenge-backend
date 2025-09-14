import { gql } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../utils/api-client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //const airports = await allAirports()
  //res.status(200).json(airports)

  const { iata } = req.query;

  try {
    const result = await client
    .query({
      query: gql`
        query GetAirport($iata: String!) {
          getAirport(iata: $iata) {
            iata,
            name,
            city,
            country,
            latitude,
            longitude
          }
        }
      `,
      variables: { iata: iata }
    });
    
    return res.status(200).json(result.data.getAirport);
  }
  catch(error) {
    return res.status(500).json({error})
  }
}
