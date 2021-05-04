import axios from 'axios'

let backend_url = 'http://54.158.33.232:3001';

class HelloWorldService {
    executeHelloWorldService() {

        return axios.get(backend_url+'/hello-world')
    }

    executeHelloWorldBeanService() {
        return axios.get(backend_url+'/hello-world-bean')
    }

    executeHelloWorldPathVariableService(name) {
        return axios.get(backend_url+`/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService()