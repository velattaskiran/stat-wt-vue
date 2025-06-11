import { createRouter , createWebHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/LeagueView.vue")
    },
    
    {
        path: "/leaguesView",
        name: "LeaguesView",
        component: () => import("../views/LeagueView.vue")
    },

    {
        path: "/teamsView",
        name: "TeamsView",
        component: () => import("../views/TeamView.vue")
    },
    
    {
        path: "/playersView",
        name: "PlayersView",
        component: () => import("../views/PlayerView.vue")
    },

    {
        path: "/predictionMachineViews",
        name: "PredictionMachine",
        component: () => import("../views/PlayerView.vue")
    },
    
    {
        path: "/bettingTipsView",
        name: "BettingTips",
        component: () => import("../views/PlayerView.vue")
    },
    // Dinamik rota lig ismine göre
    {
        path: "/leagues/:leagueId",
        name: "LeagueDetail",
        component: () => import("../views/LeagueDetailView.vue"),
        props: true, // Props olarak parametreyi al
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes,

    // 👇 Sayfa değişiminde scroll'u en üste al
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    }
});


export default router;

function next(arg0: boolean) {
    throw new Error("Function not implemented.");
}
