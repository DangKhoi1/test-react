
import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';
// 
class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Huynh Dang Khoi", age: 21 },
            { id: 2, name: 'Khoa', age: 26 },
            { id: 3, name: 'Khanh', age: 18 }
        ]
    }
    handlerAddNewUser = (userObj) => {
        //    let listUsersNew = this.state.listUsers;
        //    listUsersNew.unshift(userObj);
        //    this.setState({
        //         listUsers: listUsersNew
        //    })
            this.setState({
                listUsers: [userObj, ...this.state.listUsers]
            })
    }
    handlerDeleteUser = (userId) => {
        let listUserClone = this.state.listUsers;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUserClone
        })
    }
    render() {
        // Don't repeat yourself


        return (
            <>
                <div className='a'>
                <AddUserInfor handlerAddNewUser = {this.handlerAddNewUser}></AddUserInfor>
                <br></br>
                <DisplayInfor listUsers={this.state.listUsers}
                              handlerDeleteUser={this.handlerDeleteUser}
                               ></DisplayInfor>
            </div>
            <div className= 'b'>

            </div>
            </>
        );
    }
}

export default MyComponent;