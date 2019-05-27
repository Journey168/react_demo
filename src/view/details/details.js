import React, {Component} from "react"
import TxtDetails from "./txtDetails"
import ReplyList  from "./replyList"
import data from "./data"

class Details extends Component{
    render(){
        return (<div className="wrap">
            <TxtDetails
                loading = {false}
                data = {data.data}
            />
            <ReplyList
                replies={data.data.replies}
                replyCount={data.data.replyCount}
                loading = {false}
            />
        </div>)
    }
}

export default Details;