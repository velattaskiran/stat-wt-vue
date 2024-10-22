<template>
    <div class = "container">
        <h1 class = "text-center"> Leagues List </h1>
        <table class = "table table-striped">
            <thead>
                <tr>
                    <th> League Id</th>
                    <th> League Name</th>
                    <th> League Country</th>
                    <th> League Founded Year</th>
                    <th> League Icon Path</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "league in leagues" v-bind:key = "league.id">
                    <td> {{ league.id }} </td>
                    <td> {{ league.name }} </td>
                    <td> {{ league.country }} </td>
                    <td> {{ league.foundedYear }} </td>
                    <td> {{ league.logoUrl }} </td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>

import LeagueService from '../services/LeagueService'
    export default {
        name: 'Leagues',

        data() {
            return {
                leagues : []
            }
        },

        methods:{
            getLeagues(){
                LeagueService.getLeagues().then((response) => {
                    this.leagues = response.data;
                });
            }
        },

        created() {
            this.getLeagues()
        }
    }

</script>
