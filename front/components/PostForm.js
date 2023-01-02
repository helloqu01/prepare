import {Button, Form, Input} from 'antd';
import { useCallback, useRef, useState ,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post';
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = ()=>{
    const { imagePaths, addPostLoading, addPostDone } = useSelector((state) => state.post);
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const imageInput = useRef();

    useEffect(() => {
        if (addPostDone) {
          setText('');
        }
      }, [addPostDone]);

      
    const onSubmitForm = useCallback(() => {
        dispatch({
          type: ADD_POST_REQUEST,
          data: text,
        });
      }, [text]);
    const onChangeText = useCallback((e)=>{
        setText(e.target.value);
 
    }, []);

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    return(
        <Form style={{margin:'10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmitForm}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="무슨일 있었냐"/>
            <div>
                <input type="file" multiple hidden innerRef={imageInput}  style={{display:'none'}}/>
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type='primary' style={{float:'right'}} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {imagePaths.map((v)=>(
                    <div key={v} style={{display:'inline-bolck'}}>
                        <img src={v} style={{width:'200px'}} alt={v} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    )
};
export default PostForm;