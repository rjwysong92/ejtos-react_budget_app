import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (value)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: value,
            })
    }
    

  return (
        <div className='alert alert-secondary'>  {
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
          <style backgroundColor='#6aeb97' onPointerMove= '#ffffff' fillColor ='#6aeb97'/>
        <option value="£">Currency (£ Pound)</option>
        <option value="₹">Currency (₹ Rupee)</option>
        <option value="€">Currency (€ Euro)</option>
        <option value="$">Currency ($ Dollar)</option>
      </select>	
      }	
    </div>
    );
};

export default Location;