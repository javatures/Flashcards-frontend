import axios from 'axios'

let backend_url = 'http://172.31.20.187:3001';

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