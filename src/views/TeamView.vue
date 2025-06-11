<script setup lang="ts">
import TeamService from '../services/TeamService'
import TeamCard from "../components/TeamCard.vue";
import Loader from "../components/Loader.vue";
import { ref } from "vue";
import Team from "../components/Team.vue";
import {ITeam} from "../Types/teams.interface";
const teams = ref<ITeam[]>([])
const loading = ref(false);

const fetchTeams = async () => {
    loading.value = true;  // API isteği başlamadan önce loading'i true yap
    try {
        const response = await TeamService.getTeams(); // API çağrısı
        teams.value = response.data; // Yanıtın verisini teams değişkenine ata
    } catch (error) {
        console.error("Error fetching teams:", error); // Hata durumu
    }
    finally {
        loading.value = false;  // API isteği tamamlandığında loading'i false yap
    }
};
fetchTeams();

</script>
<template>
    <div class="flex justify-center flex-wrap bg-[#f9fafb] md:justify-between mt-[81px] mb-[41px] min-h-screen">
        <div v-if="loading" class="grid-center w-full mt-48 md:mt-52">
            <Loader />
        </div>

        <div v-else v-for="team in teams" :key="team.id" class="p-10">
            <TeamCard :teamName="team.name" :logoUrl="team.logoUrl" :loading="loading" />
        </div>
    </div>
</template>