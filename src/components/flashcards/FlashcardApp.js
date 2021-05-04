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
            selectedCategoriesList: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
                Flashcards: userSelectedListOfCategories
            })
        } else {
            this.refreshFlashcards()
        }
        e.preventDefault()
    }

    handleSubmit(e) {
        console.log(e.target.value)
        const selectedValue = e.target.value;
        let userSelectedCategoriesList = []

        if (selectedValue !== 'All') {
            console.log("doesn't === All")
            this.state.Flashcards.forEach((f) => {
                if(f.category === selectedValue) {
                    userSelectedCategoriesList.push(f)
                }
            })
            this.setState({
                selectedCategoriesList: userSelectedCategoriesList
            })
        } else {
            this.refreshFlashcards()
        }
        e.preventDefault()
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
                        selectedCategoriesList: response.data
                    })
                }
            )
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
                        <FlashcardList flashcards={this.state.selectedCategoriesList}  />
                    </form>
                </div>
            </div>
        )
    }
}

export default FlashcardApp