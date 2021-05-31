import React, { Component } from "react"
import FlashcardDataService from '../../api/flashcards/FlashcardDataService'
import AuthenticationService from '../../api/flashcards/AuthenticationService'
import {Grid, Paper} from '@material-ui/core'


class ListFlashcardComponent extends Component {
    constructor(props) {
        super(props)
        console.log("ListFlashcardComponent.constructor")
        this.state = {
            Flashcards: [],
            message: null
        }
        this.deleteFlashcardClicked = this.deleteFlashcardClicked.bind(this)
        this.refreshFlashcards = this.refreshFlashcards.bind(this)
        this.updateFlashcardClicked = this.updateFlashcardClicked.bind(this)
        this.addFlashcardClicked = this.addFlashcardClicked.bind(this)
    }

    componentDidMount() {
        console.log('ListFlashcardComponent.componentDidMount')
        this.refreshFlashcards()
        console.log(this.state)
    }

    refreshFlashcards() {
        let username = AuthenticationService.getLoggedInUser()
        FlashcardDataService.retrieveAllFlashcards(username)
            .then(
                response => {
                    console.log(`ListFlashcardComponent.refreshFlashcards response=${response.data}`)
                    this.setState({
                        Flashcards: response.data
                    })
                }
            )
    }

    deleteFlashcardClicked(id) {
        let username = AuthenticationService.getLoggedInUser()
        console.log(`ListFlashcardComponent.deleteFlashcardClicked username=${username}`)
        FlashcardDataService.deleteFlashcard(username, id)
            .then(
                response => {
                    this.setState({message : `Delete of Flashcard ${id} Successful`})
                    this.refreshFlashcards()
                }
            )
    }

    updateFlashcardClicked(id) {
        console.log('update flashcard clicked...flashcard id: ' + id)
        this.props.history.push(`/flashcards/${id}`)
    }

    addFlashcardClicked() {
        console.log("ListFlashcardComponent.addFlashcardClicked")
        this.props.history.push(`/flashcards/-1`)
    }

    render() {
        const paperStyle={padding: 50, height:'100%', width:980, margin:'20px auto'}
        
        return (
        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <h2>Flashcard List</h2>
            </Grid>
        
            <div>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addFlashcardClicked}>Add</button>  
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>category</th>
                                <th>question</th>
                                <th>answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                this.state.Flashcards.map(
                                    f => 
                                    <tr key={f.fid}>
                                        <td>{f.category}</td>
                                        <td><p className="pre_wrap">{f.question}</p></td>
                                        <td><p className="pre_wrap">{f.answer}</p></td>
                                        <td>
                                       
                                            <button className="btn btn-success"
                                            onClick={() => this.updateFlashcardClicked(f.fid)}
                                            >
                                                Update
                                            </button>
        
                                        </td>
                                        <td>
                                            <button className="btn btn-warning"
                                                onClick={() => this.deleteFlashcardClicked(f.fid)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>     
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Paper>
        </Grid>  )
    }
}

export default ListFlashcardComponent
