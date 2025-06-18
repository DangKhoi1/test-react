import React from 'react';

class DisplayInfor extends React.Component {
    render() {
        console.log('Props from parent component: ', this.props);
        const { name, age } = this.props;
        return (
            
            <div>
            <div>My name's  {name}</div>
            <div>My age is {age} </div>
            </div>
        );
    }
}

export default DisplayInfor;