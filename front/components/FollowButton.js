import React, { useCallback } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({ post }) => {
  const dispatch = useDispatch();
  const { me, followLoading, unfollowLoading } = useSelector((state) => state.user); // 내정보가져오기
  const isFollowing = me?.Followings.find((v) => v.id === post.User.id);//작성자의 아이디라면 //팔로우 여부
  const onClickButton = useCallback(() => {
    if (isFollowing) {//내가 팔로우 하고 있는데 팔로우를 하고있다면
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id, // 팔로우할 땐 정보를 보내준다
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      });
    }
  }, [isFollowing]);

  return (
    <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
      {isFollowing ? '언팔로우' : '팔로우'}
    </Button>
  );
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;