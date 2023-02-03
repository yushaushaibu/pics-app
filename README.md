`Pics App`
Makes an API request to the Unsplashed server and receives a collection of images based on the search term entered into the application's search box.

1. How to get user inputs
2. Making http (network) requests
3. How to show lists of records

`1. How to get user inputs`

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

The main difference between `controlled` and `uncontrolled elements` is that information in controlled elements is stored in the react's component (state) rather than the HTML DOM (value).

`Passing information from child to parent component`
The props system only allows information to be passed from parent to child.
To initiate an API request, the `SearchBar component` passed up the user's search term to the `App component`.

`2. Making Network (HTTP) Request`

- axios
- async await

`3. How to show lists of records`
Rendering list. To show fetched data on webpage.
- map() is used to build list of components
- key props implementation.

`4. Ref System`
