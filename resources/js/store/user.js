import {defineStore} from "pinia";
import {usersService} from "../services/UsersService.js";

export const useUserStore = defineStore('user', {
    state: () => ({
        authUser: {
          data: {},
          token: sessionStorage.getItem('TOKEN')
        },
    }),
})
