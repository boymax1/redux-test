export default function getMore(payload) {
    return dispatch=>{
        setTimeout(()=>{
            dispatch({
                type:"test",
                payload
            });
        },2000);
    }
}