<template>
    <div class = "container">
        <h1 class = "text-center"> Player List </h1>
        <table class = "table table-striped">
            <thead>
                <tr>
                    <th> Player Id </th>
                    <th> Player Name </th>
                    <th> Player Age </th>
                    <th> Player No </th>
                    <th> Player Photo Url </th>
                    <th> Player Position </th>
                    <th> Player Team Id </th>
                    <th> Player Team Name </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for= "player in players" v-bind:key="player.id">
                    <td> {{ player.id }} </td>
                    <td> {{ player.name }} </td>
                    <td> {{ player.age }} </td>
                    <td> {{ player.number }} </td>
                    <td> {{ player.url }} </td>
                    <td> {{ player.position }} </td>
                    <td> {{ player.teamId }} </td>
                    <td> {{ player.teamName }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import PlayerService from '../services/PlayerService'
    export default {
        name: 'Players',

        data() {
            return {
                players : []
            }
        },

        methods:{
            getPlayers() {
                PlayerService.getPlayers().then((response) => {
                    this.players = response.data.sort((a,b) => a.id - b.id);
                });
            }
        },

        created() {
            this.getPlayers()
        }
    }
</script>