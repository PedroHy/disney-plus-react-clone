import api from "../source/api";

export default function bannerReducer(state=api.data.banners, action){
    switch(action.type){
        default:
            return state;
    }
}
