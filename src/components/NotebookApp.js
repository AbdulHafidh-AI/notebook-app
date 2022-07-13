import React from "react";
import NotebookList from "./NotebookList";
import { getData } from '../utils/data';
import NotebookInput from "./NotebookInput";


class NotebookApp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            notebooks: getData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNotebookHandler = this.onAddNotebookHandler.bind(this);
        
    }

    onDeleteHandler(id){
        const notebooks = this.state.notebooks.filter(notebook => notebook.id !== id);
        this.setState({notebooks});
    }

    onAddNotebookHandler({title, description}){
        this.setState((prevState) => {
            return{
                notebooks:[
                    ...prevState.notebooks,
                    {
                        id: +new Date(),
                        title,
                        description
                    }
                ]
            }
        });
    }

    render(){
        return (
            <div className="notebook-app">
                <h1>Notebooks App</h1>
                <h2>Add Notebooks</h2>
                <NotebookInput addNotebook={this.onAddNotebookHandler}/>
                <h2>Recent Notebooks</h2>
                <NotebookList notebooks={this.state.notebooks} onDelete={this.onDeleteHandler}/>
            </div>
        );
    }

}

export default NotebookApp;