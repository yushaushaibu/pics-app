`pics-app overview`
1. User input and search term.
2. API request to fetch data based on user term.
3. show fetch data on screen.

`How App Works`
1. Component renders itself one time with no list of images
2. `onSearchSubmit()` method called
3. Request made to `Unsplash`
4. ..wait..
5. Request complete
6. Set image data on state of App component
7. App component rerenders and show images

 
`EVENT HANDLERS`
`onClick`  invokes a callback function passed to it when a user click on a button or an element.
`onChange` invokes a callback function passed to it when a user inputs data in text field.
`onSubmit` invokes a callback function passed to it when a user submits the form.

<input type="text" onChange={onInputChange}/>
`onInputChange` is a callback function passed on to `onChange` event handler.
Whenever the user enter text inside the text field, `onInputChange` function is invoked.
Do not add parenthesis () on the onInputChange function when called in a `form`.

`event.target.value` grabs the text user enters.

`Alternative Event Handler Syntax`
onChange ={e => console.log(e.target.value)}

`How pics-app works`
1. user types in input
2. callback get invoked ~ onChange{e => this.setState({ term: e.target.value})}
3. `setState` is called with new value
