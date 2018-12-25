
import axios from "axios";

export function loadingStart(){
    return{
        type:'LOADING_START',
        payload:{
            loadingMessage:'Loading..',
        },
    };
};

export function loadingEnd(){
    return{
        type:'LOADING_END',
        payload:{
            loadingMessage:'Loading End..',
        },
    };
};