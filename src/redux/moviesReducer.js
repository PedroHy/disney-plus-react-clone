import api from "../source/api";

export default function moviesReducer(state=api.data.movies, action){
    switch(action.type){
        default:
            return state;
    }
}