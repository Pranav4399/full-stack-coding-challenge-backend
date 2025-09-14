import { NextPage } from "next";
import Link from "next/link";

import Layout from "../components/layout";
import useApiData from "../hooks/use-api-data";
import Airport from "../types/airport";
import { useEffect, useState } from "react";

const Page: NextPage = () => {
  const [deboundedSearch, setDebouncedSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [limit, setLimit] = useState(20)
  const airports = useApiData<Airport[]>(`/api/airports?search=${deboundedSearch}&limit=${limit}`, []) ?? [];

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 500);

    return () => clearTimeout(timer);
  }, [searchTerm])

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Code Challenge: Airports</h1>

      <input style={{width: "100%", margin: "10px 0", border: "1px solid Gray", borderRadius: "4px"}} placeholder="Search by iata, name, city, country" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      <input type="number" style={{width: "100%", margin: "10px 0", border: "1px solid Gray", borderRadius: "4px"}} placeholder="Set Limit" value={limit} onChange={(e) => setLimit(e.target.valueAsNumber)} />
      <h2 className="mt-10 text-xl font-semibold">All Airports</h2>

      <div>
        {airports.map((airport) => (
          <Link
            className="flex items-center p-5 mt-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
            href={`/airports/${airport.iata.toLowerCase()}`}
            key={airport.iata}
          >
            <span>
              {airport.name}, {airport.city}
            </span>
            <span className="ml-auto text-gray-500">{airport.country}</span>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Page;
