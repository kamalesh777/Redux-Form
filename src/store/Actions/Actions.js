import {increment, decrement, reset, addUser, delUser} from '../../allConstants';

export const add = () => {
    return {
        type: increment
    }
}
export const sub = () => {
    return {
        type: decrement
    }
}
export const res = () => {
    return {
        type: reset
    }
}
export const add_User = (name, id) => {
    return {
        type: addUser,
        name: name,
        id: id
    }
}
export const del_User = (id) => {
    return {
        type: delUser,
        id: id
    }
}
