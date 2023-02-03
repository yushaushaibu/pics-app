`Pics App`
Makes an API request to the Unsplashed server and receives a collection of images based on the search term entered into the application's search box.

1. How to get user inputs
2. Making http (network) requests
3. How to show lists of records

`How to get user inputs`
`Event handlers` determines response to user inputs and actions like clicking, typing, keypress etc. 
- `onClick()` when user clicks on something, a callback function passed to it will be triggered.
- `onChange()` triggers a cb function anytime user input data into the text field.
- `onSubmit()` a callback function passed to it is invoked when form is submitted.

Event handlers can be passed as props along with a callback function on a component or element.

`Controlled and Uncontrolled elements`
- `controlled form element` is the method of updating the text field's state using setState() instead of direct user input.
`how to set controlled element in input type`
1. state = { term: "" }
2. <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value})}>