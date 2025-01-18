<script setup lang="ts">
import wtstat from "../assets/image/wt-stat.png";
import { ref } from "vue";
const mobileNav = ref(false);
const rotate = () => {
    return mobileNav.value = !mobileNav.value;
};
</script>

<template>
    <div>
        <header>
            <NavbarTop/>
            <nav class="flex-between fixed top-0 z-20 h-[66px] w-full border-b border-gray-200 bg-[#011511] dark:bg-gray-900 px-10 lg:h-[80px] ">                
                <div class="flex items-center space-x-10">
                    <div class="profile-image">
                        <router-link to="/">
                            <img :src="wtstat" alt="Welo">
                        </router-link>
                    </div>
                    <div class="hidden lg:block">
                        <ul class="inline-flex space-x-8">
                            <li class="navbar-li-tag">
                                <div class="text-white px-3 py-2 text-sm border border-green-800 hover:bg-green-600 transition duration-200 ease-in outline-none rounded-md md:text-base md:py-2.5 md:px-6">
                                    <router-link to="/leaguesView">
                                        Leagues
                                    </router-link>
                                </div>
                            </li>
                            <li class="navbar-li-tag">
                                <div class="text-white px-3 py-2 text-sm border border-green-800 hover:bg-green-600 transition duration-200 ease-in outline-none rounded-md md:text-base md:py-2.5 md:px-8">
                                    <router-link to="/teamsView">
                                        Teams
                                    </router-link>
                                </div>
                            </li>
                            <li class="navbar-li-tag">
                                <div class="text-white px-3 py-2 text-sm border border-green-800 hover:bg-green-600 transition duration-200 ease-in outline-none rounded-md md:text-base md:py-2.5 md:px-7">
                                    <router-link to="/playersView">
                                        Players
                                    </router-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <ul class="inline-flex space-x-8">
                        <li class="text-white px-3 py-2 text-sm border border-green-800 hover:bg-green-600 transition duration-200 ease-in outline-none rounded-md md:text-base md:py-2.5 md:px-7">
                            <router-link to="/predictionMachineViews">
                                Prediction Machine
                            </router-link>
                        </li>
                        <li class="text-white px-3 py-2 text-sm border border-green-800 hover:bg-green-600 transition duration-200 ease-in outline-none rounded-md md:text-base md:py-2.5 md:px-7">
                            <router-link to="/bettingTipsView">
                                Betting Tips
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav class="flex-between fixed bottom-0 z-20 h-[66px] w-full border-t border-gray-200 bg-[#011511] dark:bg-gray-900 px-4 lg:h-[40px] ">
                <div class="flex flex-col min-h-screen">
                    <footer class="absolute bottom-0 right-0 p-2 text-sm text-gray-500">
                        <div class="text-right">
                             Ⓒ 2024 WTStat – All Rights Reserved.
                        </div>
                    </footer>
                </div>
            </nav>
        </header>
    </div>    
</template>

<style scoped>
.mobileNav-enter-active,
.mobileNav-leave-active {
    transition: 1s ease all;
}

.mobileNav-enter-from,
.mobileNav-leave-to {
    transform: translateX(-250px);
}

.mobileNav-enter-to {
    transform: translateX(0)
}
.profile-image {
  width: 80px; /* Genişlik */
  height: 50px; /* Yükseklik */
  overflow: hidden; /* Taşma durumunda gizle */
  border-radius: 15%; /* Yuvarlak hale getirmek için */
}
.profile-image img {
  width: 100%; /* Resmin genişliğini tam olarak kapsasın */
  height: 100%; /* Resmin yüksekliğini tam olarak kapsasın */
  object-fit: cover; /* Resmin oranını koruyarak kapsasın */
}
</style>

<script lang="ts">
    export default {
        name: 'Navbar'
    };
</script>