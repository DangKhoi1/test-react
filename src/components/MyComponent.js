
import React from 'react';
import UserInfor from './UserInfor';
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


    render() {
        // Don't repeat yourself
        return (
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfor listUsers={this.state.listUsers}
                               ></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;