import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: []}

     onSearchSubmit = async (term) => {
       const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID nqPngNnMl5WU3p1lOxKdQxWIJvmCo4A6YcSQP61F4vY'
            }
        })
        // console.log(response.data.results)
        this.setState({ images: response.data.results });
    }

    render() {
        return(
            <div className="ui container" style={{marginTop: "50px"}}>
                <SearchBar onSubmitt={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        ) 
    }
}

export default App;