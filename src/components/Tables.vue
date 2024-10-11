<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/solid';
import useFormat from "../composables/useFormat";
import usePriceChange from "../composables/usePriceChange";
import { ref, computed } from "vue";
import { useFetch, options } from "../utils/coinApi";
import { ICoin } from "../Types/coins.interface";
const coins = ref<ICoin[]>([]);
const searchTerm = ref("")
const fetchCoins = async () => {
    const url = "https://coinranking1.p.rapidapi.com/coins?limit=50";
    const response = await useFetch(url, options);
    response.data.coins.forEach((coin: any) => {
        coins.value.push(coin)
    });
};
fetchCoins();

const coinFilter = computed(() => {
    return coins.value.filter((coin) => coin.name.toLowerCase().includes(searchTerm.value.toLowerCase()))
});
</script>

<template>
    <main id="table">
        <div class="overflow-x-auto text-white mx-10 md:mt-40 rounded-md">
            <table class="table-fixed cursor-pointer">
                <thead>
                    <tr class="text-white text-sm text-left">
                        <th class="w-1/4 p-4">Name</th>
                        <th class="w-1/6 pl-6 md:pl-0">Price</th>
                        <th class="w-1/6 text-center md:text-start">24hrs</th>
                        <th class="w-1/6 text-center mx-2 md:text-start">Market Cap</th>
                        <th class="w-1/6">Listed At</th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-700">
                    <tr class="text-base hover:bg-gray-100/10 transition duration-300" v-for="coin in coinFilter"
                        :key="coin.uuid">
                        <td class="p-1 flex items-center">
                            <p class="mr-4">{{ coin.rank }}.</p>
                            <p class="font-bold mr-1 hidden md:block">{{ coin.name }}</p>
                            <img :src="coin.iconUrl" :alt="coin.name" class="w-4 h-4 rounded-full mr-1" />
                            <p class="uppercase text-gray-500 mx-2">
                                {{ coin.symbol }}
                            </p>
                        </td>
                        <td class="font-bold px-4 md:px-0">
                            ${{ useFormat(coin.price) }}
                        </td>
                        <td class="px-4 font-bold md:px-0">
                            <div v-if="usePriceChange(coin.change)"
                                class="text-red-600 flex items-center">
                                <ChevronDownIcon class="mr-1 h-4 w-4 " />
                                {{ coin.change }}%
                            </div>
                            <div v-else class="text-green-500 flex items-center">
                                <ChevronUpIcon class="mr-1 h-4 w-4 " />
                                {{ coin.change }}%
                            </div>
                        </td>
                        <td class="mx-2 md:mx-2">
                            ${{ useFormat(coin.marketCap )}}
                        </td>

                        <td class="mx-4 md:mx-2">
                           {{ useFormat(coin.listedAt) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>