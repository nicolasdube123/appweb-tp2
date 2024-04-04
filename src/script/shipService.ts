import axios from 'axios'

const SHIPS_PATH = '/songs'

export interface Ships {
    id: String;
    name: String;
}
export const DEFAULT_SONG: Ships = {
    id: "20",
    name: "Millennium Falcon"
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

  async getShip (songId: Number):Promise<Ships> {
    const { data } = await axios.get(this.API_URL + SHIPS_PATH + '/' + songId)
    return data
  }
}