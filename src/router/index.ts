import { createRouter , createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    
    {
        path: "/projectView",
        name: "ProjectView",
        component: () => import("../views/CoinView.vue")
    },

    {
        path: "/resumeView",
        name: "ResumeView",
        beforeEnter() {
            // PDF dosyasının URL'si
            const pdfUrl = "public/TaskiranVelatCV.pdf"; // Bu URL public klasöründen olmalı veya tam URL belirtmelisiniz
            // Yeni sekmede PDF'i aç
            window.open(pdfUrl, '_blank');
            next(false);
        }
    },

    {
        path: "/contactView",
        name: "ContactView",
        component: () => import("../views/NewsView.vue")
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes
});


export default router;

function next(arg0: boolean) {
    throw new Error("Function not implemented.");
}
