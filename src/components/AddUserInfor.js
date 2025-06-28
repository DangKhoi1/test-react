import React from 'react';
import { useState } from 'react';
// class AddUserInfor extends React.Component {

//     state = {
//         name: 'Khoi',
//         age: 18,
//         address: 'Bac Lieu'
//     }
//     handlerClick(event){
//         this.setState({
//             name: 'Khoa',
//             age: Math.floor(Math.random() * 100) + 1
//         });
//     }
//     OneventHandler(event) {
//         console.log(event.pageX);
//     }
    
//     handlerOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handlerAddNewUser(
//             {
//                 id: Math.floor(Math.random() * 100) + 1  + '-random',
//                 name: this.state.name,
//                 age: this.state.age
//             }
//         )
//     }

//     handlerOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value});
//     }
//     handlerOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value});
//     }
//         render(){
//             return (
//                 <div>    My name is {this.state.name}, I am in {this.state.address} and I am {this.state.age} years old.
//                 {/* <button onClick={(event) => {this.handlerClick(event)}}>Click me</button>
//                 <button onMouseOver={this.OneventHandler}>Hover</button> */}
//                 <form onSubmit = {(event) => this.handlerOnSubmit(event)}>
//                     <label>Tên của bạn:</label>
//                     <input  /*value = {this.state.name}*/ 
//                             type='text'
//                             onChange = {(event) => this.handlerOnChangeInput(event)}
//                             ></input>
//                     <label>Tuổi của bạn:</label>
//                     <input  /*value = {this.state.name}*/
//                             type='text'
//                             onChange = {(event) => this.handlerOnChangeAge(event)}
//                             ></input>
//                     <button>Submit</button>
//                 </form></div>
//             )
//         }
        
        



// }


const AddUserInfor = (props) => {
    //     state = {
    //     name: 'Khoi',
    //     age: 18,
    //     address: 'Bac Lieu'
    // }

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    // const [address, setAddress] = useState('Bac Lieu');

    //     handlerClick(event){
    //     this.setState({
    //         name: 'Khoa',
    //         age: Math.floor(Math.random() * 100) + 1
    //     });
    // }
    // OneventHandler(event) {
    //     console.log(event.pageX);
    // }
    
    const handlerOnSubmit = (event) => {
        event.preventDefault();
        props.handlerAddNewUser(
            {
                id: Math.floor(Math.random() * 100) + 1  + '-random',
                name: name,
                age: age
            }
        )
    }

    const handlerOnChangeInput = (event) => {
        // this.setState({
        //     name: event.target.value});
        setName(event.target.value);
    }
    const handlerOnChangeAge = (event) => {
        setAge(event.target.value);

        // this.setState({
        //     age: event.target.value});
    }
    return (
        <div>    My name is {name}, and I am {age} years old.
                {/* <button onClick={(event) => {this.handlerClick(event)}}>Click me</button>
               <button onMouseOver={this.OneventHandler}>Hover</button> */}
                <form onSubmit = {(event) => handlerOnSubmit(event)}>
                    <label>Tên của bạn:</label>
                    <input  
                    // value = {name}
                            type='text'
                            onChange = {(event) => handlerOnChangeInput(event)}
                            ></input>
                   <label>Tuổi của bạn:</label>
                     <input
                    //    value = {age}
                           type='text'
                           onChange = {(event) => handlerOnChangeAge(event)}
                           ></input>
                    <button>Submit</button>
                 </form></div>
    )
}
export default AddUserInfor;