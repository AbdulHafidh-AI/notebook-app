import React from "react";

function UnArchievedButton({ id, onUnArchieved }) {
    return <button className='notebook-item__archieved' onClick={() => onUnArchieved(id)}>UnArchieved</button>
}

export default UnArchievedButton;