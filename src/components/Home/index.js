// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login'

class Home extends Component {
  state = {text: 'Login', suggestion: 'Please Login'}
  loginCicked = () => {
    if (text === 'Login') {
      getLogout(text, suggestion)
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading"> {suggestion} </h1>
          <button type="button" className="button" onClick={this.loginCicked}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
