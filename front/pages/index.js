import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Home = () => {
    const {isLoggedIn} = useSelector((state)=>state.user); //사용자가 로그인 헀는지 안했는지 여부를 알려줌
    const {mainPosts} = useSelector((state)=>state.post);

    return(
        <AppLayout> 
            {isLoggedIn && <PostForm/>}
            {mainPosts.map((post)=><PostCard key={post.id} post={post}/>)}
         
        </AppLayout>
    );
}

export default Home;