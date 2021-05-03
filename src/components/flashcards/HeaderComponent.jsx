import React, {Component} from 'react'
import { withRouter} from 'react-router'
import { Link } from 'react-router-dom'
import AuthenticationService from '../../api/flashcards/AuthenticationService'


class HeaderComponent extends Component {
    
    
    render() {
        const isUserLogin = AuthenticationService.isUserLoggedIn()
        console.log(`is user login: ${isUserLogin}`)
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://github.com/javatures" className="navbar-brand">Flashcard App</a></div>
                    <ul className="navbar-nav">
                        {isUserLogin && <li><Link className="nav-link" to="/welcome/John">Home</Link></li>} |
                        {isUserLogin && <li><Link className="nav-link" to="/flash">Flashcard Quiz</Link></li>} |
                        {isUserLogin && <li><Link className="nav-link" to="/flashcard">Maintain Your Flashcards</Link></li>} |
                        {!isUserLogin && <li><Link className="nav-link" to="/register">Register</Link></li>} |
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLogin && <li><Link className="nav-link" to="/login">Login</Link></li>} |
                        {isUserLogin && 
                            <li>
                                <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link> |
                            </li>
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)