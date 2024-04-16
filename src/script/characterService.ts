import axios from 'axios'
import { ShipsWithLife } from './shipService';

const CHARACTERS_PATH = '/characters'

export interface Character {
    id: String;
    name: String;
    credit: String;
    experience: String;
    ship: ShipsWithLife;
}

export interface Player {
    name: String;
    credit: number;
    ship: ShipsWithLife;
}

export class CharacterService {
  API_URL: String

  constructor () {
    this.API_URL = 'http://localhost:3000'
  }

  async getCharacters(): Promise<Array<Character>> {
    const { data } = await axios.get(this.API_URL + CHARACTERS_PATH)
    return data
  }

  async getCharacter (characterId: String):Promise<Character> {
    const { data } = await axios.get(this.API_URL + CHARACTERS_PATH + '/' + characterId)
    return data
  }
}