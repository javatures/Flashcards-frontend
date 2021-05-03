import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './LoginComponent'
import ListFlashcardComponent from './ListFlashcardComponent'
import FooterComponent from  './FooterComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import HeaderComponent from './HeaderComponent.jsx'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import LogoutComponent from './LogoutComponent'
import FlashcardComponent from './FlashcardComponent'
import RegistrationComponent from './RegistrationComponent'
import FlashcardApp from './FlashcardApp'



class StudyApp extends Component {
    render() {
        return (
            <div className="StudyApp">
            <Router>
                <>
                    <HeaderComponent></HeaderComponent>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/register" component={RegistrationComponent} />
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                        <AuthenticatedRoute Route path="/flashcards/:id" component={FlashcardComponent} />   
                        <AuthenticatedRoute path="/flashcards" component={ListFlashcardComponent} />
                        <AuthenticatedRoute Route path="/logout" component={LogoutComponent} />
                        <AuthenticatedRoute Route path="/flash" component={FlashcardApp} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent></FooterComponent>
                </>
            </Router>
            </div>
        )
    }
}

export default StudyApp