<script setup lang="ts">
    interface Props {
        teamName:   string,
        logoUrl:    string,
    }
    const props = defineProps<Props>();
    const handleCardClick = () => {
        alert(`You clicked on ${props.teamName}!`);
    };
</script>

<template>
    <div>
        <div @click="handleCardClick" class="cursor-pointer flex-center">
            <div class="px-4 space-y-4 w-48 h-48 bg-[#4B9077]/20 rounded-md">
                
                <div class="grid-center my-8">
                    <img :src="props.logoUrl" :alt="props.teamName" class="w-30 h-20" />
                </div>

                <div>
                    <h1 class ="text-[#4B9087] text-center">{{ props.teamName }}</h1>
                </div>                

            </div>
        </div>
    </div>
</template>