import React, {Component} from 'react';
import FlashcardList from './FlashcardList'
import AuthenticationService from '../../api/flashcards/AuthenticationService'
import FlashcardDataService from '../../api/flashcards/FlashcardDataService'

import '../../Floatingcard.css'

class FlashcardApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Flashcards: [],
            message: '',
            category: '',
            selectdListOfCategories: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
                        Flashcards: response.data,
                        selectdListOfCategories: response.data
                    })
                }
            )
    }

    handleSubmit(e) {
        console.log(e.target.value)
        const selectedValue = e.target.value;
        let userSelectedListOfCategories = []

        if (selectedValue !== 'All') {
            console.log("doesn't === All")
            this.state.Flashcards.forEach((f) => {
                if(f.category === selectedValue) {
                    userSelectedListOfCategories.push(f)
                }
            })
            this.setState({
                selectedListOfCategories: userSelectedListOfCategories
            })
        } else {
            this.refreshFlashcards()
        }
        e.preventDefault()
    }



    render() {
        console.log(this.state.Flashcards)
        return (
            <div className="form-group">
                <div className="header" onSubmit={this.handleSubmit}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select id="category" name="category" onChange={this.handleSubmit}>
                                <option value="All">All</option>
                                {
                                    this.state.Flashcards.map(f => {
                                        console.log("select element>>> option=" + f.category)
                                        return <option value={f.category} key={f.category}>{f.category}</option>
                                    })
                                }
                            </select>
                        </div>
                        <FlashcardList flashcards={this.state.selectedListOfCategories}  />
                    </form>
                </div>
            </div>
        )
    }
}

export default FlashcardApp