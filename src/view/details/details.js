import React, {Component} from "react"
import {connect} from "react-redux"
import axios from "axios"
import TxtDetails from "./txtDetails"
import ReplyList  from "./replyList"
// import data from "./data"

class Details extends Component{
    constructor(arg){
        super(arg)
        let id = this.props.match.params.id;
        this.getData(id)
    }
    // shouldComponentUpdate(nextProps,nextState){

    // }
    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type: "DETAILS_UPDATA"
            })
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
            .then((res)=>{
                dispatch({
                    type: "DETAILS_UPDATA_SUCC",
                    data: res.data
                })
            })
            .catch((err)=>{
                dispatch({
                    type: "DETAILS_UPDATA_ERROR",
                    data: err
                })
            })
        })
        axios.get()
    }
    render(){
        let {loading,data} = this.props;
        return (<div className="wrap">
            <TxtDetails
                loading = {loading}
                data = {data}
            />
            <ReplyList
                replies={data.replies}
                replyCount={data.reply_count}
                loading = {loading}
            />
        </div>)
    }
}

export default connect(state=>(state.details))(Details);