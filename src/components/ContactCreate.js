import React from 'react';

class ContactCreate extends React.Component{

    render(){
        return(
            <div>
                <h3>ContactCreate</h3>
                <div>
                    <input type="text" name="name"  placeholder="name" />
                    <input type="text" name="phone" placeholder="phone" />
                    <p>
                        <input type="button" value="SAVE"/>
                    </p>
                </div>
            </div>
        );
    }

}

export default ContactCreate;