import { Airline } from "../../utils/inerfaces/models";

class AirlineService {
  static async create(data: Airline): Promise<void>{
    console.log(data.flights);
    await Promise.resolve()
  }
}

export default AirlineService