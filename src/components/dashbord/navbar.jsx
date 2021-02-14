import React, { Fragment,Component } from 'react'
import { Menu ,Drawer, Button, Radio, Space} from 'antd';


import { MailOutlined, AppstoreOutlined, SettingOutlined,MenuOutlined,UserOutlined  } from '@ant-design/icons';

const { SubMenu } = Menu;

class Nav_Bar extends Component { 
    constructor(props) {
      super(props);
      this.state = {current: 'mail', visible: false, placement: 'left'};
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
      showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };
    
      onChange = e => {
        this.setState({
          placement: e.target.value,
        });
      };

    render(){
        const { current,placement, visible  } = this.state;
        return (

            <Fragment>
       
                <Drawer
                title="Basic Drawer"
                placement={placement}
                closable={false}
                onClose={this.onClose}
                visible={visible}
                key={placement}
                >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                </Drawer>
     

                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="mail" icon={<MenuOutlined  />} onClick={this.showDrawer} >
             
                    </Menu.Item>
                    <Menu.Item key="app"  icon={<AppstoreOutlined />}>
                    Navigation Two
                    </Menu.Item>
                    <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                    </Menu.Item>

                    <SubMenu key="profile" icon={<UserOutlined />} style={{float:'right'}}>
                    <Menu.ItemGroup >
                        <Menu.Item key="setting:12">Setting</Menu.Item>
                        <Menu.Item key="setting:22">Log Out</Menu.Item>
                    </Menu.ItemGroup>
                    </SubMenu>

                </Menu>
          </Fragment>
        );
      }
}


export default Nav_Bar;

