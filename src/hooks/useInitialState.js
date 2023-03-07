import { useState } from "react";

const initialState = {
    cart: [],
    userData: {}
};

function useInitialState() {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id)
        });
    }

    const addUserLogin = (payload) => {
        setState({
            ...state,
            userData: {
                ...state.userData, 
                name: payload.name,
                username: payload.username,
                password: payload.password
            }
        });
    };

    return {
        state,
        addToCart,
        removeFromCart,
        addUserLogin
    };
};

export default useInitialState;