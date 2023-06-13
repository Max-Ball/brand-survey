import {useUserStore} from "../store/user.js";

class UsersService{

    async registerUser(newUser){
        const res = await axios.post('http://localhost/api/auth/register', newUser)
        useUserStore().authUser.data = res.data.user
        sessionStorage.setItem('TOKEN', res.data.token)
    }

    async loginUser(loginUser){
        const res = await axios.post('http://localhost/api/auth/login', loginUser);
        useUserStore().authUser.data = res.data.user
        sessionStorage.setItem('TOKEN', res.data.token)
        console.log(res.data)
    }

    async logoutUser(){
        const res = await axios.post('http://localhost/api/logout', null,{headers: {'Authorization': `Bearer ${useUserStore().authUser.token}`}})
        useUserStore().authUser.data = {}
        sessionStorage.removeItem('TOKEN')
        return res.data
    }
}
export const usersService = new UsersService()
