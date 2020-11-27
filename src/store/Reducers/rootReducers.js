
import {increment, decrement, reset, addUser, delUser} from '../../allConstants';

const initialObject = {
    count : 0,
    users: []
}

const countReducers = (state=initialObject, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case increment : {
            return {
                ...state,
                count: state.count + 1,
            }
        }
        case decrement : {
            return {
                ...state,
                count: state.count - 1,
            }
        }
        case reset : {
            return {
                ...state,
                count: 0 ,
            }
        }
        case addUser : {
            return {
                ...state,
                users: state.users.concat({id: action.id, name: action.name})
            }
        }
        case delUser : {
            return {
                ...state,
                users: state.users.filter((x)=> x.id !== action.id)
            }
        }
    }
    return state;
}


export default countReducers;