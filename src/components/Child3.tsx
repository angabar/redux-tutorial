import React from "react";

type child3PropsType = {
    myCountProp: number;
};

const Child3 = ({ myCountProp }: child3PropsType) => {
    return (
        <div className="child3">
            <span>Child3</span>
            <br />
            <span>Counter: {myCountProp}</span>
        </div>
    );
};

export default Child3;
