import httpservice from "./HttpService";

export default {
    userLoginService(loginData) {
        return httpservice.post(`user/login`,loginData)
    }
}