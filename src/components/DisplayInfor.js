import React, { useState } from 'react';
import './DisplayInfor.scss';



// class DisplayInfor extends React.Component {




//     render() {
//         console.log('Render from DisplayInfor: 2');
//         // console.log('Props from parent component: ', this.props);
//         // const { name, age } = this.props;
//         const { listUsers } = this.props;
//         // console.log('List users: ', listUsers);
//         // console.table(listUsers);

//         return (
//             <div className='display-infor-container'>
               
//                 {true &&
//             <>
//                 {listUsers.map((user) => {
//                       return (
//                         <div key = {user.id} className={ +user.age > 18 ? 'green' : 'red'}>
//                             <div>
//                             <div>My name's {user.name} </div>
//                             <div>My age is {user.age} </div>
//                             </div>
//                             <div>
//                                 <button onClick = {() => this.props.handlerDeleteUser(user.id)} >Delete</button>
//                             </div>
//                         </div>
//                         )
//                 })}
//             </>
//             }
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
     const { listUsers } = props;
    
     const [isShowHideListUser, setShowHideListUser] = useState(true);

  
    const handleShowHideListUser = () => {
          //  this.state = {
    //     isShowHideListUser: true
    // }

        setShowHideListUser(!isShowHideListUser);
    }
    return (
            <div className='display-infor-container'>
               <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list users" : "Show list users"}
                    </span>

               </div>
                {isShowHideListUser &&
            <>
                {listUsers.map((user) => {
                      return (
                        <div key = {user.id} className={ +user.age > 18 ? 'green' : 'red'}>
                            <div>
                            <div>My name's {user.name} </div>
                            <div>My age is {user.age} </div>
                            </div>
                            <div>
                                <button onClick = {() => props.handlerDeleteUser(user.id)} >Delete</button>
                            </div>
                        </div>
                        )
                })}
            </>
            }
            </div>
    );
}
export default DisplayInfor;