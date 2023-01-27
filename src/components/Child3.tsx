import React from "react";

type child3PropsType = {
    count: number;
};

const Child3 = ({ count }: child3PropsType) => {
    return (
        <div className="child3">
            <span>Child3</span>
            <br />
            <span>Counter: {count}</span>
        </div>
    );
};

export default Child3;
