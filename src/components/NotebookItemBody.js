import React from "react";
import { showFormattedDate } from "../utils/data";

function NotebookItemBody({title, body, createdAt}){
    return(
        <div className="notebook-item-body">
            <h3 className="notebook-item_title">{title}</h3>
            <p className="notebook-item_description">{body}</p>
            <small className="{style.date}">{showFormattedDate(createdAt)}</small>
        </div>
    );
}

export default NotebookItemBody;