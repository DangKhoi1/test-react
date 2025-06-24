import React from 'react';
import './DisplayInfor.scss';
// import logo from './../logo.svg'; 


class DisplayInfor extends React.Component {

    constructor(props) {
        console.log('Constructor from DisplayInfor: 1');
        super(props);
        //babel compiler
        this.state = {
            isShowListUsers: true
        }
    }

    
    hideListUsers = () => {
            this.setState({
                isShowListUsers: !this.state.isShowListUsers
            }); 
        }
    
        componentDidMount() {
            console.log('Component DisplayInfor mounted');
            setTimeout(() => {
                document.title = 'Huynh Dang Khoi - ReactJS';
            }, 3000);
        }

       componentDidUpdate(prevProps, prevState, snapshot) {   
            console.log('Component DisplayInfor updated', this.props, prevProps);
            if(this.props.listUsers !== prevProps.listUsers) {
                if(this.props.listUsers.length === 5) {
                    alert('you have 5 users');
                }
            }
        }
    render() {
        console.log('Render from DisplayInfor: 2');
        // console.log('Props from parent component: ', this.props);
        // const { name, age } = this.props;
        const { listUsers } = this.props;
        // console.log('List users: ', listUsers);
        // console.table(listUsers);

        return (
            <div className='display-infor-container'>
                {/* <img src={logo} alt="Logo"/> */}
                <div>
                    <span onClick = {() => {this.hideListUsers();}}>{this.state.isShowListUsers === true ? "Hide list users" : "Show list users"}</span>
                </div>
                {this.state.isShowListUsers &&
            <>
                {listUsers.map((user) => {
                      return (
                        <div key = {user.id} className={ +user.age > 18 ? 'green' : 'red'}>
                            <div>
                            <div>My name's {user.name} </div>
                            <div>My age is {user.age} </div>
                            </div>
                            <div>
                                <button onClick = {() => this.props.handlerDeleteUser(user.id)} >Delete</button>
                            </div>
                        </div>
                        )
                })}
            </>
            }
            </div>
        );
    }
}

export default DisplayInfor;