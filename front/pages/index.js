import { useSelector, useDispatch } from 'react-redux';
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import React, { useEffect } from 'react';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
const Home = () => {
    const dispatch = useDispatch();
    const {me} = useSelector((state)=>state.user); //사용자가 로그인 헀는지 안했는지 여부를 알려줌
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
  

    useEffect(() => { //메인페이지를 호출할 때 무한 스크롤 부분
      dispatch({
        type: LOAD_POSTS_REQUEST,
      });
    }, []);
  
    useEffect(() => { //어느정도 스크롤이 내려오면 새로운 데이터 요청
        console.log('scrolled');
      function onScroll() {
        console.log('scrolled');
           /*
       * window.scrollY, // 스크롤된 양
       * document.documentElement.clientHeight, // 유저가 보는 문서의 높이
       * document.documentElement.scrollHeight // 전체 문서 높이
       */
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
          if (hasMorePosts && !loadPostsLoading) {//불러오는 중이거나 다 불러왔다면
            dispatch({
              type: LOAD_POSTS_REQUEST,
              data: mainPosts[mainPosts.length - 1].id,
            });
          }
        }
      }
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }, [mainPosts, hasMorePosts, loadPostsLoading]);


    return(
        <AppLayout> 
            {me && <PostForm/>}
            {/* {mainPosts.map((post)=><PostCard key={post.id} post={post}/>)} */}
            {mainPosts.map((c) => (
                <PostCard key={c.id} post={c} />
            ))}
        </AppLayout>
    );
}

export default Home;