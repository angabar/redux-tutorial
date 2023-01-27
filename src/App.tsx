import React, { useState } from "react";

import Child1 from "./components/Child1";

import "./styles.css";

const App = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="app">
            <span>App</span>
            <button onClick={() => setCount(count + 1)}>Count</button>
            <Child1 count={count} />
        </div>
    );
};

export default App;
