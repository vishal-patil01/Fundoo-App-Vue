import axios from 'axios';

export default {
    post(login,formData) {
        return axios({
            method: 'post',
            url: `${process.env.VUE_APP_URL}/${login}`,
            data: formData,
        })
    },
}