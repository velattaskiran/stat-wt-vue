<script setup lang="ts">
import Logo from "../assets/image/vt.png";
import wtstat from "../assets/image/wt-stat.png";
// import NavbarTop from "./Navbar-Top.vue";
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
            <nav class="flex-between fixed top-0 z-20 h-[66px] w-full border-b border-gray-200 bg-blue dark:bg-gray-900 px-4 lg:h-[120px] ">                
                <div class="flex items-center space-x-10">
                    <div class="profile-image">
                        <router-link to="/aboutView">
                            <img :src="wtstat" alt="Welo">
                        </router-link>
                    </div>
                    <div class="hidden lg:block">
                        <ul class="inline-flex space-x-8">
                            <li class="navbar-li-tag">
                                <div class="inline-flex items-center p-2 border border-gray-300 rounded-lg">
                                    <router-link to="/">
                                        Leagues
                                    </router-link>
                                </div>
                            </li>
                            <li class="navbar-li-tag">
                                <div class="inline-flex items-center p-2 border border-gray-300 rounded-lg">
                                    <router-link to="/resumeView">
                                        Teams
                                    </router-link>
                                </div>
                            </li>
                            <li class="navbar-li-tag">
                                <div class="inline-flex items-center p-2 border border-gray-300 rounded-lg">
                                    <router-link to="/resumeView">
                                        Players
                                    </router-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <ul class="inline-flex space-x-8">
                        <li class="navbar-li-tag">
                            <router-link to="/">
                                Home
                            </router-link>
                        </li>
                        <li class="navbar-li-tag">
                            <router-link to="/projectView">
                                Projects
                            </router-link>
                        </li>
                        <li class="navbar-li-tag">
                            <router-link to="/resumeView">
                                Resume
                            </router-link>
                        </li>
                        <li class="navbar-li-tag">
                            <router-link to="/contactView">
                                Contact
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="flex justify-center items-center space-x-2 lg:hidden">
                    <div :class="{ 'rotate': mobileNav }" @click="rotate">
                        <div class="box1"></div>
                        <div class="box2"></div>
                        <div class="box3"></div>
                    </div>
                </div>

                <transition name="mobileNav" class="animation">
                    <ul v-show="mobileNav" class="sidebar space-y-6 px-4 py-1">
                        <div class="flex-between p-2">
                            <div class="flex items-center space-x-1">
                                <img :src="Logo" alt="Logo" class="w-8 h-8">
                                <h1 class="navbar-title">
                                    <router-link to="/">VELAT TASKIRAN</router-link>
                                </h1>
                            </div>
                        </div>
                        <li class="mobile-li-tags">
                            <a href="#">Home</a>
                        </li>
                        <li class="mobile-li-tags">
                            <a href="#">
                                <router-link to="/coinView">
                                    Coins
                                </router-link>
                            </a>
                        </li>

                        <li class="mobile-li-tags">
                            <a href="#">
                                <router-link to="/newsView">
                                    News
                                </router-link>
                            </a>
                        </li>
                    </ul>
                </transition>
            </nav>
            <nav class="flex-between fixed bottom-0 z-20 h-[66px] w-full border-t border-gray-200 bg-blue dark:bg-gray-900 px-4 lg:h-[50px] ">
                <div class="flex flex-col min-h-screen">
                    <footer class="absolute bottom-0 right-0 p-4 text-sm text-gray-500">
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