export const initialState = {
    isLoggedIn:false,
    me: null,
    signUpDate: {},
    loginData: {},
};

//로그인 액션
export const loginAction = (data) =>{
    return{
        type: 'LOG_IN',
    }
};
//로그아웃 액션
export const logoutAction = (data) =>{
    return{
        type: 'LOG_OUT',
        data,
    }
};


const reducer = (state = initialState, action)=>{
    switch (action.type){
        case 'LOG_IN':
            return{
                ...state,// 안 바꾸고 싶은것은 참조로 해주기
                isLoggedIn: true, //바꾸고 싶은 것은 이렇게 변경해주기
                me: action.data,
               
            };
        case 'LOG_OUT':
            return{
                ...state,// 안 바꾸고 싶은것은 참조로 해주기
                isLoggedIn: false, //바꾸고 싶은 것은 이렇게 변경해주기
                me: null,
            };
        default:
            return state;

    }
};

export default reducer;