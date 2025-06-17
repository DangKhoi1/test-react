import React from 'react';

class UserInfor extends React.Component {

    state = {
        name: 'Khoi',
        age: 18,
        address: 'Bac Lieu'
    }
    handlerClick(event){
        this.setState({
            name: 'Khoa',
            age: Math.floor(Math.random() * 100) + 1
        });
    }
    OneventHandler(event) {
        console.log(event.pageX);
    }
    
    handlerOnSubmit = (event) => {
        event.preventDefault();
        console.log('Check submit: ', this.state);
    }

    handlerOnChangeInput = (event) => {
        this.setState({
            name: event.target.value});
    }
    handlerOnChangeAge = (event) => {
        this.setState({
            age: event.target.value});
    }
        render(){
            return (
                <div>    My name is {this.state.name}, I am in {this.state.address} and I am {this.state.age} years old.
                {/* <button onClick={(event) => {this.handlerClick(event)}}>Click me</button>
                <button onMouseOver={this.OneventHandler}>Hover</button> */}
                <form onSubmit = {(event) => this.handlerOnSubmit(event)}>
                    <label>Tên của bạn:</label>
                    <input  value = {this.state.name} 
                            type='text'
                            onChange = {(event) => this.handlerOnChangeInput(event)}
                            ></input>
                    <label>Tuổi của bạn:</label>
                    <input  value = {this.state.age} 
                            type='text'
                            onChange = {(event) => this.handlerOnChangeAge(event)}
                            ></input>
                    <button>Submit</button>
                </form></div>
            )
        }
        
        



}

export default UserInfor;