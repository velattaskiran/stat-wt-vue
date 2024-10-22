<template>
    <div class = "container">
        <h1 class = "text-center"> Teams List </h1>
        <table class = "table table-striped">
            <thead>
                <tr>
                    <th> Team Id</th>
                    <th> Team Name</th>
                    <th> Team Icon Path</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "team in teams" v-bind:key = "team.id">
                    <td> {{ team.id }} </td>
                    <td> {{ team.name }} </td>
                    <td> {{ team.logoUrl }} </td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>

import TeamService from '../services/TeamService'
    export default {
        name: 'Teams',

        data() {
            return {
                teams : []
            }
        },

        methods:{
            getTeams(){
                TeamService.getTeams().then((response) => {
                    this.teams = response.data;
                });
            }
        },

        created() {
            this.getTeams()
        }
    }

</script>
