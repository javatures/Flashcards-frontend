import axios from 'axios'
import { API_URL } from '../../APIRouterConstants'

//let backend_url = 'http://54.158.33.232:3001';


class FlashcardDataService {

    retrieveAllFlashcards(name) {
        console.log("FlashcardDataService.retrieveAllFlashcards username=" + name)

        return axios.get(`${API_URL}/users/${name}/flashcards`);//`/flashcards/users/${name}/flashcards`)
    }


    retrieveFlashcard(username, f_id) {
        console.log(`FlashcardDataService.retrieveFlashcards username=${username}`)
                                                        
        return axios.get(`${API_URL}/users/${username}/flashcards/${f_id}`)//`/flashcards/users/${username}/flashcard/${f_id}`)
    }

    deleteFlashcard(username, f_id) {   
        console.log("FlashcardDataService.deleteFlashcard f_id=" + f_id)

        return axios.delete(`${API_URL}/users/${username}/flashcards/${f_id}`)//`/flashcards/users/${username}/flashcard/${f_id}`)
    }


    updateFlashcard(username, Fid, flashcard) {   

        console.log(`${API_URL}/users/${username}/flashcards/${Fid}`) //`/flashcards/users/${username}/flashcard/${Fid}`) 

        return axios.put(`${API_URL}/users/${username}/flashcards/${Fid}`, flashcard)//`/flashcards/users/${username}/flashcard/${Fid}`, flashcard)
    }

    createFlashcard(user_data, flashcard) {

        console.log("FlashcardDataService.createFlashcard flashcard:" + flashcard)

        return axios.post(`${API_URL}/users/${user_data.user_email}/flashcards/`, flashcard) //`/flashcard/users/${user_data.user_email}/flashcard/`, flashcard)
    }


    registerUser(user_data) {
        console.log("FlashcardDataService.registerUser user:" + user_data.user_email)
        return axios.post(`${API_URL}/users/register/api/user`, user_data)//`/flashcards/users/register/api/user`, user_data)

    }
    
}


export default new FlashcardDataService()