
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    hello(): string | Promise<string>;
    getSeaport(id: number): Nullable<Seaport> | Promise<Nullable<Seaport>>;
    getAirports(search: string, limit?: Nullable<number>): Nullable<Airport[]> | Promise<Nullable<Airport[]>>;
    getAirport(iata: string): Airport | Promise<Airport>;
}

export interface Seaport {
    id: number;
    name: string;
    location?: Nullable<Location>;
}

export interface Location {
    city: string;
    countryAlpha2: string;
}

export interface Airport {
    name: string;
    iata: string;
    city: string;
    country: string;
    longitude: number;
    latitude: number;
}

type Nullable<T> = T | null;
