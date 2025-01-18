import axios from "axios";

const LEAGUE_API_BASE_URL = 'http://localhost:8080/api/leagues'

class LeagueService{
    getLeagues(){
        return axios.get(LEAGUE_API_BASE_URL);
    }
}

export default new LeagueService()