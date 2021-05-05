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
            selectedListOfCategories: [],
            dropDownCategories: {}
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
        let dropDownCategories = {}
        FlashcardDataService.retrieveAllFlashcards(username)
            .then(
                response => {
                    response.data.map(f =>{
                        dropDownCategories[f.category] = f.category
                    })
                    console.log(`FlashcardApp.refreshFlashcards response=${response.data}`)
                    this.setState({
                        Flashcards: response.data,
                        selectedListOfCategories: response.data,
                        dropDownCategories: dropDownCategories
                    })
                }
            )
        
        
    }

    handleSubmit(e) {
        console.log(e.target.value)
        const selectedValue = e.target.value;
        let userSelectedListOfCategories = []
        let dropDownCategories = {}

        if (selectedValue !== 'All') {
            console.log("doesn't === All")
            this.state.Flashcards.forEach((f) => {
                if(f.category === selectedValue) {
                    userSelectedListOfCategories.push(f)
                }
            })
            this.setState({
                selectedListOfCategories: userSelectedListOfCategories,
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
                                    Object.keys(this.state.dropDownCategories).map(f => {
                                        console.log("select element>>> option=" + f)
                                        return <option value={f} key={f}>{f}</option>
                                    })
                                }
                                {console.log(this.state.dropDownCategories)}
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