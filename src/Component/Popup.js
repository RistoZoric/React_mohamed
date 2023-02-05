import React from 'react';
import './Popup.scss';
// import { faCross } from '@fortawesome/free-solid-svg-icons';

const Popup = (props) => {

    function handlePopupTrigger() {
        props.setTrigger(false);
        props.setEnquire(false);
    }
  return (props.trigger)?(
    <div className='popup-container'>
      <div className='popup-container-inner'>
        <button className='popup-container-inner-close' onClick={handlePopupTrigger}>x</button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Popup
