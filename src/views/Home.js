import React from "react";
import { useSelector,useDispatch } from "react-redux";
import getMore from "../store/actions/homeAction";

function Home(props){
    const firstName=useSelector((store)=>store.homeReducer.firstName);
    const lastName=useSelector((store)=>store.homeReducer.lastName);
    const dispatch=useDispatch();
    return (
        <div>
            <p>hello，{lastName}{firstName}</p>
            <button onClick={()=>dispatch({
                type:"update"
            })}>点击姓</button>
            <button onClick={()=>dispatch(getMore(12))}>点击名</button>
        </div>
    );
}
export default Home;