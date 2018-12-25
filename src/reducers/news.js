const initialState ={
    newsSource:'', 
    newsAuthor:'', 
    newsTitle:'', 
    newsDescription:'', 
    newsUrl:'', 
    newsImage:'', 
    newsPublishedAt:'', 
    newsContent:'',  
};

export default (state = initialState, action)=>{
    switch(action.type){    
        case 'SET_NEWS_SOURCE': 
            return{
                ...state,
                newsSource:action.payload.newsSource, 
            };  
        case 'SET_NEWS_AUTHOR': 
            return{
                ...state,
                newsAuthor:action.payload.newsAuthor, 
            };  
        case 'SET_NEWS_TITLE': 
            return{
                ...state,
                newsTitle:action.payload.newsTitle, 
            };  
        case 'SET_NEWS_DESCRIPTION': 
            return{
                ...state,
                newsDescription:action.payload.newsDescription, 
            };  
        case 'SET_NEWS_URL': 
            return{
                ...state,
                newsUrl:action.payload.newsUrl, 
            };  
        case 'SET_NEWS_IMAGE': 
            return{
                ...state,
                newsImage:action.payload.newsImage, 
            };  
        case 'SET_NEWS_PUBLISHED_AT': 
            return{
                ...state,
                newsPublishedAt:action.payload.newsPublishedAt, 
            };  
        case 'SET_NEWS_CONTENT': 
            return{
                ...state,
                newsContent:action.payload.newsContent, 
            };  
        default:
            return state;
    }
};






