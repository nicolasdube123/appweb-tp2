import axios from 'axios'

const RANKING_PATH = '/ranking'
// Les id de la base de données commencent à 4
let id = 4

export interface Ranking {
    id: String;
    name: String;
    score: number;
}

export class RankingService {
  API_URL: String

  constructor () {
    this.API_URL = 'http://localhost:3000'
  }
  
  async getRankings(): Promise<Array<Ranking>> {
    const { data } = await axios.get(this.API_URL + RANKING_PATH)
    return data
  }
  
  async getRanking (playerId: String):Promise<Ranking> {
    const { data } = await axios.get(this.API_URL + RANKING_PATH + '/' + playerId)
    return data
  }

  async insertRanking(name: String, score: String) {
    await axios.post(this.API_URL + RANKING_PATH, {
      id: id.toString,
      name: name,
      score: score
    })
    id++
  }
}