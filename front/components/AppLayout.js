import React , {useState} from 'react'
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Menu, Input, Row, Col} from 'antd';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import { createGlobalStyle } from 'styled-components';

const SearchInput = styled(Input.Search)`
vertical-align: middle;
`;
const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const AppLayout = ({children}) => {
    
    // const [isLoggedIn, setIsLoggedIn] = useState(false); //리덕스 추가로 이제 사용하지 않아도 되는 코드이다.
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    // const {isLoggedIn} = useSelector((state) => state.user);

    return(
    <div>
        <Global />
        <Menu mode = 'horizontal'>
            <Menu.Item>
                <Link href="/"><a>대시보드</a></Link>
            </Menu.Item>
        
            <Menu.Item>
                <Link href="/profile"><a>프로필</a></Link>
            </Menu.Item>

            <Menu.Item>
                <Input.Search enterButton />
                {/* <SearchInput enterButton /> */}
            </Menu.Item>

            <Menu.Item>
                <Link href="/signup"><a>회원가입</a></Link>
            </Menu.Item>
        </Menu>
        <Row gutter={8}>
            <Col xs={24} md={6}>
                {/* {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>} */}
                {isLoggedIn ? <UserProfile /> : <LoginForm />}
            </Col>
            <Col xs={24} md={12}>{children}</Col>
            <Col xs={24} md={6}>
                <a href="https://www.naver.com/"  target="_blank" rel="noopener noreferrer"> Made by me</a>
            </Col>
        </Row>
    </div>
    );
};

AppLayout.propTypes = {
    //npm i prop-types
    children : PropTypes.node.isRequired,
};

export default AppLayout;