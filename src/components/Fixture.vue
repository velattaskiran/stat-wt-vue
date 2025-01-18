<template>
    <div class = "container">
        <h1 class = "text-center"> Fixture List </h1>
        <table class = "table table-striped">
            <thead>
                <tr>
                    <th> Fixture Id </th>
                    <th> Referee </th>
                    <th> Timestamp </th>
                    <th> Venue Id </th>
                    <th> Venue Name </th>
                    <th> Venue City </th>
                    <th> Long Status </th>
                    <th> Short Status </th>
                    <th> Elapsed </th>
                    <th> League Id </th>
                    <th> League Name </th>
                    <th> Season </th>
                    <th> Round </th>
                    <th> Home Team Id </th>
                    <th> Home Team Name </th>
                    <th> Home Team Logo </th>
                    <th> Home Team Winner </th>
                    <th> Away Team Id </th>
                    <th> Away Team Name </th>
                    <th> Away Team Logo</th>
                    <th> Away Team Winner </th>
                    <th> Goals Home </th>
                    <th> Goals Away </th>
                    <th> Halftime Home </th>
                    <th> Halftime Away </th>
                    <th> Fulltime Home </th>
                    <th> Fulltime Away </th>
                    <th> Extratime Home </th>
                    <th> Extratime Away </th>
                    <th> Penalty Home </th>
                    <th> Penalty Away </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "fixture in fixtures" v-bind:key = "fixture.id">
                    <td>{{ fixture.fixtureId }}</td>
                    <td>{{ fixture.referee }}</td>
                    <td>{{ fixture.timestamp }}</td>
                    <td>{{ fixture.venue.id }}</td>
                    <td>{{ fixture.venue.name }}</td>
                    <td>{{ fixture.venue.city }}</td>
                    <td>{{ fixture.status.longStatus }}</td>
                    <td>{{ fixture.status.shortStatus }}</td>
                    <td>{{ fixture.status.elapsed }}</td>
                    <td>{{ fixture.leagueId }}</td>
                    <td>{{ fixture.leagueName }}</td>
                    <td>{{ fixture.season }}</td>
                    <td>{{ fixture.round }}</td>
                    <td>{{ fixture.homeTeamId }}</td>
                    <td>{{ fixture.homeTeamName }}</td>
                    <td>{{ fixture.homeTeamLogo }}</td>
                    <td>{{ fixture.homeTeamWinner }}</td>
                    <td>{{ fixture.awayTeamId }}</td>
                    <td>{{ fixture.awayTeamName }}</td>
                    <td>{{ fixture.awayTeamLogo }}</td>
                    <td>{{ fixture.awayTeamWinner }}</td>
                    <td>{{ fixture.goals.home }}</td>
                    <td>{{ fixture.goals.away }}</td>
                    <td>{{ fixture.score.halftimeHome }}</td>
                    <td>{{ fixture.score.halftimeAway }}</td>
                    <td>{{ fixture.score.fulltimeHome }}</td>
                    <td>{{ fixture.score.fulltimeAway }}</td>
                    <td>{{ fixture.score.extratimeHome }}</td>
                    <td>{{ fixture.score.extratimeAway }}</td>
                    <td>{{ fixture.score.penaltyHome }}</td>
                    <td>{{ fixture.score.penaltyAway }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import FixtureService from '../services/FixtureService.js';
    export default {
        name: 'Fixture',

        data() {
            return {
                fixtures: []
            }
        },

        methods: {
            getFixtures() {
                FixtureService.getFixtures()
                    .then(response => {
                        this.fixtures = response.data;
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },

        created() {
            this.getFixtures();
        }
    }
</script>