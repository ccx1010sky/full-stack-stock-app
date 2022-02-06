import ShareUpdateNumber from './ShareUpdateNumber';
import { useState } from 'react';


const ShareCard = ({share, removeShareFromDB, updateShareNo, getGraph, chartType}) => {
  const [showForm, setShowForm] = useState(false)

  const handleDelete = () => removeShareFromDB(share._id);
  const handleGetGraph = (event) => {
    event.preventDefault();
    getGraph(share.symbol)
    chartType("Individual")
  }
  
  
  const handleEdit = () => {
      setShowForm(true);
  }
  if(showForm){

  return <div className='share-list'> 
      <strong><h4> {share.symbol} </h4></strong>
      <b> {share.name} </b>
      <b> Amount owned: {share.noOfShares}</b>
      <b>Total value: £{(Number(share.noOfShares)*Number(share.currentPrice)).toLocaleString()}</b>
      <ShareUpdateNumber share = {share} updateShareNo={updateShareNo} setShowForm={setShowForm}/>
      <div className='edit-delete'>
      <button onClick={handleDelete}><i className="fas fa-trash"></i></button>
      <button onClick={handleEdit}> <i className="fas fa-edit"></i> </button>
      <button onClick={handleGetGraph}>Display </button>
      </div>
  </div>;
}

  else{
    return (
        <div className='share-list'> 
        <strong><h4>{share.symbol}</h4></strong>
        <b>{share.name}</b>
      <b>Amount owned: {share.noOfShares}</b>
      <b>Total value: £{(Number(share.noOfShares)*Number(share.currentPrice)).toLocaleString()}</b>
      <div className='edit-delete'>
      <button className='redHover' onClick={handleDelete}><i className="fas fa-trash"></i></button>
      <button className='redHover' onClick={handleEdit}> <i className="fas fa-edit"></i> </button>
      <button className='redHover' onClick={handleGetGraph}>Display </button>
      </div>
      </div>
    )
}
} 
export default ShareCard;
