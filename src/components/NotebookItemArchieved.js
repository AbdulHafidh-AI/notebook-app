import React from "react";
import NotebookItemBody from "./NotebookItemBody";
import DeleteButton from "./DeleteButton";
import UnArchievedButton from "./UnArchievedButton";

function NotebookItemArchieved({ id, title, description, onDelete, onUnArchieved }) {
    return (
        <div className="notebook-item card">
          
            <NotebookItemBody title={title} description={description} />
            <DeleteButton id={id} onDelete={onDelete} />
            <UnArchievedButton id={id} onUnArchieved={onUnArchieved} />
        </div>
    );
}

export default NotebookItemArchieved;