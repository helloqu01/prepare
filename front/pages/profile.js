import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import Head from 'next/head';
import React ,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
const Profile = () => {
    const { me } = useSelector((state) => state.user);
    useEffect(() => { 
      if (!(me && me.id)) {//로그아웃 하는 경우
        Router.push('/');
      }
    }, [me && me.id]);
    if (!me) {
      return null;
    }
    // const FollowerList = [{nickname:'mememe'},{nickname:'you'},{nickname:'wow'}];
    // const FollowingList = [{nickname:'mememe2'},{nickname:'you2'},{nickname:'wow2'}];
    return(
        <AppLayout>
            <Head>
                <mata charSet = 'utf-8'/>
                <title>내 프로필 | NodeBird</title>
            </Head>
           
                <NicknameEditForm/>
                <FollowList
                    header="팔로잉 목록"
                    data={me.Followings}
                />
                <FollowList
                    header="팔로워 목록"
                    data={me.Followers}
                />
                {/* <FollowList header ="팔로잉 목록" data={FollowingList}/>
                <FollowList header ="팔로워 목록" data={FollowerList}/> */}
          
        </AppLayout>
    );
}

export default Profile;