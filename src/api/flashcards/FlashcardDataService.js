import axios from 'axios'

let backend_url = 'http://54.158.33.232:3001';


class FlashcardDataService {

    retrieveAllFlashcards(name) {
        console.log("FlashcardDataService.retrieveAllFlashcards username=" + name)

        return axios.get(backend_url+`/users/${name}/flashcards`);//`/flashcards/users/${name}/flashcards`)
    }


    retrieveFlashcard(username, f_id) {
        console.log(`FlashcardDataService.retrieveFlashcards username=${username}`)
                                                        
        return axios.get(backend_url+`/users/${username}/flashcard/${f_id}`)//`/flashcards/users/${username}/flashcard/${f_id}`)
    }

    deleteFlashcard(username, f_id) {   
        console.log("FlashcardDataService.deleteFlashcard f_id=" + f_id)

        return axios.delete(backend_url+`/users/${username}/flashcard/${f_id}`)//`/flashcards/users/${username}/flashcard/${f_id}`)
    }


    updateFlashcard(username, Fid, flashcard) {   

        console.log(backend_url+`/users/${username}/flashcard/${Fid}`) //`/flashcards/users/${username}/flashcard/${Fid}`) 

        return axios.put(backend_url+`/users/${username}/flashcard/${Fid}`, flashcard)//`/flashcards/users/${username}/flashcard/${Fid}`, flashcard)
    }

    createFlashcard(user_data, flashcard) {

        console.log("FlashcardDataService.createFlashcard flashcard:" + flashcard)

        return axios.post(backend_url+`/users/${user_data.user_email}/flashcard/`, flashcard) //`/flashcard/users/${user_data.user_email}/flashcard/`, flashcard)
    }


    registerUser(user_data) {
        console.log("FlashcardDataService.registerUser user:" + user_data.user_email)
        return axios.post(backend_url+`/users/register/api/user`, user_data)//`/flashcards/users/register/api/user`, user_data)

    }
    
}


export default new FlashcardDataService()