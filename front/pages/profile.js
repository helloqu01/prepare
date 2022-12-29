import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import Head from 'next/head';
import React  from 'react';
const Profile = () => {
    const FollowerList = [{nickname:'mememe'},{nickname:'you'},{nickname:'wow'}];
    const FollowingList = [{nickname:'mememe2'},{nickname:'you2'},{nickname:'wow2'}];
    return(
        <>
            <Head>
                <mata charSet = 'utf-8'/>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout> 
                <NicknameEditForm/>
                <FollowList header ="팔로잉 목록" data={FollowingList}/>
                <FollowList header ="팔로워 목록" data={FollowerList}/>
            </AppLayout>
        </>
    );
}

export default Profile;