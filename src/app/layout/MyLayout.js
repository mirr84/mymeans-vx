import React, {useState} from 'react';

import {connector} from '../../store/utils/simpleConnector';

import { Layout, Menu } from 'antd';

const {Sider} = Layout;

const methods = {
    componentWillMount({history, dispatch}) {
        history.listen(
            (location, action) => {
            }
        )
    }
}

const MySider = ({state, dispatch, history, collapsed = false}) => {

    return (
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
    )

}

export default connector({methods, component: MySider});
