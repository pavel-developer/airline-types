export interface Airport {
  wheather: string;
  name: string
}

export interface Flight {
  souce: Airport,
  destination: Airport
  name: string
}

export interface Airline {
  flights: Array<Flight>
  name: string
}


