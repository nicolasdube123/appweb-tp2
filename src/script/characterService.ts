import axios from 'axios'

const SHIPS_PATH = '/songs'

export interface Character {
    id: String;
    name: String;
    credit: String;
    experience: String;
    ship: String;
}

export class ShipService {
  API_URL: String

  constructor () {
    this.API_URL = 'http://localhost:3000'
  }

  async getCharacters(): Promise<Array<Character>> {
    const { data } = await axios.get(this.API_URL + SHIPS_PATH)
    return data
  }

  async getCharacter (songId: String):Promise<Character> {
    const { data } = await axios.get(this.API_URL + SHIPS_PATH + '/' + songId)
    return data
  }
}