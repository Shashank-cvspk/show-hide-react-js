// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onClickFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onClickLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    const first = firstName ? 'show' : 'hide'
    const last = lastName ? 'show' : 'hide'
    return (
      <div className="app-container">
        <div className="container">
          <h1>Show/Hide</h1>
          <div className="buttons">
            <button
              type="button"
              className="button"
              onClick={this.onClickFirstName}
            >
              Show/Hide Firstname
            </button>
            <button
              type="button"
              className="button"
              onClick={this.onClickLastName}
            >
              Show/Hide Lastname
            </button>
          </div>
          <div className="buttons">
            <div className={`name ${first}`}>
              <h1>Joe</h1>
            </div>
            <div className={`name ${last}`}>
              <h1>Jones</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
