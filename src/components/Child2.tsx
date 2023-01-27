import React from "react";
import Child3 from "./Child3";

type child2PropsType = {
    count: number;
};

const Child2 = ({ count }: child2PropsType) => {
    return (
        <div className="child2">
            <span>Child2</span>
            <Child3 count={count} />
        </div>
    );
};

export default Child2;
