import React from 'react';

class ContactCreate extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : ''
            , phone : ''
        };

        this.handleChange = this.handleChange.bind(this);  
        this.handleClick = this.handleClick.bind(this);        
    }

    handleChange(e){
        let s = {};
        s[e.target.name] = e.target.value;
        this.setState(s);
        console.log(e.target.name, '=>', e.target.value);
    };

    handleClick(){

        this.props.onCreate({
            name : this.state.name
            , phone : this.state.phone
        });
        this.setState({
            name : ''
            , phone : ''
        });
    };

    render(){
        return(
            <div>
                <h3>ContactCreate</h3>
                <div>
                    <input type="text" name="name"  placeholder="name"   value={this.state.name}  onChange={this.handleChange}/>
                    <input type="text" name="phone" placeholder="phone"  value={this.state.phone} onChange={this.handleChange}/>
                    <p>
                        <input type="button" value="SAVE" onClick={this.handleClick}/>
                    </p>
                </div>
            </div>
        );
    }

}


ContactCreate.propTypes = {
    onCreate : React.PropTypes.func
};

ContactCreate.defaultProps = {
    onCreate : () => {
        console.error('onCreate Not defined.');
    }
};

export default ContactCreate;