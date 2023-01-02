import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';

import { SIGN_UP_REQUEST } from '../reducers/user';
import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import styled from 'styled-components';

const ErrorMessage = styled.div`
    color: red;
`;


const Signup = () => {
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);
  
    const [email, onChangeEmail] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');

    const dispatch = useDispatch();
    const { isSigningUp, me } = useSelector((state) => state.user); //리덕스 데이터를 꺼내오는 것
  
    const onChangeTerm = useCallback((e)=>{
        console.log(e.target.checked);
        console.log(e.target.checked);
        setTerm(e.target.checked);
        setTermError(false);
    }, []);
    
    useEffect(() => {
        if (me) {
          alert('로그인했으니 메인페이지로 이동합니다.');
          Router.push('/');
        }
      }, [me && me.id]);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
          return setPasswordError(true);
        }
        if (!term) {
          return setTermError(true);
        }
        return dispatch({
          type: SIGN_UP_REQUEST,
          data: {
            email,
            password,
            nick,
          },
        });
      }, [email, password, passwordCheck, term]);

    // const onSubmit = useCallback(() => {
    //     if(password !== passwordCheck){
    //         return setPasswordError(true);
    //     }
    //     if(!term){
    //         return setTermError(true);
    //     }
    //     console.log(email, nickname, password, term);
    // },[password, passwordCheck, term]);
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);


    return(
        <AppLayout>
            <Head>
                <mata charSet = 'utf-8'/>
                <title>회원가입 | NodeBird</title>
            </Head>
            
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-email">아이디</label>
                    < br/>
                    <Input name="user-email" type='email' value={email} onChange={onChangeEmail} required />
                </div>
                <div>
                <label htmlFor="user-nick">닉네임</label>
                <br />
                <Input name="user-nick" value={nick} required onChange={onChangeNick} />
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
                    <Button type="primary" htmlType="submit" loading={isSigningUp}>가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    );
}

export default Signup;