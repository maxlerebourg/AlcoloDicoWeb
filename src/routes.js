import GameList from "./components/Game/GameList.vue";
import CocktailList from "./components/Cocktail/CocktailList.vue";
import QuoteList from "./components/Quote/QuoteList.vue";
import NotFound from "./components/NotFound";

const routes = [
    {
        path: "/",
        name: 'home',
        component: GameList,
    },
    {
        path: "/games",
        name: 'games',
        component: GameList,
    },
    {
        path: '/cocktails',
        name: 'cocktails',
        component: CocktailList,
    },
    {
        path: '/momentums',
        name: 'quotes',
        component: QuoteList,
    },
    {
        path: '/404',
        name: '404 not found',
        component: NotFound,
    },
    {
        path: '*',
        redirect: '404'
    }
];


export default routes;
