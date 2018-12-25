const initialState ={ 
    fullName:'John Doe',
    email:'test@mail.com',
    password:'test',
    phone:'085781950129',
    gender:'Male',
    birthDate:'1995',
    isLogin:false,
};

export default (state = initialState, action)=>{
    switch(action.type){
        case 'UBAH_ISLOGIN': 
            return{
                ...state,
                isLogin:action.payload.isLogin,
            };
        case 'UBAH_FULLNAME': 
            return{
                ...state,
                fullName:action.payload.fullName,
            };
        case 'UBAH_PASSWORD': 
            return{
                ...state,
                password:action.payload.password,
            };
        case 'UBAH_EMAIL': 
            return{
                ...state,
                email:action.payload.email,
            };
        case 'UBAH_PHONE': 
            return{
                ...state,
                phone:action.payload.phone,
            };
        case 'UBAH_GENDER': 
            return{
                ...state,
                gender:action.payload.gender,
            };
        case 'UBAH_BIRTH_DATE': 
            return{
                ...state,
                birthDate:action.payload.birthDate,
            };
        default:
            return state;
    }
};



