import axios from 'axios'

const SHIPS_PATH = '/ships'

export interface Ship {
    id: String;
    name: String;
}
export interface ShipsWithLife {
  id: String;
  name: String;
  vitality: number;
}
export const NO_SERVICE_SHIP: Ship = {
  id: "0",
  name: "Erreur"
}

export class ShipService {
  API_URL: String

  constructor () {
    this.API_URL = 'http://localhost:3000'
  }

  async getShips(): Promise<Array<Ship>> {
    const { data } = await axios.get(this.API_URL + SHIPS_PATH)
    return data
  }

  async getShip (shipId: String):Promise<Ship> {
    const { data } = await axios.get(this.API_URL + SHIPS_PATH + '/' + shipId)
    return data
  }
}