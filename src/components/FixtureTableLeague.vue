<script setup lang="ts">
import { ref, computed, h } from 'vue';
import { IFixture } from '../Types/fixtures.interface';
    interface Props {
        fixtures: IFixture[];
    }
    const props = defineProps<Props>();
    const currentWeekStart = ref(new Date()); // Geçerli haftanın başlangıç tarihi

    
    // Compute current round based on the week's fixtures
    const currentRound = computed(() => {
        let startOfWeek = currentWeekStart.value.getTime();
        let endOfWeek = startOfWeek + 6 * 24 * 60 * 60 * 1000;
        const fixtures = props.fixtures.sort((a, b) => a.timestamp - b.timestamp); // Tarihe göre sıralama
        let selectedFixtures: Props['fixtures'] = [];

        for (let i = 0; i < fixtures.length; i++) {
            const fixture = fixtures[i];
            if (fixture.timestamp * 1000 >= startOfWeek && fixture.timestamp * 1000 <= endOfWeek) {
            selectedFixtures.push(fixture);
            }

            if (selectedFixtures.length > 0) break;
        }

        return selectedFixtures.length > 0 ? selectedFixtures[0].round : 'No Round Found';
    });

    // Geçerli haftaya göre filtrelenmiş fikstürler
    const filteredFixtures = computed(() => {
        return props.fixtures.filter(
            (fixture) => fixture.round === currentRound.value
        );
    });

    function previousWeek() {
        // Önceki haftayı ayarla
        currentWeekStart.value = new Date(currentWeekStart.value.getTime() - 7 * 24 * 60 * 60 * 1000);

        // Maç olup olmadığını kontrol et
        if (!hasFixturesForCurrentWeek()) {
            // Eğer maç yoksa, bir önceki haftaya geç
            previousWeek();
        }
    }

    function nextWeek() {
        // Sonraki haftayı ayarla
        currentWeekStart.value = new Date(currentWeekStart.value.getTime() + 7 * 24 * 60 * 60 * 1000);

        // Maç olup olmadığını kontrol et
        if (!hasFixturesForCurrentWeek()) {
            // Eğer maç yoksa, bir sonraki haftaya geç
            nextWeek();
        }
    }

    // Geçerli hafta için maç olup olmadığını kontrol eden fonksiyon
    function hasFixturesForCurrentWeek() {
        let startOfWeek = currentWeekStart.value.getTime();
        let endOfWeek = startOfWeek + 6 * 24 * 60 * 60 * 1000;
        const fixtures = props.fixtures.filter(
            (fixture) => fixture.timestamp * 1000 >= startOfWeek && fixture.timestamp * 1000 <= endOfWeek
        );
        return fixtures.length > 0;
    }

    const currentRoundText = computed(() => {
        const roundParts = currentRound.value.split('-'); // "-" ile böl
        return roundParts[1]?.trim() || "Unknown"; // "-" sonrası kısmı al ve gereksiz boşlukları kaldır
    });
</script>

<template>
    <main id="table">
        <div class="flex justify-center items-center my-5">
            <button class="px-4 py-2 bg-green-600 text-white rounded-md" @click="previousWeek">
                ←
            </button>
            <span class="mx-4 text-xl font-bold text-white">Round - {{ currentRoundText }}</span>
            <button class="px-4 py-2 bg-green-600 text-white rounded-md" @click="nextWeek">
                →
            </button>
        </div>
        <div class="overflow-x-auto text-white mx-5 mb-10 rounded-md bg-[#012523]">
            <table class="table-fixed cursor-pointer">
                <tbody class="divide-y divide-gray-600">
                    <tr v-for="fixture in filteredFixtures" :key="fixture.fixtureId" class="hover:bg-[#024D44]">
                        <td class="text-center align-middle">
                        {{ new Date(fixture.timestamp * 1000).toLocaleString('tr-TR', { 
                            year: 'numeric', 
                            month: '2-digit', 
                            day: '2-digit' 
                        }) }}
                        <br>
                        {{ new Date(fixture.timestamp * 1000).toLocaleString('tr-TR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                        }) }}
                        </td>

                        <td class="text-center align-middle">
                        <div class="vertical-line"></div>
                        </td>

                        <td class="text-center align-middle flex items-center">
                            <img :src="fixture.homeTeamLogo" :alt="fixture.homeTeamName" class="w-5 h-5 rounded-full mr-1" />
                            <p class="text-center align-middle">{{ fixture.homeTeamName }}</p>
                        </td>
                        <td class="text-center align-middle flex items-center">
                            <img :src="fixture.awayTeamLogo" :alt="fixture.awayTeamName" class="w-5 h-5 rounded-full mr-1" />
                            <p>{{ fixture.awayTeamName }} </p>
                        </td>

                        <td class="text-center align-middle">
                        <div class="vertical-line"></div>
                        </td>

                        <td class="text-center align-middle flex items-center">
                            <p>{{ fixture.goals.home }} </p>
                        </td>
                        <td class="text-center align-middle flex items-center">
                            <p>{{ fixture.goals.away }} </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<style scoped>
button:hover {
    background-color: #024d44;
}

.vertical-line {
  border-left: 10px solid #123;  /* Dikey çizgi */
  height: 100%;  /* Yüksekliği hücrenin tamamına yayılır */
  margin-left: 10px;  /* Çizginin sol tarafına boşluk */
  margin-right: 10px;  /* Çizginin sağ tarafına boşluk */
}
</style>

<script lang="ts">
    export default {
        name: 'FixturesTable',
    };
</script>