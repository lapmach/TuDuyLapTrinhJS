import { createContext, useState } from "react";
export const MyContext = createContext();
export const MyProvider = ({ Children }) => {
    const [state , setState] = useState({
        name: 'Roan',
        age: 20
    });
    const updateState = (state) => {
        setState(state);
    }
    return (
            <MyContext.Provider value={[state, setState]}>
                {Children}
            </MyContext.Provider>
    )
}


