import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, } = useContext(AppContext);
    const [newBudget, setValue] = useState(budget);

    const handleChange = (event) => {
        const newBudget = event.target.value;
        setValue(newBudget);
        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    }
    


    return (
        <div className='alert alert-secondary'> 
            <span>Budget: £
                <input required='required'
                    type='number'
                    id='budget'
                    step='10'
                    value={newBudget}
                    style={{size: 10}}
                    onChange={handleChange}>
                </input>
            </span>
        </div>
    );
};

export default Budget;
