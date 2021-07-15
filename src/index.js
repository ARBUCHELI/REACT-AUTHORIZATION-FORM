import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {

    const login = (

      <form action='#'
      	onSubmit = {this.authorize} >
      	<input
      		type="Password"
      		placeholder='Password' />
      	<input type='Submit' />

      </form>

    );

    const contactInfo = (
    	<ul style={{color: "white"}}>
          <li>
            radio_seattle@hotmail.com
          </li>
          <li>
            +79601847870
          </li>
        </ul>
    )

    return (
      <div id="authorization">
        <h1 style={{color: "white", fontSize: "3em"}}>{ this.state.authorized ? 'ANDRES R. BUCHELI' : 'Enter the Password' }</h1>
				{this.state.authorized ? contactInfo : login}
        <h2 style={{color: "#03396c", fontSize: "1em"}}>THE PASSWORD IS: <span style={{opacity: "0.1"}}>swordfish</span></h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />,
  document.getElementById('app')
);