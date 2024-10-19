<script setup lang="ts">
import LeagueService from '../services/LeagueService.js'
import LeagueCard from "../components/LeagueCard.vue";
import Loader from "../components/Loader.vue";
import { ref } from "vue";
import League from "../components/League.vue";
import {ILeague} from "../Types/leagues.interface";
const leagues = ref<ILeague[]>([])
const loading = ref(false);

const fetchLeagues = async () => {
    loading.value = true;  // API isteği başlamadan önce loading'i true yap
    try {
        const response = await LeagueService.getLeagues(); // API çağrısı
        leagues.value = response.data; // Yanıtın verisini leagues değişkenine ata
    } catch (error) {
        console.error("Error fetching leagues:", error); // Hata durumu
    }
    finally {
        loading.value = false;  // API isteği tamamlandığında loading'i false yap
    }
};
fetchLeagues();

</script>
<template>
    <div class="flex-center flex-wrap md:flex-between mt-[120px] mb-[120px]">
        <div v-if="loading" class="grid-center w-full mt-48 md:mt-52">
            <Loader />
        </div>

        <div v-else v-for="league in leagues" :key="league.id" class="p-10">
            <LeagueCard :leagueName="league.name" :country="league.country" :iconPath="league.iconPath" :foundedYear="league.foundedYear"
                :loading="loading" />
        </div>
    </div>
</template>