import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import {Form, Input, Checkbox, Button } from 'antd';
import { useCallback,useState } from "react";
import styled from "styled-components";
import useInput from '../hooks/useInput';


const ErrorMessage = styled.div`
    color: red;
`;


const Signup = () => {

    const [id, onChangeId] = useInput('');
    const [nickname, onChangenNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
   
    
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e)=>{
        console.log(e.target.checked);
        console.log(e.target.checked);
        setTerm(e.target.checked);
        setTermError(false);
    }, []);
    
    const onSubmit = useCallback(() => {
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(id, nickname, password, term);
    },[password, passwordCheck, term]);


    return(
        <AppLayout>
            <Head>
                <mata charSet = 'utf-8'/>
                <title>회원가입 | NodeBird</title>
            </Head>
            
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    < br/>
                    <Input name="user-id" value={id} onChange={onChangeId} required />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    < br/>
                    <Input name="user-nick" value={nickname} onChange={onChangenNickname}  />
                </div>
                <div>
                <label htmlFor="user-password">비밀번호</label>
                < br/>
                <Input name="user-password" type = "password" value={password} onChange={onChangePassword}  />
                </div>
                <div>
                    <label htmlFor="user-id">비밀번호 확인</label>
                    < br/>
                    <Input name="user-password-check" type = "password" value={passwordCheck} onChange={onChangePasswordCheck}  />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm} >약관에 동의합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의 하셔야합니다.</ErrorMessage>}
                </div>
                <div style={{marginTop:10}}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    );
}

export default Signup;