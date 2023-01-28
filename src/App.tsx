import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Child1 from "./components/Child1";
import { setCount } from "./redux/actions";
import { reduxStoreType } from "./store";

import "./styles.css";

const App = () => {
    const dispatch = useDispatch();

    const { count } = useSelector((state: reduxStoreType) => state.appReducer);

    return (
        <div className="app">
            <span>App</span>
            <button onClick={() => dispatch(setCount(count + 1))}>Count</button>
            <Child1 />
        </div>
    );
};

export default App;
