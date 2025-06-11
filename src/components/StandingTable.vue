<script setup lang="ts">
import { useRouter } from 'vue-router';
    interface Team {
        leagueName: string;
        teamName: string;
        teamLogo: string;
        rank: number;
        points: number;
        goalsDiff: number;
        form: string;
        description: string;
        played: number;
        win: number;
        draw: number;
        lose: number;
        goalsFor: number;
        goalsAgainst: number;
        homePlayed: number;
        homeWin: number;
        homeDraw: number;
        homeLose: number;
        homeGoalsFor: number;
        homeGoalsAgainst: number;
        awayPlayed: number;
        awayWin: number;
        awayDraw: number;
        awayLose: number;
        awayGoalsFor: number;
        awayGoalsAgainst: number;
        updated: string;
    }
const { teams } = defineProps<{ teams: Team[] }>();
</script>

<template>
    <main id="table">
        <div class="flex justify-center mx-5 mt-10">
            <h2 class="text-2xl font-bold text-green-900">{{ teams[0]?.leagueName }}</h2>
        </div>
        <div class="overflow-x-auto text-green-800 mx-5 md:mt-2 mb-10 rounded-md bg-[#f9fafb] border border-green-800">
            <table class="table-fixed cursor-pointer">
                <thead>
                    <tr class="text-green-800 text-sm text-left">
                        <th class="w-1/4 p-4"></th>
                        <th class="w-1/12 text-center align-middle">Played</th>
                        <th class="w-1/12 text-center align-middle">Wins</th>
                        <th class="w-1/12 text-center align-middle">Draws</th>
                        <th class="w-1/12 text-center align-middle">Losses</th>
                        <th class="w-1/12 text-center align-middle">Goals For</th>
                        <th class="w-1/12 text-center align-middle">Goals Against</th>
                        <th class="w-1/12 text-center align-middle">Goals Difference</th>
                        <th class="w-1/12 text-center align-middle">Form</th>
                        <th class="w-1/12 text-center align-middle">Points</th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-600">
                    <tr class="text-base hover:bg-gray-100/30 transition duration-500" v-for="team in teams"
                        :key="team.rank">
                        <td class="p-1 flex items-center">
                            <p class="mr-2">{{ team.rank }}.</p>
                            <img :src="team.teamLogo" :alt="team.teamName" class="w-5 h-5 rounded-full mr-1" />
                            <p class="text-center align-middle">{{ team.teamName }}</p>
                        </td>

                        <td class="font-bold px-4 md:px-0">
                            <p class="text-center align-middle"> {{ team.played }} </p>
                        </td>

                        <td class="px-4 font-bold md:px-0">
                            <p class="text-center align-middle"> {{ team.win }} </p>
                        </td>

                        <td class="mx-2 md:mx-2">
                            <p class="text-center align-middle"> {{ team.draw }} </p>
                        </td>

                        <td class="mx-4 md:mx-2">
                            <p class="text-center align-middle"> {{ team.lose }} </p>
                        </td>

                        <td class="mx-4 md:mx-2">
                            <p class="text-center align-middle"> {{ team.goalsFor }} </p>
                        </td>                        

                        <td class="mx-4 md:mx-2">
                            <p class="text-center align-middle"> {{ team.goalsAgainst}} </p>
                        </td>

                        <td class="mx-4 md:mx-2">
                            <p class="text-center align-middle"> {{ team.goalsDiff }} </p>
                        </td>

                        <td class="mx-4 md:mx-2">
                            <p class="text-center align-middle"> {{ team.form }} </p>
                        </td>

                        <td class="mx-4 md:mx-2">
                            <p class="text-center align-middle"> {{ team.points }} </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>