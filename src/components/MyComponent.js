
import React, { useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';
// 
// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: "Huynh Dang Khoi", age: 21 },
//             { id: 2, name: 'Khoa', age: 26 },
//             { id: 3, name: 'Khanh', age: 18 }
//         ]
//     }
    //     handlerAddNewUser = (userObj) => {
    //         //    let listUsersNew = this.state.listUsers;
    //         //    listUsersNew.unshift(userObj);
    //         //    this.setState({
    //         //         listUsers: listUsersNew
    //         //    })
    //             this.setState({
    //                 listUsers: [userObj, ...this.state.listUsers]
    //             })
    //     }
    //     handlerDeleteUser = (userId) => {
    //         let listUserClone = this.state.listUsers;
    //         listUserClone = listUserClone.filter(item => item.id !== userId);
    //         this.setState({
    //             listUsers: listUserClone
    //         })
    //     }
//     render() {
//         // Don't repeat yourself


//         return (
//             <>
//                 <div className='a'>
//                 <AddUserInfor handlerAddNewUser = {this.handlerAddNewUser}></AddUserInfor>
//                 <br></br>
//                 <DisplayInfor listUsers={this.state.listUsers}
//                               handlerDeleteUser={this.handlerDeleteUser}
//                                ></DisplayInfor>
//             </div>
//             <div className= 'b'>

//             </div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "Huynh Dang Khoi", age: 21 },
            { id: 2, name: 'Khoa', age: 26 },
            { id: 3, name: 'Khanh', age: 18 }
        ]
    )
    const handlerAddNewUser = (userObj) => {
            //    let listUsersNew = this.state.listUsers;
            //    listUsersNew.unshift(userObj);
            //    this.setState({
            //         listUsers: listUsersNew
            //    })
            setListUsers([userObj, ...listUsers])
                // this.setState({
                //     listUsers: [userObj, ...this.state.listUsers]
                // })
        }
    const handlerDeleteUser = (userId) => {
            let listUserClone = listUsers;
            listUserClone = listUserClone.filter(item => item.id !== userId);
            setListUsers(listUserClone);
            // this.setState({
            //     listUsers: listUserClone
            // })
        }
        return (
            <>
                <div className='a'>
                <AddUserInfor handlerAddNewUser = {handlerAddNewUser}></AddUserInfor>
                <br></br>
                <DisplayInfor listUsers={listUsers}
                              handlerDeleteUser={handlerDeleteUser}
                               ></DisplayInfor>
            </div>
            <div className= 'b'>

            </div>
            </>
        );
}

export default MyComponent;