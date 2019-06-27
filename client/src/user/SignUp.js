import React from 'react';

class SignUp extends React.Component{

    constructor(props) {
        super( props );
        this.state = {
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: '',
            country: '',
            terms: false
          };
    
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

      handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
        console.log( this.state );
      }


 

    render() {
    return(

        <div>

        <form id="sign-up-form" onSubmit={this.handleSubmit} >
            
            <div><label>
            username:
            <input type="text" name="username" onChange={this.handleChange} />
            </label></div>
            <div><label>
            password:
            <input type="text" name="password" />
            </label></div>
            <div><label>
            email:
            <input type="text" name="email" />
            </label></div>
            <div><label>
            first name:
            <input type="text" name="firstname" />
            </label></div>
            <div><label>
            last name:
            <input type="text" name="lastname" />
            </label></div>
            <div>
                <select name="country" form="sign-up-form">
                    <option disabled defaultValue value>Country...</option>
                    <option value="England">England</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Holland">Holland</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Spain">Spain</option>
                    <option value="United States">United States</option>
                </select>
            </div>

            <div><label>
            <input type="checkbox" name="terms" />
            I agree to the terms & conditions
            </label>
            </div>

            <input type="submit" value="Submit" />

        </form>

        </div>
    );
    
}

}

export default SignUp;