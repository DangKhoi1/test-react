
import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';
// 
class MyComponent extends React.Component {

    render() {
        const myInfor = [ 'a', 'b', 'c' ];
        // {
        //     key: value
        // }
        return (
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfor name = "Huynh Dang Khoi" age = "21"></DisplayInfor>
                <hr />
                <DisplayInfor name = {"Huynh Dang Khoa"} age = {26} myInfor = {myInfor}></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;