import {createRouter, createWebHistory} from 'vue-router';
import inputsNumber from "@/views/inputsNumber";
import inputsList from "@/views/inputsList";

export default createRouter({
    routes: [
        {
            path: '/',
            name: 'number',
            component: inputsNumber
        },
        {
            path: '/inputs/:number',
            name: 'list',
            component: inputsList
        }
    ],
    history: createWebHistory()
});
