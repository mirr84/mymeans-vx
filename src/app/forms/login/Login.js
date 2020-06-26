import React from 'react';
import {connector} from "../../store/utils/simpleConnector";
import {Modal, Tabs} from 'antd';

const { TabPane } = Tabs;

const methods = {
    componentWillMount(props) {
        // console.log('init NoMatch', props);
    }
}

const Login = ({state, dispatch, history, header, content}) => {

    return (
        <Modal
            centered
            visible={true}
            closable={false}
            mask={false}
            footer={null}
        >
            <Tabs defaultActiveKey={history.location.pathname || '/auth'}
                  onChange={(tab)=>history.push(tab)}>
                <TabPane tab="Авторизация" key="/auth">

                </TabPane>
                <TabPane tab="Регистрация" key="/reg">

                </TabPane>
                <TabPane tab="Восстановление доступа" key="/recovery">

                </TabPane>
            </Tabs>
        </Modal>
    )

}

export default connector({methods, component: Login});
