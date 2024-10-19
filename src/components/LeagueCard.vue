<script setup lang="ts">
    interface Props {
        leagueName:     string,
        country:        string,
        foundedYear:    string,
        iconPath:       string,
    }
    const props = defineProps<Props>();
    const handleCardClick = () => {
        alert(`You clicked on ${props.leagueName}!`);
    };
</script>

<template>
    <div>
        <div @click="handleCardClick" class="cursor-pointer flex-center">
            <div class="px-4 space-y-4 w-36 h-36 bg-[#4B9077]/20 rounded-md">
                <div class="grid-center my-8">
                    <img :src="props.iconPath" :alt="props.leagueName" class="w-30 h-20" />
                </div>
        
                <div>
                    <h1 class="text-[#4B9067] text-center"></h1>
                </div>

            </div>
        </div>
    </div>
</template>