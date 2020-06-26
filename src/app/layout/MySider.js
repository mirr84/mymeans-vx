import React, {useState} from 'react';

import {Route, Switch} from 'react-router-dom';
import {connector} from '../store/utils/simpleConnector';

import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

const methods = {
    componentWillMount({history, dispatch}) {
        history.listen(
            (location, action) => {
            }
        )
    }
}

const App = ({state, dispatch, history}) => {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <Layout>

            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2">
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3">
                        nav 3
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout>
                <Header>
                    <div onClick={()=>setCollapsed(!collapsed)}>
                        trigger
                    </div>
                </Header>
                <Content>
                    Content
                </Content>
            </Layout>

        </Layout>
    )

}

export default connector({methods, component: App});
