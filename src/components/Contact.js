import React from 'react';
import ContactInfo   from './ContactInfo.js';
import ContactDetail from './ContactDetail.js';
import ContactCreate from './ContactCreate.js';

class Contact extends React.Component{

    constructor(props){
        super(props);

        this.state = {
              selectedKey : -1
            , contactData : [
                {
                    name:'Name1'
                    , phone : '010-0000-1111'
                }, {
                    name:'Name2'
                    , phone : '010-0000-2222'
                }, {
                    name:'Name3'
                    , phone : '010-0000-3333'
                }, {
                    name:'Name4'
                    , phone : '010-0000-4444'
                }, {
                    name:'Name5'
                    , phone : '010-0000-5555'
                }
            ]
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(key){
        this.setState({
            selectedKey : key
        });
        console.log('handleClick@@', key)
    };
    
    render(){

        const mapToComponents = (data) => {
            return data.map(
                (contact, i) => {
                    return(<ContactInfo contact={contact} key={i} onClick={()=>this.handleClick(i)}/>);
                }
            );
        };

        return (
            <div>
                <h3>Contact</h3>
                <div>{mapToComponents(this.state.contactData)}</div>
                <hr />
                <ContactDetail 
                    selectedKey = {this.state.selectedKey}
                    contact={this.state.contactData[this.state.selectedKey]}
                />
                <hr />
                <ContactCreate />
            </div>
        )
    }
}

export default Contact;