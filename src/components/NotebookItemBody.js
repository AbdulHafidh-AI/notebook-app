import React from "react";

function NotebookItemBody({title, description}){
    return(
        <div className="notebook-item-body">
            <h3 className="notebook-item_title">{title}</h3>
            <p className="notebook-item_description">{description}</p>
        </div>
    );
}

export default NotebookItemBody;