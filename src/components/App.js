import React from 'react';
import Contact from './Contact.js';


class App extends React.Component{
    render(){
        return(
            <div>
                <div>This is '<strong>Contact APP</strong>'</div>
                <hr />
                <Contact/>           
            </div>
        )
    }
}

export default App;
