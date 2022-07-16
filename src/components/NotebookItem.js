import React from "react";
import NotebookItemBody from "./NotebookItemBody";
import DeleteButton from "./DeleteButton";
import ArchievedButton from "./ArchievedButton";

function NotebookItem({ id, title, description, onDelete, onArchieved }) {
    return (
        <div className="notebook-item card">
          
            <NotebookItemBody title={title} description={description} />
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchievedButton id={id} onArchieved={onArchieved} />
        </div>
    );
}

export default NotebookItem;