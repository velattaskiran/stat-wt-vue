import axios from "axios";

const PLAYER_API_BASE_URL = 'http://localhost:8080/api/players'

class PlayerService{
    getPlayers(){
        return axios.get(PLAYER_API_BASE_URL);
    }
}

export default new PlayerService()