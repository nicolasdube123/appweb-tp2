import axios from 'axios'
import { ShipsWithLife } from './shipService';

const CHARACTERS_PATH = '/characters'

export const experiences: { [key: number]: string } = {
  1: "Débutant",
  2: "Confirmé",
  3: "Expert",
  4: "Maitre"
}

export const fightingOdds: { [key: number]: number } = {
  1: 0.2,
  2: 0.35,
  3: 0.5,
  4: 0.7
}

export interface Character {
    id: String;
    name: String;
    credit: String;
    experience: number;
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