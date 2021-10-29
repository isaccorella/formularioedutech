import React, { Component } from 'react';

class Email extends Component {
    render() {

        return (
            <form>


                <div classname="row">
                    <div classname="form-group col-md-8">
                        <input type="text" className="form-control
                        form-control-lg" placeholder="
                        ejemplo@gmail.com"/>
                    </div>       
                </div>     
            </form>
        );
    }


}
export default Email;