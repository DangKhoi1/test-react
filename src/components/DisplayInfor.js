import React from 'react';

class DisplayInfor extends React.Component {
    render() {
        // console.log('Props from parent component: ', this.props);
        // const { name, age } = this.props;
        const { listUsers } = this.props;
        console.log('List users: ', listUsers);
        return (
            <div>
                {listUsers.map((user)=> {
                    return (
                        <div key = {user.id}>
                            <div>My name's {user.name} </div>
                            <div>My age is {user.age} </div>
                        </div>
                    )
                })}
            {/* <div>My name's  {name}</div>
            <div>My age is {age} </div> */}
            </div>
        );
    }
}

export default DisplayInfor;