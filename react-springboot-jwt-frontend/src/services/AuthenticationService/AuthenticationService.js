import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET } from './../../utils/constants';

class AuthenticationService {

    authenticate(username, password) {
        const dataForm = new FormData();
        dataForm.append('username', username);
        dataForm.append('password', password);
        dataForm.append('grant_type', 'password');
        const options = {
            method: 'POST',
            url: 'http://localhost:8080/oauth/token',
            headers: {
                'Authorization': this.createBasicAuthToken(CLIENT_ID, CLIENT_SECRET),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: dataForm
        };
        return axios(options);

    }

    registerSuccessfulLoginForJwt(isLoggedIn, token) {
        this.setupAxiosInterceptors(isLoggedIn, this.createJWTToken(token))
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password);
    }

    setupAxiosInterceptors(isLoggedIn, token) {
        axios.interceptors.request.use(
            (config) => {
                console.log('setup interceptor called');
                console.log(config);
                if (isLoggedIn) {
                    config.headers.authorization = token;
                }
                return config;
            }
        )
    }
}

export default AuthenticationService;