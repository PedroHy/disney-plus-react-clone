import api from "../source/api";

export default function categoriesReducer(state=api.data.categories, action){
    switch(action.type){
        default:
            return state;
    }
}