<template>
    <div class = "container">
        <h1 class = "text-center"> Teams List </h1>
        <table class = "table table-striped">
            <thead>
                <tr>
                    <th> Team Name</th>
                    <th> Team Logo</th>
                    <th> Rank </th>
                    <th> Points</th>
                    <th> Goals Difference</th>
                    <th> Form </th>
                    <th> Description </th>
                    <th> Matches Played </th>
                    <th> Wins </th>
                    <th> Draws </th>
                    <th> Losses </th>
                    <th> Goals For </th>
                    <th> Goals Against </th>
                    <th> Home Matches Played </th>
                    <th> Home Wins </th>
                    <th> Home Draws </th>
                    <th> Home Losses </th>
                    <th> Home Goals For </th>
                    <th> Home Goals Against </th>
                    <th> Away Matches Played </th>
                    <th> Away Wins </th>
                    <th> Away Draws </th>
                    <th> Away Losses </th>
                    <th> Away Goals For </th>
                    <th> Away Goals Against </th>
                    <th> Last Updated </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "team in standing" v-bind:key = "team.id">
                    <td> {{ team.teamName }} </td>
                    <td> {{ team.teamLogo }}</td>
                    <td> {{ team.rank }} </td>
                    <td> {{ team.point }} </td>
                    <td> {{ team.goalsDiff }} </td>
                    <td> {{ team.form }} </td>
                    <td> {{ team.description }} </td>
                    <td> {{ team.played }} </td>
                    <td> {{ team.win }} </td>
                    <td> {{ team.draw }} </td>
                    <td> {{ team.lose }} </td>
                    <td> {{ team.goalsFor }} </td>
                    <td> {{ team.goalsAgainst }} </td>
                    <td> {{ team.homePlayed }} </td>
                    <td> {{ team.homeWin }} </td>
                    <td> {{ team.homeDraw }} </td>
                    <td> {{ team.homeLose }} </td>
                    <td> {{ team.homeGoalsFor }} </td>
                    <td> {{ team.homeGoalsAgainst }} </td>
                    <td> {{ team.awayPlayed }} </td>
                    <td> {{ team.awayWin }} </td>
                    <td> {{ team.awayDraw }} </td>
                    <td> {{ team.awayLose }} </td>
                    <td> {{ team.awayGoalsFor }} </td>
                    <td> {{ team.awayGoalsAgainst }} </td>
                    <td> {{ team.lastUpdated }} </td>                    
                </tr>
            </tbody>
        </table>
    </div>    
</template>


<script>

import StandingService from '../services/StandingService'
    export default {
        name: 'Standing',

        data() {
            return {
                standing : []
            }
        },

        methods:{
            getStanding(){
                StandingService.getStanding().then((response) => {
                    this.standing = response.data;
                });
            }
        },

        created() {
            this.getStanding()
        }
    }
</script>