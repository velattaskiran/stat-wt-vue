<script setup lang="ts">
import PlayerService from "../services/PlayerService"
import Loader from "../components/Loader.vue";
import { ref } from "vue";
import { IPlayer } from "../Types/players.interface";
const players = ref<IPlayer[]>([])
const loading = ref(false);

const fetchPlayers = async () => {
    loading.value = true;
    try {
        const response  = await PlayerService.getPlayers();
        players.value   = response.data;
    } catch (error){
        console.error("Error fetching players", error);
    } finally {
        loading.value = false;
    }
};
fetchPlayers();
</script>

<template>
    <main id="table">
        <div class="overflow-x-auto bg-[#f9fafb] text-green-800 md:mt-20 mb-10 px-10">
            
            <div v-if="loading" class="grid-center w-full mt-48 md:mt-52">
                <Loader />
            </div>
            
            <table class="table-fixed cursor-pointer">
                <thead>
                    <tr class="text-green-700 text-sm text-left">
                        <th class="w-1/4 p-4">Name</th>
                        <th class="w-1/6 pl-6 md:pl-0">Age</th>
                        <th class="w-1/6 text-center md:text-start">Position</th>
                        <th class="w-1/6 text-center mx-2 md:text-start">Team</th>
                        <th class="w-1/6 text-center mx-2 md:text-start">Number</th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-600">
                    <tr class="text-base hover:bg-gray-100/10 transition duration-300" v-for="player in players"
                        :key="player.id">
                        <td class="p-1 flex items-center">
                            <!-- <p class="mr-4">{{ player.id }}.</p> -->
                            <img :src="player.photoUrl" :alt="player.name" class="w-10 h-10 rounded-full mr-1" />
                            <p class="font-bold mr-1 hidden md:block">{{ player.name }}</p>
                        </td>

                        <td class="font-bold px-4 md:px-0">
                            <p class="mr-4"> {{ player.age }} </p>
                        </td>

                        <td class="px-4 font-bold md:px-0">
                            <p class="mr-4"> {{ player.position }} </p>
                        </td>

                        <td class="mx-2 md:mx-2">
                            <p class="mr-4"> {{ player.teamName }} </p>
                        </td>

                        <td class="mx-4 md:mx-2">
                            <p class="mr-4"> {{ player.number }} </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>