import React from "react";
import Child3 from "./Child3";

type child2PropsType = {
    myProp: number;
};

const Child2 = ({ myProp }: child2PropsType) => {
    return (
        <div className="child2">
            <span>Child2</span>
            <Child3 myCountProp={myProp} />
        </div>
    );
};

export default Child2;
