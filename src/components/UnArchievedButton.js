import React from "react";

function UnArchievedButton({ id, onUnArchieved }) {
    return <button className='notebook-item__unarchieved' onClick={() => onUnArchieved(id)}>Unarchieved</button>
}

export default UnArchievedButton;