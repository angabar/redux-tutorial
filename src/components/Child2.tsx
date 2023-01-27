import React from "react";
import Child3 from "./Child3";

const Child2 = () => {
    return (
        <div className="child2">
            <span>Child2</span>
            <Child3 />
        </div>
    );
};

export default Child2;
