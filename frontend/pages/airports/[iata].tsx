import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

import Layout from "../../components/layout";
import useApiData from "../../hooks/use-api-data";
import Airport from "../../types/airport";

interface Props {
  iata: string;
}

const Page: NextPage<Props> = ({ iata }) => {
  const airport = useApiData<Airport[]>(`/api/airport?iata=${iata}`, []);
  return (
    <Layout>
      <h1 className="mb-4 text-2xl font-bold">Airport: {airport.name}</h1>
      <Link
        href="/"
        className="text-blue-400 hover:text-blue-600 hover:underline"
      >
        ← Back to overview
      </Link>
      <pre className="p-2 mt-6 text-sm text-gray-500 rounded bg-gray-50">
        {JSON.stringify(airport, undefined, 2)}
      </pre>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { iata } = params;

  return {
    props: {
      iata,
    },
  };
};

export default Page;
