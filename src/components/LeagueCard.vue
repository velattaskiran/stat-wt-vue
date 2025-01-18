<script setup lang="ts">
import { useRouter } from 'vue-router';

    interface Props {
        leagueId:       string,
        leagueName:     string,
        country:        string,
        foundedYear:    string,
        logoUrl:        string,
    }
    const props = defineProps<Props>();
    const router = useRouter();
    const handleCardClick = () => {
        router.push(`/leagues/${props.leagueId}`);
    };
</script>

<template>
    <div>
        <div @click="handleCardClick" class="cursor-pointer flex-center">
            <div class="px-4 space-y-4 w-40 h-40 bg-[#4B9077]/20 rounded-md">
                <div class="grid-center my-8">
                    <img :src="props.logoUrl" :alt="props.leagueName" class="w-30 h-20" />
                </div>
        
                <div>
                    <h1 class="text-[#4B9067] text-center"></h1>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'LeagueCard',
    };
</script>