import axios from "axios";

const STANDING_API_BASE_URL = 'http://localhost:8080/api/standings'

class StandingService{
    getStandingByLeagueId(leagueId: string) {
        return axios.get(`${STANDING_API_BASE_URL}?league_id=${leagueId}`);
    }
}

export default new StandingService()