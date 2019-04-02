import teams from "./teams.json";

export default class DataService {
  static getTeams() {
    return teams ? teams : [];
  }
}
