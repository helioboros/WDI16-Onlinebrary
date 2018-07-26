import React, {Component} from 'react'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import SignUpLogin from './components/SignUpLogin'
import axios from 'axios'
import {saveAuthTokens, setAxiosDefaults, userIsLoggedIn} from "./util/SessionHeaderUtil"

class App extends Component {

    state = {
        signedIn: false
    }

    signUp = async (email, password, password_confirmation) => {
        try {
            const payload = {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
            const response = await axios.post('/auth', payload)
            saveAuthTokens(response.headers)
    
            this.setState({
                signedIn: true,
            })
    
        } catch (error) {
            console.log(error)
        }
    }
    
    signIn = async (email, password) => {
        try {
            const payload = {
                email,
                password
            }
            const response = await axios.post('/auth/sign_in', payload)
            saveAuthTokens(response.headers)
            
    
            const posts = await this.getPosts()
    
            this.setState({
                signedIn: true,
                posts
            })
    
        } catch (error) {
            console.log(error)
        }
    }

    async componentWillMount() {
        try {
            const signedIn = userIsLoggedIn()
    
            let posts = []
            if (signedIn) {
                setAxiosDefaults()
                posts = await this.getPosts()
            }
    
            this.setState({
                posts,
                signedIn,
            })
        } catch(error) {
            console.log(error)
        }
    }

    render() {

        const SignUpLoginComponent = () => (
            <SignUpLogin
                signUp={this.signUp}
                signIn={this.signIn}/>
        )

        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/signUp" render={SignUpLoginComponent}/>
                    </Switch>

                    {this.state.signedIn ? null : <Redirect to="/signUp"/>}
                </div>
            </Router>
        )
    }
}

export default App