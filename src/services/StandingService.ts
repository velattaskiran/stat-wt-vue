import axios from "axios";

const STANDING_API_BASE_URL = 'http://localhost:8080/api/standings'; // Eğer Spring Boot uygulaman 8080'de çalışıyorsa bu doğru

class StandingService{
    getStandingByLeagueId(leagueId: string) {
        return axios.get(STANDING_API_BASE_URL, {
            params: {
                leagueId: leagueId
            }
        });
    }
}

export default new StandingService();