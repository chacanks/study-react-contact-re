import React from 'react'

class ContactDetail extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        const detail = (
            <div>                
                <div>{this.props.contact.name}</div>
                <div>{this.props.contact.phone}</div>
            </div>
        );

        const blank = (
            <div>Not selected.</div>
        );

        return (
            <div>
                <h3>ContactDetail</h3>
                <div>{(this.props.selectedKey > -1 ? detail : blank)}</div>
            </div>
        );
    }
}

ContactDetail.defaultProps = {
    contact : {
        name : ''
        , phone : ''
    }
}

export default ContactDetail;