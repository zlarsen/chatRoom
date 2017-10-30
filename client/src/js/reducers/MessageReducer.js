import React from 'react'
import * as actionTypes from 'js/constants/ActionTypes'
import * as messageTypes from 'js/constants/MessageTypes'


const initialState = {
    messages: [{type: messageTypes.SYSTEM_MESSAGE,
                text: 'Welcome to the chat room!'}],
};

export default function messages(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RECEIVE_MESSAGE:
            const message = action.message;
            return {...state,
                messages: [...state.messages, {
                    type: messageTypes.USER_MESSAGE,
                    text: message.text,
                    userName: message.userName
                }]
            }
        case actionTypes.USER_JOINED:
            return {...state,
                messages: [...state.messages, {
                    type: messageTypes.SYSTEM_MESSAGE,
                    text: `${action.data.userName} joined! People in room: ${action.data.userNumber}`
                }]
            }
        case actionTypes.USER_LEFT:
            return {...state,
                messages: [...state.messages, {
                    type: messageTypes.SYSTEM_MESSAGE,
                    text: `${action.data.userName} left! People in room: ${action.data.userNumber}`
                }]
            }
        case actionTypes.SEND_MESSAGE:
            return state;
        default:
            return state;
    }
}
