import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    };

    const Decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>

            <p>{count}</p>

            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
        </div>
    );
}

export default Counter;