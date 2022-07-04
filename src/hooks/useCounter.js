import { useState } from "react"

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)

    const incrementar = (value = 1) => {
        setCounter(counter + value);
    }

    const decrementar = () => {
        if(counter ===0) return;
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialValue);
    }


    return {
        counter,
        incrementar,
        decrementar,
        reset
    }
}