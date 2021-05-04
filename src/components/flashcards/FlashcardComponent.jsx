import React, {Component} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import FlashcardDataService from '../../api/flashcards/FlashcardDataService'
import AuthenticationService from '../../api/flashcards/AuthenticationService'
import { Link } from 'react-router-dom'

class FlashcardComponent extends Component {
    constructor(props) {
        super(props)
        console.log("FlashcardComponent param id is: " + this.props.match.params.id)
        this.state = {
            Fid: this.props.match.params.id,
            user_email: AuthenticationService.getLoggedInUser(),
            question: '',
            answer: '',
            category: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        this.decodeString = this.decodeString.bind(this)
    }

    componentDidMount() {
        console.log('FlashcardComponent.componentDidMount')
        if (this.state.Fid === -1) {
            console.log("go here when this.state.Fid = -1")
            return 
        }
        console.log("Should not being doing this when this.state.Fid = -1")
        let username = AuthenticationService.getLoggedInUser()
        FlashcardDataService.retrieveFlashcard(username, this.state.Fid)
            .then(response => this.setState({
                Fid: response.data.fid,
                user_email: response.data.user_email,
                question: response.data.question,
                answer: response.data.answer,
                category: response.data.category
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.category) {
            errors.category = 'Enter a Description'
        }
        else if(values.question.length < 5) {
                errors.question = 'Enter at least 5 Characters in Description'
        }
        if (!values.question) {
            errors.question = 'Enter a Description'
        }
        else if(values.question.length < 5) {
                errors.question = 'Enter at least 5 Characters in Description'
        }
        if (!values.answer) {
                errors.answer = 'Enter an answer'
        }
        else if(values.answer.length < 5) {
                errors.answer = 'Enter at least 5 Characters in Description'
        }
            return errors
    }

    decodeString(str) {
        const textArea = document.createElement('textarea')
        textArea.innerHTML = str;
        return textArea.value
      }

    onSubmit(values) {
        console.log("FlashcardComponent.onSubmit() is called: ")

        let username = AuthenticationService.getLoggedInUser()
        
        const f = {
            Fid: this.props.match.params.id,
            user_email: username,
            question: this.decodeString(values.question),
            answer: this.decodeString(values.answer),
            category: this.decodeString(values.category)
        }

        console.log("FlashcardComponent.onSubmit f.Fid=" + f.Fid)
        console.log("FlashcardComponent.onSubmit f.user_email=" + f.user_email)
        console.log("FlashcardComponent.onSubmit f.question=" + f.question)
        console.log("FlashcardComponent.onSubmit f.answer=" + f.answer)
        console.log("FlashcardComponent.onSubmit f.category=" + f.category)
        
        if (parseInt(f.Fid) === -1) {
            FlashcardDataService.createFlashcard(username, f)
                .then(() => this.props.history.push('/flashcards'))
        } else {
            FlashcardDataService.updateFlashcard(username, this.state.Fid, f)
                .then(() => this.props.history.push('/flashcards'))
        }
        
        console.log("done w/ onSubmit " + values)
    }

    render() {

        let {Fid, user_email, question, answer, category} = this.state

        console.log(`FlashcardComponent render() ----> Fid=${Fid} user_email=${user_email} question=${question} answer=${answer} category=${category}`)

        return (
            <div className="container">
                <h1>Flashcard</h1>
                <div className="container">
                   <Formik 
                        initialValues={{Fid, user_email, category, question, answer}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                   {
                        (props) => (
                            <Form>
                                <ErrorMessage name="question" component="div" className="alert alert-warning" />
                                <ErrorMessage name="answer" component="div" className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Category</label>
                                    <Field className="form-control" name="category" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Question</label>
                                    <Field className="form-control" name="question" />
                                </fieldset>
                                
                                <fieldset className="form-group">
                                    <label>Answer</label>
                                    <Field className="form-control" name="answer" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                                <span style={{width:100}}> </span>
                                <Link className="btn btn-success" to="/">Cancel</Link>
                            </Form>
                        )
                    }
                   </Formik>
                        
                    
                </div>
            </div>
        )
    }
}

export default FlashcardComponent