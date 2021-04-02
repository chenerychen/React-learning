import React, {Component} from "react"






  
/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '', 
            lastName: '', 
            age: '', 
            destination: '', 
            gender: '', 
            dietRestrictions: {
              isVegan: false, 
              isKosher: false
            }
        }
    this.handleChange = this.handleChange.bind(this)
    }
    
    // handleChange(event) {
    //     const {name, value, type, checked} = event.target
    //     type === "checkbox" ? this.setState({[name] : checked}) : this.setState({
    //         [name]: value})
    // }

    handleChange(event) {
      const {name, value, type, checked} = event.target
      type === 'checkbox' ? 
      this.setState(prevState => { 
        return {
          dietRestrictions : {
            ...prevState.dietRestrictions, 
            [name] : checked} }
        })
       
      : this.setState({[name] : value })
     
  }
    
    render() {
        return (
            <main>
                <form>
                    <input
                        type='text'
                        name='firstName'
                        onChange={this.handleChange} 
                        placeholder="First Name"
                        value={this.state.firstName}
                         />
                    <br />
                    
                    <input 
                        type='text'
                        name='lastName'
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name" />
                    <br />
                    
                    <input 
                        text='number'
                        name='age'
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age" /><br />
                    
                    {/* Create radio buttons for gender here */}
                    <label> 
                    <input 
                        type='radio'
                        name='gender'
                        value='male'
                        checked={this.state.gender === 'male'}
                        onChange={this.handleChange}
                    /> Male
                    </label>
                     
                      <br />
                    
                    <label> 
                    <input 
                        type='radio'
                        name='gender'
                        value='female'
                        checked={this.state.gender === 'female'}
                        onChange={this.handleChange}
                    /> Female
                    </label> 
                    
                    <br />
                    
                    {/* Create select box for location here */}
                    <br />
                    <label
                        
                    > Choose your localtion?
                    <select
                        value={this.state.destination}
                        onChange={this.handleChange}
                        name="destination"> 
                        <option > --- Options --- </option> 
                        <option value="bangkok">Bangkok - Thailand</option> 
                        <option value="tokyo"> Tokyo - Japan </option> 
                        <option value="london"> Londin - United Kingdom </option> 
                        <option value="singapore"> Singapore</option> 
                        <option value="ls"> Los Angeles - United States of America</option> 
                    </select> 
                    
                    </label> 
                    
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <label>  Dietary restrictions 
                    <input  
                        type='checkbox'
                        name='isVegan'
                        checked={this.state.dietRestrictions.isVegan}
                        onChange={this.handleChange}
                    /> Vegan? 
                    </label> 
                    <br />
                    <label>  Dietary restrictions 
                    <input  
                        type='checkbox'
                        name='isKosher'
                        checked={this.state.dietRestrictions.isKosher}
                        onChange={this.handleChange}
                    /> Kosher? 
                    </label> 
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName/* First and last name here */} {this.state.lastName}</p>
                <p>Your age: {this.state.age/* Age here */}</p>
                <p>Your gender: {this.state.gender/* Gender here */}</p>
                <p>Your destination: {this.state.destination/* Destination here */}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.dietRestrictions/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default App
