import React from 'react';

class ContactInfo extends React.Component{
    render(){
        return(<div onClick={this.props.onClick}>{this.props.key} {this.props.contact.name}</div>)
    }
}

export default ContactInfo;