import React, { useState } from 'react';

import Card from './Card';
import './List.css';

export const List = () => {
    const [num, setNum] = useState(null);
    const validNums = [1, 2, 3, 5, 8, 13];

    return (
        <>
            {num ? (
                <div className="response-container">
                    <Card number={num} onClick={() => setNum(null)} />
                </div>
            ) : (
                <div className="list-container">
                    {validNums.map(validNum => <Card number={validNum} onClick={() =>setNum(validNum)} key={validNum} />)}
                </div>
            )}
        </>
    )
};

export default List;
