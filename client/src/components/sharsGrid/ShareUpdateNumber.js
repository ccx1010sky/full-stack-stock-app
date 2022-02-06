import React, { useState } from "react";

const ShareUpdateNumber = ({share, updateShareNo, setShowForm}) => {

    const [sharesNumber, setSharesNumber] = useState(share.noOfShares)

    const onChange = (e) => setSharesNumber(e.target.value)

    const onSubmit = (e) =>{

        e.preventDefault();
        
        const payload = {
            "name": share.name,
            "symbol": share.symbol,
            "noOfShares": Number(sharesNumber),
            "currentPrice": Number(share.currentPrice)
            }
        
        updateShareNo(share._id, payload);

        setSharesNumber(share.noOfShares);

        setShowForm(false);
    }

    return (
        <form onSubmit={onSubmit} id="update-number">
            <div className="updateFormWrap">
                <label htmlFor="noOfShares"></label>
                <input onChange={onChange} type="number" id="noOfShares" value={sharesNumber} />
            </div>
            <input type="submit" value="Update" id="save"/>
        </form>
    )
}


export default ShareUpdateNumber