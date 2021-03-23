const initState={
    lastName: "xiao",
    firstName: "冬"
};

function reducer(state=initState,action){
    let newState=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "update":
            newState.lastName+=1;
            break;
        case "test":
            newState.firstName+=2;
            break;
        default:
    }
    return newState;
}

export default reducer;