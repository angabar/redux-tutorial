import React from "react";
import Child2 from "./Child2";

const Child1 = () => {
    return (
        <div className="child1">
            <span>Child1</span>
            <Child2 />
        </div>
    );
};

export default Child1;
