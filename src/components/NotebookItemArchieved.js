import React from "react";
import NotebookItemBody from "./NotebookItemBody";
import DeleteButton from "./DeleteButton";
import UnArchievedButton from "./UnArchievedButton";

function NotebookItem({ id, title, description, onDelete, onUnArchieved }) {
    return (
        <div className="notebook-item">
          
            <NotebookItemBody title={title} description={description} />
            <DeleteButton id={id} onDelete={onDelete} />
            <UnArchievedButton id={id} onArchieved={onUnArchieved} />
        </div>
    );
}

export default NotebookItem;