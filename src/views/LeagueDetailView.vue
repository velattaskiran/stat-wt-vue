<script setup lang="ts">
import StandingService from '../services/StandingService';
import FixtureService from '../services/FixtureService';
import StandingTable from '../components/StandingTable.vue';
import FixtureTableLeague from '../components/FixtureTableLeague.vue';
import Loader from "../components/Loader.vue";
import { ref } from "vue";
import { IStanding } from "../Types/standings.interface";
import { IFixture } from "../Types/fixtures.interface";
import { useRoute } from "vue-router";

const route = useRoute();
const leagueId = Array.isArray(route.params.leagueId) ? route.params.leagueId[0] : route.params.leagueId;

const teams = ref<IStanding[]>([]);
const fixtures = ref<IFixture[]>([]);
const loading = ref(false);

const fetchTeams  = async () => {
    loading.value = true;  // API isteği başlamadan önce loading'i true yap
    try {
        const response = await StandingService.getStandingByLeagueId(leagueId); // API çağrısı
        teams.value = response.data; // Yanıtın verisini teams değişkenine ata
    } catch (error) {
        console.error("Error fetching teams:", error); // Hata durumu
    }
    finally {
        loading.value = false;  // API isteği tamamlandığında loading'i false yap
    }
};

const fetchFixtures  = async () => {
    loading.value = true;  // API isteği başlamadan önce loading'i true yap
    try {
        const response = await FixtureService.getFixtureByLeagueId(leagueId);
        fixtures.value = response.data;
    } catch (error) {
        console.error("Error fetching teams:", error); // Hata durumu
    }
    finally {
        loading.value = false;  // API isteği tamamlandığında loading'i false yap
    }
};
fetchTeams();
fetchFixtures();
</script>

<template>
    <div class="flex-center flex-wrap mt-[80px] mb-[30px]">
        <!-- Eğer yükleniyor ise Loader göster -->
        <div v-if="loading" class="grid-center w-full mt-48 md:mt-52">
            <Loader />
        </div>

        <!-- Yüklenme tamamlandıysa Standings ve Fixtures göster -->
        <div v-else class="w-full grid grid-cols-1 md:grid-cols-[2fr_0.75fr] gap-2">
            <!-- StandingTable Bileşeni -->
            <div class="w-full">
                <StandingTable :teams="teams" />
            </div>

            <!-- FixtureTableLeague Bileşeni -->
            <div class="w-full">
                <FixtureTableLeague :fixtures="fixtures" />
            </div>
        </div>
    </div>
</template>