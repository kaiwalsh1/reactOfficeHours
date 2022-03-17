import { useState } from 'react';

const Counter = () => {
    // returns an array with 2 elements
    // 1st - state (default value: whatever you pass)
    const [ count, setCount ] = useState(0);



    return (
        <div className="myClass another Class" id="someId">
            {/* <p>Count: {count % 2 === 0 ? 'Even' : 'Odd'}</p> */}
            <p
                style={{
                    color: count % 2 ===0 ? 'blue' : 'red'
                }}
            >
                Count: {count}
            </p>
            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <button
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>
        </div>
    );
};

export default Counter;