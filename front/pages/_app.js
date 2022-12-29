import React from 'react';
import PropTypes from 'prop-types';
// import 'antd/dist/antd.css'; 이제 import 안해도 알아서 됨 5버전은...4버전은 해야됨
import Head from 'next/head';
import wrapper from '../store/configureStore';
import 'antd/dist/antd.css';


const NodeBird = ({Component}) => {
    return (
        <>
            <Head>
                <meta charSet='utf-8'/>
                <title>NodeBird</title>
            </Head>
            <Component/>
        </>
    )
};

NodeBird.propTypes = {
    Component : PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);
