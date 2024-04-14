import axios from 'axios'

const SHIPS_PATH = '/ships'

export interface Ships {
    id: String;
    name: String;
}
export interface ShipsWithLife {
  id: String;
  name: String;
  vitality: number;
}

export class ShipService {
  API_URL: String

  constructor () {
    this.API_URL = 'http://localhost:3000'
  }

  async getShips(): Promise<Array<Ships>> {
    const { data } = await axios.get(this.API_URL + SHIPS_PATH)
    return data
  }

  async getShip (songId: String):Promise<Ships> {
    const { data } = await axios.get(this.API_URL + SHIPS_PATH + '/' + songId)
    return data
  }
}