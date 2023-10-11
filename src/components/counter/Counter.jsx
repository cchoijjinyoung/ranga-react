import './Counter.css'
import { useState } from 'react';
import CounterButton from './CounterButton';
import ResetButton from './ResetButton';

export default function Counter() {
    // [0, f]
    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by) {
        setCount(count + by)
    }

    function decrementCounterParentFunction(by) {
        setCount(count - by)
    }

    function resetCountParentFunction() {
        setCount(0)
    }

    return (
        <div className="Counter">
            <CounterButton by={1}
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction}></CounterButton>
            <CounterButton by={2}
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction}></CounterButton>
            <CounterButton by={5}
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction}></CounterButton>
            <span className="totalCount">{count}</span>
            <ResetButton resetMethod={resetCountParentFunction}></ResetButton>
        </div>
    )
}


