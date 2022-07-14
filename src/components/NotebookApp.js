import React from "react";
import NotebookList from "./NotebookList";
import { getData } from '../utils/data';
import NotebookInput from "./NotebookInput";
import NotebookListArchived from "./NotebookListArchieved";



class NotebookApp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            notebooks: getData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNotebookHandler = this.onAddNotebookHandler.bind(this);
        this.onArchievedHandler = this.onArchievedHandler.bind(this);
        this.onUnArchievedHandler = this.onUnArchievedHandler.bind(this);
        
    }

    onDeleteHandler(id){
        const notebooks = this.state.notebooks.filter(notebook => notebook.id !== id);
        this.setState({notebooks});
    }

    onUnArchievedHandler(id){
        const notebooks = this.state.notebooks.map(notebook => {
            if(notebook.id === id){
                notebook.archieved = false;
            }
            return notebook;
        }
        );
        this.setState({notebooks});
    }

    onArchievedHandler(id){
        const notebooks = this.state.notebooks.map(notebook => {
            if(notebook.id === id){
                notebook.archieved = true;
            }
            return notebook;
        }
        );
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
        // check if notebooks is archieved
        const notebooks = this.state.notebooks.filter(notebook => notebook.archieved === false);
        const notebooksArchieved = this.state.notebooks.filter(notebook => notebook.archieved === true);
        // return(
        //     <div className="notebook-app">
        //         <NotebookInput onAddNotebook={this.onAddNotebookHandler} />
        //         <NotebookList notebooks={notebooks} onDelete={this.onDeleteHandler} onArchieved={this.onArchievedHandler} />
        //         <h1>Archieved Notebooks</h1>
        //         <NotebookListArchived notebooks={notebooksArchieved} onDelete={this.onDeleteHandler} onArchieved={this.onArchievedHandler} />
        //     </div>
        // );
        return (
            <div className="notebook-app">
                <h1>Notebooks App</h1>
                <h2>Add Notebooks</h2>
                <NotebookInput addNotebook={this.onAddNotebookHandler}/>
                <h2>Recent Notebooks</h2>
                <NotebookList notebooks={notebooks} onDelete={this.onDeleteHandler} onArchieved={this.onArchievedHandler} />
                <h2>Archieved Notebooks</h2>
                <NotebookListArchived notebooks={notebooksArchieved} onDelete={this.onDeleteHandler} onUnArchievedHandler={this.onUnArchievedHandler} />
            </div>
        );
    }

}

export default NotebookApp;