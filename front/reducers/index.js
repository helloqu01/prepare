import { HYDRATE } from "next-redux-wrapper";
import user from './user';
import post from './post';
import { combineReducers } from "redux";

//초기상태
// const initialState = {
//     user: {
      
//     },
//     post:{

//     }
// };
// const initialState = {
//     user: {
//         isLoggedIn:false,
//         user: null,
//         signUpDate: {},
//         loginData: {},
//     },
//     post:{
//         mainPosts: [],
//     }
// };
// const initialState = {
//     name:'mememe',
//     age:27,
//     password:'metoo'
// };

//action creator
//사용 예시 store.dispatch(changeNickname('바뀔 닉네임'))
const changeNickname = (data) =>{
    return{
        type: 'CHANGE_NICKNAME',
        data,
    }
};
// //로그인 액션
// export const loginAction = (data) =>{
//     return{
//         type: 'LOG_IN',
//     }
// };
// //로그아웃 액션
// export const logoutAction = (data) =>{
//     return{
//         type: 'LOG_OUT',
//         data,
//     }
// };

//async action creator 비동기 액션 크리에이터

// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'youu',
// }


//리듀서란 (이전상태, 액션)=> 다음상태를 만들어내는 함수
// const rootReducer = (( state = initialState, action)=>{
//     switch(action.type){
//         case 'CHANGE_NICKNAME':
//             return{
//                 ...state,
//                 name: action.data,
//             }
//     }
// });
const rootReducer = combineReducers({
// const rootReducer = combineReducers(( state = initialState, action)=>{
    index: (state = {}, action)=>{ //서버사이드랜더링을 위해 들어간 것
        switch(action.type){
            case HYDRATE:
                console.log('',action);
                return { ...state, ...action.payload};
            // case 'LOG_IN':
            //     return{
            //         ...state,
            //         user:{
            //             ...state.user,// 안 바꾸고 싶은것은 참조로 해주기
            //             isLoggedIn: true, //바꾸고 싶은 것은 이렇게 변경해주기
            //             user: action.data,
            //         },
            //     };
            // case 'LOG_OUT':
            //     return{
            //         ...state,
            //         user:{
            //             ...state.user,// 안 바꾸고 싶은것은 참조로 해주기
            //             isLoggedIn: false, //바꾸고 싶은 것은 이렇게 변경해주기
            //             user: null,
            //         },
            //     };
            default:
                return state;
        }
    },
    user, //combineReducers를 이용해서 리듀서user,post를 합쳤다.
    post,
});


export default rootReducer;