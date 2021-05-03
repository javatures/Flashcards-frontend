import axios from 'axios'

let backend_url = 'http://localhost:3001';

class HelloWorldService {
    executeHelloWorldService() {

        return axios.get(backend_url+'/flashcards/hello-world')
    }

    executeHelloWorldBeanService() {
        return axios.get(backend_url+'/flashcards/hello-world-bean')
    }

    executeHelloWorldPathVariableService(name) {
        return axios.get(backend_url+`/flashcards/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService()