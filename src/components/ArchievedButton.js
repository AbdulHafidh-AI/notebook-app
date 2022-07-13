import React from "react";

function ArchievedButton({ id, onArchieved }) {
    return <button className='contact-item__archieved' onClick={() => onArchieved(id)}>Archieved</button>
}

export default ArchievedButton;