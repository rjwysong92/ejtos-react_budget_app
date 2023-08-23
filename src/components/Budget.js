import React, { useContext, useDebugValue, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [value, setValue] = useState(budget);

    const handleChange = (event) => {
        const newBudget = event.target.value;
        setValue(newBudget);
        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    }


    return (
        <div className='alert alert-secondary'> 
            <span>Budget: {currency}
                <input required='required'
                    type='number'
                    id='budget'
                    value={value}
                    style={{size: 10}}
                    onChange={handleChange}>
                </input>
            </span>
        </div>
    );
};

export default Budget;
