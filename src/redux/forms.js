import * as ActionTypes from './ActionTypes';

export const InitialFeedback={
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree:false,
    contactType: 'Tel.',
    message: ''
}

export const Feedbacks=(state={
    errMess: null,
    message: []
}, action) =>{
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            return {...state,  errMess: null, message: action.payload }

        default:
            return state;
    }
}