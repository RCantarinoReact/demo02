import React, { Component } from 'react'
import UserForm from './UserForm';


class User extends Component {
    render() {
        let lista = [
            {
               nome: 'renato',
               email : 'renato.cantarino@gmail.com'     
            },
            {
                nome: 'cantarino',
                email : 'cantarino@gmail.com'    
            }
        ];
        return(
            <div>
                <UserForm></UserForm>
                <table border="1">
                   {lista.map((item) => {
                       return <tr>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                            </tr>
                   })}


                </table>



            </div>
        )       
    }
}

export default  User;