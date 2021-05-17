import axios from 'axios'
import { API_URL } from '../../APIRouterConstants'


//let backend_url = 'http://54.158.33.232:3001';

class HelloWorldService {
    executeHelloWorldService() {

        return axios.get(`${API_URL}/hello-world`)
    }

    executeHelloWorldBeanService() {
        return axios.get(`${API_URL}/hello-world-bean`)
    }

    executeHelloWorldPathVariableService(name) {
        return axios.get(`${API_URL}/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService()