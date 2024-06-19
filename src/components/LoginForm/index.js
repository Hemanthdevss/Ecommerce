import "./index.css"
import {Component} from "react"

class LoginForm extends Component {
    state = {
        username : "",
        password : ""
    }

    onEnterUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    onEnterPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    renderToHomePage = () => {
        const {history} = this.props;
        history.push("/")
    }

    onSubmitFunction = async (event) => {
        event.preventDefault();
        const {username, password} = this.state;
        const userDetails = {username, password};
        const url = "https://apis.ccbp.in/login";
        const options = {
            method:"POST",
            body:JSON.stringify(userDetails)
        }
        const response = await fetch(url, options);
        

        if (response.ok === true) {
            this.renderToHomePage()
        }

        
    }

    

    render() {
        
        return (
            <form onSubmit={this.onSubmitFunction}>
                <div className="container">
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt = "hello"/>
                    <div className="login-form">
                        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"  alt = "bye"/> 

                        <div className="input-group">
                            <label for="username">Username</label>
                            <input id="username" type="text" placeholder="Enter your username" className="input-field" onChange={this.onEnterUsername}/>
                        </div>

                        <div className="input-group">
                            <label for="password">Password</label>
                            <input id="password" type="password" placeholder="Enter your password" className="input-field" onChange={this.onEnterPassword}/>
                        </div>

                        <button type = "submit" className="buttonStyle"> Login </button>
                    </div>
                    
                </div>
        </form>
            
        )
    }
}

export default LoginForm;