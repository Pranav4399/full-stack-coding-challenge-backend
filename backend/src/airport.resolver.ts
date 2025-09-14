import { Args, Query, Resolver } from "@nestjs/graphql";
import { AppService } from "./app.service";

@Resolver('Airport')
export class AirportResolver {
    constructor(private readonly appService: AppService) {}

    @Query()
    getAirports(@Args({name: 'search', type: () => String}) search: string, 
                @Args({name: 'limit', type: () => Number}) limit: number) {
        return this.appService.getAirports(search, limit)
    }

    @Query()
    getAirport(@Args({name: 'iata', type: () => String}) iata: string) {
        return this.appService.getAirport(iata);
    }
}