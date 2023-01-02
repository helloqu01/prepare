import {Button, Form, Input} from 'antd';
import { useCallback } from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types'; //검사 도구
import { useDispatch, useSelector } from 'react-redux';

import { ADD_COMMENT_REQUEST } from '../reducers/post';

const CommentForm = ({post}) =>{
    const dispatch = useDispatch();
    const { addCommentDone, addCommentLoading } = useSelector((state) => state.post);

    const id = useSelector((state)=>state.user.me?.id);

    const [commentText, onChangeCommentText, setCommentText] = useInput('');

    useEffect(() => {
        if (addCommentDone) {
          setCommentText('');
        }
      }, [addCommentDone]);//댓글을 쓰고 댓글창 비워주는 부분

    
      const onSubmitComment = useCallback(() => {
        dispatch({
          type: ADD_COMMENT_REQUEST,
          data: { content: commentText, userId: id, postId: post.id },
        });
      }, [commentText, id]);

    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{position:'relative', margin:0}}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button style={{position:'absolute', right:0, bottom:-40, zIndex:1}}  type='primary' htmlType='submit'  loading={addCommentLoading}>삐약</Button>
            </Form.Item>
        </Form> 
    );
}

CommentForm.propTypes ={
    post: PropTypes.object.isRequired,
};

export default CommentForm;