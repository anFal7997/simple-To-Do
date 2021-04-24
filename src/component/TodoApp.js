import React, { Component } from 'react';
import './TodoApp.css';


export default class TodoApp extends Component {
    state = {
        input: "  ",
        items: [],
    };



    handleChangeEvent= event => {
        this.setState({
            input: event.target.value
        });
    };

    storeItems = event =>{

        event.preventDefault();
        const {input} = this.state;
      
        this.setState({
            items: [...this.state.items, input],
            input:" ",
           
        });


    };

    itemDelete = key =>{
        

        this.setState({
            items : this.state.items.filter((data, index) => index !== key),
        });
        
    };


    render() {

        const {input, items} = this.state;
        return(
            <div className="todo-container">
                

                <form className="input-Section" onSubmit={this.storeItems}>
                <h1>Todo App</h1>
                    <input type="text" value={input} onChange={this.handleChangeEvent} placeholder="Enter Items..."></input>
                    <input type="submit" onClick={this.storeItems} value="Add"></input>
                </form>

                <ul>
                    {items.map((data, index) =>(
                        <li key={index}>{data}<i className="fas fa-trash-alt" onClick= {()=>this.itemDelete(index)}></i></li>
                    ))}
             </ul>
                
            </div>
        );
    }
}
