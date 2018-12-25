import axios from "axios";
import {loadingStart, loadingEnd}  from './loading';
 

  
export function ubahIsLogin(isLogin){
    return{
        type:'UBAH_ISLOGIN',
        payload:{ 
              isLogin:isLogin,
        },
    };
};
  
export function ubahEmail(email){
    return{
        type:'UBAH_EMAIL',
        payload:{ 
              email:email,
        },
    };
};
export function ubahPassword(password){
    return{
        type:'UBAH_PASSWORD',
        payload:{ 
              password:password,
        }, 
    };
};
export function ubahFullName(fullName){
    return{
        type:'UBAH_FULLNAME',
        payload:{ 
              fullName:fullName,
        },
    };
};
export function ubahBirthDate(birthDate){
    return{
        type:'UBAH_BIRTHDATE',
        payload:{ 
              birthDate:birthDate,
        },
    };
};

export function ubahPhone(phone){
    return{
        type:'UBAH_PHONE',
        payload:{
            phone:phone,
        },
    };
};

export function ubahGender(gender){
    return{
        type:'UBAH_GENDER',
        payload:{
            gender:gender,
        },
    };
};






































