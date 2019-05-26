import React, { Component } from 'react';
import {Link} from "react-router-dom"
import {Menu, Icon} from 'antd'

class Nav extends Component {
    render() {
        let mode = this.props.mode;
        let id = this.props.id;
        return <Menu 
                mode={mode} 
                id={id} 
                theme="light">
            <Menu.Item>
                <Link to="/index"><Icon type="home"/>首页</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/book"><Icon type="book"/>教程</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/about"><Icon type="info-circle"/>关于</Link>
            </Menu.Item>
        </Menu>
    }
}

export default Nav