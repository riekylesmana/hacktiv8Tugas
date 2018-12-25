const initialState ={
    loadingMessage:'', 
};

export default (state = initialState, action)=>{
    switch(action.type){
        case 'LOADING_START': 
            return{
                ...state,
                loadingMessage:action.payload.loadingMessage,
            };
        case 'LOADING_END': 
            return{
                ...state,
                loadingMessage:action.payload.loadingMessage,
            }; 
        default:
            return state;
    }
};



