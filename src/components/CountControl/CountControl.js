import React from 'react';
import {connect} from 'react-redux'; 
import {add, sub, res} from '../../store/Actions/Actions'

const CountControl = (props) => {
 
    return(
        <>
            <button onClick={()=> props.add()}>ADD</button>
            <button onClick={()=> props.sub()}>SUB</button>
            <button onClick={()=> props.res()}>RESET</button>
        </>
 
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        add : ()=> dispatch(add()),
        sub : ()=> dispatch(sub()),
        res : ()=> dispatch(res()),
    }
}
export default connect(null, mapDispatchToProps)(CountControl);