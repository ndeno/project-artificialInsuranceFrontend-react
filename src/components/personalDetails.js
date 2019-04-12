import React from "react"; 
import { Form, Field } from 'formik'

const IntroBanner = () => {
  return(
    <div className="row center">
       <h2 className="header center orange-text">Personal Details</h2>
       <h5 class="header col s12 light">Hello, you. Why not tell us about yourself?</h5>
    </div>
  )
}

const PersonalDetailsForm = props => {
  
  return (
    <Form className="container">
      <div className="row">
        <div className="input-field center col s6">
          <Field type="text" name="firstname" placeholder="First Name" />
        </div>
        <div className="input-field center col s6">
          <Field type="text" name="lastname" placeholder="Last Name" />
        </div>
        <div className="input-field center col s6">
          <Field type="text" name="address" placeholder="Address" />
        </div>
        <div className="input-field center col s6">
          <Field type="text" name="postcode" placeholder="Postcode" />
        </div>
        <div className="input-field center col s6">
          <Field type="email" name="email" placeholder="Email" />
        </div>
        <div className="input-field center col s6">
          <Field type="text" name="phone" placeholder="Phone" />
        </div>
        
        <div className="input-field center col s6">
    <select>
      <optgroup label="team 1">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </optgroup>
      <optgroup label="team 2">
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </optgroup>
    </select>
    <label>Optgroups</label>
  </div>


        <div className="input-field center col s6">
          <Field component="select" name="gender">
            <option value="">Male</option> 
          </Field>
        </div>
      </div>
      <button class="btn waves-effect waves-light orange" type="submit" name="action">Submit</button>
      <br/>
      <br/>
    </Form>
  )
} 

class PersonalDetails extends React.Component {
    onSubmit(){
        // TODO 
        // SUBMIT FORM AND REDIRECT 
    }
  
    render() {
      return (
       <div className="section no-pad-bot">
          <IntroBanner/>
          <PersonalDetailsForm/>
       </div>
      );
    }
  }

  export default PersonalDetails; 