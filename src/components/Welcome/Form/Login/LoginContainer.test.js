import React from 'react';
import { shallow } from 'enzyme'
import LoginContainer from "./LoginContainer";
import configureStore from "redux-mock-store";
import Login from './Login'
import { login } from "../../../../redux/reducers/login_reducer";


describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly))',()=>{
    const initialState = {
        loginPage : {
            user:{
                email:'',
                password: ''
              },
              isLoggedIn: false,
              isFetching: false
            }
        }
    const mockStore = configureStore();
    let store,wrapper;

    beforeEach(()=>{
        store = mockStore(initialState);
        wrapper = shallow(<LoginContainer store={store} /> );
    })

    it('+++ render the connected(SMART) component', () => {
        expect(wrapper.length).toEqual(1);
     });
 
     it('+++ check Prop matches with initialState', () => {
        expect(wrapper.find(Login).prop('isFetching')).toEqual(initialState.loginPage.isFetching);
     });


     it('+++ check action on dispatching ', () => {
        let action;
        store.dispatch(login());
        action = store.getActions();
        expect(action[0].type).toBe("LOGIN");
    });

});
