import React, {Component} from 'react'
import {Link, withRouter} from "react-router-dom"
import {Menu} from "antd"
let data = [
    {
        tab:"all",
        txt:"全部"
    },
    {
        tab:"good",
        txt:"精华"
    },
    {
        tab:"ask",
        txt:"问题"
    },
    {
        tab:"share",
        txt:"分享"
    },{
        tab:"job",
        txt:"招聘"
    },
    {
        tab:"test",
        txt:"测试"
    }
]
class IndexMenu extends Component {
    constructor(arg){
        super(arg);
        let now = this.getNow(this.props.location);
        this.state = {
            now
        }
    }
    getNow(location){
        let now = location.pathname.split("/");
        return now[1];
    }
    shouldComponentUpdate(nextProps){
        let now = this.getNow(nextProps.location);
        if(now!==this.state.now){
            this.setState({
                now
            })
            return false
        }
        return true;
    }
    render() {
        return <Menu 
                    id={this.props.id}
                    mode={this.props.mode}
                    selectedKeys={[this.state.now]}
                >
                {data.map((item)=>{
                    return <Menu.Item key={item.tab}>
                        <Link to={`/index/${item.tab}`}>{item.txt}</Link>
                    </Menu.Item>
                })}
            </Menu>
    }
}

export default withRouter((props)=>{
    let {id,mode,location} = props;
    return <IndexMenu
        id={id}
        mode={mode}
        location={location}
    />
}) 