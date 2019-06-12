import {reduxForm , Field} from 'redux-form'
import { connect } from 'react-redux'
import React from 'react'
import {submitUserAction} from '../../actions/user/submitUserAction'


const userFormFunction =  props =>{
    const {handleSubmit} = props
    const submit = (data , submitUserAction) => {
        submitUserAction(data);
    }



    return(        
        <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
              <label>
                  Name
              </label>  
              <Field 
                    type="text"
                    component="input"
                    name="nome" />                

              <label>
                  Email
              </label>  
              <Field 
                    type="email" 
                    component="input" 
                    name="email" />                  
              
        <button type="submit">Salvar</button>
        </form>
        
    );
}
const UserForm = (reduxForm({form:'formUser'}))(userFormFunction)
const MapStateToProps = state => ({
})


//ação conectada com o 
export default connect(MapStateToProps, {submitUserAction})(UserForm)