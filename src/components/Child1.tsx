import React from "react";
import Child2 from "./Child2";

type child1PropsType = {
    count: number;
};

const Child1 = ({ count }: child1PropsType) => {
    return (
        <div className="child1">
            <span>Child1</span>
            <Child2 count={count} />
        </div>
    );
};

export default Child1;
