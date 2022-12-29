export const initialState = {
    mainPosts: [{
        id: 1,
        User:{
            id:1,
            nickname:'meno',
        },
        content: '게시글 #해시태그 #익스프레스',
        Images:[
            {
                src:'https://www.shutterstock.com/image-photo/border-collie-dog-portrait-hiding-600w-1933485896.jpg'
            },
            {
                src:'https://www.shutterstock.com/shutterstock/photos/1933490342/display_1500/stock-photo-two-dogs-and-one-cat-staring-at-camera-in-front-of-a-yellow-background-1933490342.jpg'
            },
            {
                src:'https://www.shutterstock.com/shutterstock/photos/1663393486/display_1500/stock-photo-happy-mixed-breed-dog-portrait-with-a-kitten-on-his-head-1663393486.jpg'
            }
        ],
        Comments:[{
                User:{
                    nickname:'nero',
                },
                content:'덧글을 달다.',
            },
            {
                User:{
                    nickname:'nero2',
                },
                content:'덧글을 달다2.'
        }]
    }],
    imagePaths: [],
    postAdded: false,
};

//게시글 작성하는 액션
const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}
//가짜 객체
const dummyPost = {
    id:2,
    content:'더미데이터',
    User:{
        id:1,
        nickname:'who',
    },
    Images: [],
    Comments:[],
};


const reducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_POST:
            return{
                ...state,
                mainPosts:[dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;

    }
};

export default reducer;