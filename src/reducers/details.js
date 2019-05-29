function details(state={
    data:{
        author:{
            loginname:"",
            avatar_url:""
        },
        replies:[],
        reply_count:0,
        create_at:"",
        good: true
    },
    loading:false
},action){
    console.log("action",action)
    switch (action.type){
        case "DETAILS_UPDATA":
            return {
                loading: true,
                data: state.data
            }
        case "DETAILS_UPDATA_SUCC":
            return {
                loading: false,
                data: action.data.data
            }
        case "DETAILS_UPDATA_ERROR":
            return {
                loading: false,
                data: {
                    author:{
                        loginname:"",
                        avatar_url:""
                    },
                    replies:[],
                    replyCount:0,
                    create_at:"",
                    good: true
                }
            }
        default:
            return state;
    }
}

export default details