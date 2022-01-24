import React from 'react';
import DisplayShare from './DisplayShare';
import './AddShare.css'

const DisplayShareList = ({shareSearchArray, getInfo, updateShareInfo}) => {

   const displayShareList = shareSearchArray.map(share => <DisplayShare getInfo={getInfo} share={share} updateShareInfo={updateShareInfo} key={share['1. symbol']} />);

   const handleClick = () => {
    return
   }
    
  return (
    <div className='display-share-list-container'>
        <h2>I am the list of shares component</h2>

        <ul className="display-list"> 
            {displayShareList}
        </ul>
        <div className='clear-list'>
            <button onClick={handleClick}>Clear List</button>
        </div>
    </div>
    );
};

export default DisplayShareList;
