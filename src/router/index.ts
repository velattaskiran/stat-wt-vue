import { createRouter , createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    
    {
        path: "/leaguesView",
        name: "LeaguesView",
        component: () => import("../views/LeagueView.vue")
    },

    {
        path: "/teamsView",
        name: "TeamsView",
        component: () => import("../views/CoinView.vue")
    },
    
    {
        path: "/playersView",
        name: "PlayersView",
        component: () => import("../views/Home.vue")
    },

    {
        path: "/predictionMachineViews",
        name: "PredictionMachine",
        component: () => import("../views/CoinView.vue")
    },
    
    {
        path: "/bettingTipsView",
        name: "BettingTips",
        component: () => import("../views/Home.vue")
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
