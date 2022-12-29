import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone } from "@ant-design/icons";
import { Avatar, Button,Card, Popover,  List,  Comment} from "antd";

import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import PostImages from './PostImages';
import { useCallback, useState } from "react";

import CommentForm from "./CommentForm";


const PostCard = ({post}) => {
    // const {me} = useSelector((state)=>state.user);
    // const id = me?.id; //옵셔널 체이닝 연산자

    const [linked, setLinked] = useState(false);
    const [commentFormOpened,setCommentFormOpened]= useState(false);

    const id = useSelector((state)=>state.user.me?.id);//있나 없나
    const onToggleLike = useCallback(()=>{
        setLinked((prev)=>!prev);//토글 부분 
    }, []);
    const onToggleComment = useCallback(()=>{
        setCommentFormOpened((prev)=>!prev);//토글 부분 
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
                        <Button type="danger">삭제</Button>  
                    </>
                ): <Button>신고</Button> }
             
            </Button.Group>)}> <EllipsisOutlined/> </Popover>,]}>

                <Card.Meta avatar={<Avatar>{post.User.nickname[0]}</Avatar>} title={post.User.nickname}  description={post.content}/>
          
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

PostCard.PropTypes={
    post: PropTypes.shape({
        id:PropTypes.number,
        User:PropTypes.object,
        content: PropTypes.string,
        createAt: PropTypes.object,
        Conmments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};

export default PostCard;