import { Home } from "../pages/Home";
import {Movies} from "../pages/Movies"

export default { 

    routes: [
        {
            path: 'home', 
            component: Home
        },
        {
            path: 'movies', 
            component: Movies
        }
    ],

    afterEachRoute(to) {
        console.log('Usuario navego hacia:', to._hash)
    },

    //beforeEachRoute(from, to) {}

}