"use client"
import React, { useReducer } from 'react';
import Gradientdiv from './ClientComponents/Gradientdiv';
import Meat from './mainPage/Meat';
type State = {
    count: string;
};

const initialState: State = { count: "abt" };
type Action =
    | { type: 'exp'; payload: string }
    | { type: 'pro'; payload: string }
    | { type: 'abt'; payload: string }
type UserContextType = {
    state: State;
    dispatch: React.Dispatch<Action>;
};

export const UserContext = React.createContext<UserContextType>({
    state: initialState,
    dispatch: () => { },
});

export default function Home() {
    const reducer = (state: State, action: Action): State => {
        switch (action.type) {
            case 'exp':
                return { ...state, count: action.payload };
            case 'pro':
                return { ...state, count: action.payload };
            case 'abt':
                return { ...state, count: action.payload };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Gradientdiv className="">
            <UserContext.Provider value={{ state, dispatch }}>
                <Meat />
            </UserContext.Provider>
        </Gradientdiv>
    );
}