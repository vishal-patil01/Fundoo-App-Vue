import axios from 'axios';

export default {
    post(url,formData) {
        return axios({
            method: 'post',
            url: `${process.env.VUE_APP_URL}/${url}`,
            data: formData,
            headers: {
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem('token')
            }    
        })
    },
    get(url) {
        return axios({
            method: 'get',
            url: `${process.env.VUE_APP_URL}/${url}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem('token')
            }    
        })
    },
}