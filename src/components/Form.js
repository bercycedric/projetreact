import React from "react"

class Form extends React.Component {
    state = {
        firstName: "",
        email: ""
    }

    handelChange = event => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        //console.log(this.state)
        return (
        <div>
            PouletName: {this.state.firstName}
            <br/>
            email : {this.state.email}
            <p>
                <input name="firstName" type="text" onChange={this.handelChange} />
            </p>
            <p>    
                <input name="email" type="email" onChange={this.handelChange} />
                </p>
        </div>
        )
    }
}

export default Form
