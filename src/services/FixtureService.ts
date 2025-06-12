import axios from "axios";

const FIXTURE_API_BASE_URL = 'http://localhost:8080/api/fixtures'

class FixtureService{
    getFixtureByLeagueId(leagueId: string) {
        return axios.get(FIXTURE_API_BASE_URL, {
            params: {
                leagueId: leagueId
            }
        });
    }

    // getFixtureByTeamId(teamId: string) {
    //     return axios.get(`${FIXTURE_API_BASE_URL}?team_id=${teamId}`);
    // }
}

export default new FixtureService()