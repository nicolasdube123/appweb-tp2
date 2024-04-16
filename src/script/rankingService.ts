import axios from 'axios'

const RANKING_PATH = '/ranking'

export interface Player {
    id: String;
    name: String;
    score: number;
}

export class RankingService {
  API_URL: String

  constructor () {
    this.API_URL = 'http://localhost:3000'
  }

  async getRankings(): Promise<Array<Player>> {
    const { data } = await axios.get(this.API_URL + RANKING_PATH)
    return data
  }

  async getRanking (playerId: String):Promise<Player> {
    const { data } = await axios.get(this.API_URL + RANKING_PATH + '/' + playerId)
    return data
  }
}