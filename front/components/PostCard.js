import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone } from "@ant-design/icons";
import { Avatar, Button,Card, Popover,  List,  Comment} from "antd";

import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import PostImages from './PostImages';
import { useCallback, useState } from "react";

import CommentForm from "./CommentForm";
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST } from '../reducers/post';

import FollowButton from './FollowButton';
const PostCard = ({post}) => {
    // const {me} = useSelector((state)=>state.user);
    // const id = me?.id; //옵셔널 체이닝 연산자
    const dispatch = useDispatch();
    const [linked, setLinked] = useState(false);
    const [commentFormOpened,setCommentFormOpened]= useState(false);

    const { removePostLoading } = useSelector((state) => state.post); //로딩창이 돌아가게 하는 것 

    const id = useSelector((state)=>state.user.me?.id);//있나 없나
    const onToggleLike = useCallback(()=>{
        setLinked((prev)=>!prev);//토글 부분 
    }, []);
    const onToggleComment = useCallback(()=>{
        setCommentFormOpened((prev)=>!prev);//토글 부분 
    }, []);
    const onRemovePost = useCallback(() => {
        dispatch({
          type: REMOVE_POST_REQUEST,
          data: post.id,
        });
      }, []);
    return(
        <div>
            <Card cover={post.Images[0] && <PostImages images={post.Images}/>}  //이미지가 1개 이상 있을 때 PostImages 를 보여준다.
            actions={[ 
            <RetweetOutlined key="retweet"/>,
            linked 
                ?   <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike}/>
                :   <HeartOutlined key="heart" onClick={onToggleLike}/>,
          
            <MessageOutlined key="comment" onClick={onToggleComment}/>,<Popover key="more" content={( 
            <Button.Group>
                {id && post.User.id === id ? (
                    <>
                       <Button>수정</Button>  
                        <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>  
                    </>
                ): <Button>신고</Button> }
             
            </Button.Group>)}> <EllipsisOutlined/> </Popover>,]}
            extra={<FollowButton post={post} />}
            >

            <Card.Meta
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={<PostCardContent postData={post.content} />}
            />
            </Card>
            {commentFormOpened && (
                <div>
                    <CommentForm post={post}/> 
                    <List
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment 
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />   
                </div>
            )}
            {/*
            <Comments/> */}
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number,
      User: PropTypes.object,
      UserId: PropTypes.number,
      content: PropTypes.string,
      createdAt: PropTypes.object,
      Comments: PropTypes.arrayOf(PropTypes.any),
      Images: PropTypes.arrayOf(PropTypes.any),
    }).isRequired,
  };

export default PostCard;