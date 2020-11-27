import {createStore} from 'redux';
import rootReducers from './Reducers/rootReducers';

const store = createStore(
    rootReducers
)

store.subscribe(()=> {
    console.log(store.getState())
})
export default store;