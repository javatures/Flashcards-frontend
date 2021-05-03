import React, {Component, useState, useEffect} from 'react';
import FlashcardList from './FlashcardList'
import AuthenticationService from '../../api/flashcards/AuthenticationService'
import FlashcardDataService from '../../api/flashcards/FlashcardDataService'

import '../../Floatingcard.css'

class FlashcardApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Flashcards: [],
            message: null
        }
    }


    componentDidMount() {
        console.log('FlashcardApp.componentDidMount')
        this.refreshFlashcards()
        console.log(this.state)
    }

    refreshFlashcards() {
        let username = AuthenticationService.getLoggedInUser()
        FlashcardDataService.retrieveAllFlashcards(username)
            .then(
                response => {
                    console.log(`FlashcardApp.refreshFlashcards response=${response.data}`)
                    this.setState({
                        Flashcards: response.data
                    })
                }
            )
    }



    render() {
        console.log(this.state.Flashcards)
        return (
            <div className="container">
                <FlashcardList flashcards={this.state.Flashcards} />
            </div>
        )
    }
}

export default FlashcardApp