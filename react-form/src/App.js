import React from 'react'



class App extends React.Component {

  constructor () {
    super() 
    this.state={
      firstName: "", 
      lastName:"", 
      legalAge: false, 
      favColor: '' 
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
      const {name, value, type, checked} = event.target
      type === 'checkbox' ? this.setState({[name]: checked }) : this.setState({[name] : value })
  }

  render () {
    return (
      <form>
          <input 
            type='text'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          /> 

          <br/> 

          <input 
            type='text'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          /> 

          <br/> 

          <textarea 
            value="Leave your feedback here."
            onChange={this.handleChange}
          />


          <br/> 

         <label>
          <input 
            type='checkbox'
            name="legalAge"
            checked={this.state.legalAge}
            onChange={this.handleChange}
            />Is legal to drink?
          </label>

      <label>
        <input
            type="radio"
            name='gender'
            value='male' 
            onChange={this.handleChange}
            checked={this.state.gender ==='male'}
        />   Male
      </label> 

      <label>
        <input
            type="radio"
            name='gender'
            value='female' 
            onChange={this.handleChange} 
            checked={this.state.gender === 'female'}
        />   Female
      </label> 

      <select
        value={this.state.favColor} 
        onChange={this.handleChange}
        name="favColor"
      > 
      <option value="red"> Red</option>
      <option value='black'> Black </option> 

      </select>


       <h1> {this.state.firstName} {this.state.lastName} </h1> 


      </form>

    )
  }

}



export default App 