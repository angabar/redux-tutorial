import React from "react";
import { useSelector } from "react-redux";

import { reduxStoreType } from "../store";

const Child3 = () => {
    const { count } = useSelector((state: reduxStoreType) => state.appReducer);

    return (
        <div className="child3">
            <span>Child3</span>
            <br />
            <span>Counter: {count}</span>
        </div>
    );
};

export default Child3;
