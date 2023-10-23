import { useReducer } from "react"

const initialState = {
    message: "hi"
}

//the pattern for using a reducer function is useful when you need 

function reducer(state, action) {
    switch(action.type) {
        case "yell":
            return {
                message: `HEY! I JUST SAID ${state.message}`
            }
        case "whisper":
            return {
                message: `excuse me, I just said ${state.message}`
            }
        default:
            return {
                message: "hi"
            }
    }
}

const Message = () => {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    )
    return (
        <>
        <p>Message: {state.message}</p>
        <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
        <button onClick={() => dispatch({ type: "whisper" })}>whisper</button>
        </>
    )
}

export default Message