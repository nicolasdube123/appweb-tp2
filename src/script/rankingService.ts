import axios from 'axios'

const SHIPS_PATH = '/songs'

export interface Ranking {
    id: String;
    name: String;
    score: number;
}
export const DEFAULT_RANKING: Ranking = {
    id: "0",
    name: "Error",
    score: 0
}

export class ShipService {
  API_URL: String

  constructor () {
    this.API_URL = 'http://localhost:3000'
  }

  async getRankings(): Promise<Array<Ranking>> {
    const { data } = await axios.get(this.API_URL + SHIPS_PATH)
    return data
  }

  async getRanking (songId: String):Promise<Ranking> {
    const { data } = await axios.get(this.API_URL + SHIPS_PATH + '/' + songId)
    return data
  }
}