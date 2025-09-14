import { Injectable } from '@nestjs/common';
import airports from './data/data'; // Considered DB for the sake of assesment

// MOCK DATA
const locations = [
  { portId: 1, city: 'Hamburg', countryAlpha2: 'DE' },
  // { portId: 2, city: 'Rotterdam', country: 'Netherlands' },
];

const seaports = [
  { id: 1, name: 'Hamburg' },
  { id: 2, name: 'Rotterdam' },
];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Tilla!';
  }

  findSeaportById(id: number) {
    return seaports.find((port) => port.id === id);
  }

  findLocationForPort(portId: number) {
    console.log(`SERVICE: Checking for location of port ${portId}...`);
    return locations.find((loc) => loc.portId === portId);
  }

  getAirports(search: string, limit: number) {
    const filterData = airports.filter(airport => 
      airport.iata.includes(search) ||
      airport.name.includes(search) ||
      airport.city.includes(search) ||
      airport.country.includes(search)
    );

    return filterData.slice(0, limit);
  }

  getAirport(iata: string) {
    return airports.find(airport => airport.iata.toLowerCase() === iata.toLowerCase());
  }
}
