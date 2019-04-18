import axios from "axios";

export function setTokenHeader(token){
    if(token){
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }else{
        delete axios.defaults.headers.common["Authorization"];
    }
}

export function setImgurClientID(clientid){
    axios.defaults.headers.common["Authorization"] = `Client-ID ${clientid}`;
}

/**
 * A wrapper around axios API call that formats errors, etc
 * @param {string} method the HTTP verb you want to use
 * @param {string} path the route path / endpoint 
 * @param {object} data (optional) data in JSON form for POSt requests
 */
export function apiCall(method, path, data){
    return new Promise((resolve, reject) =>{
        return axios[method.toLowerCase()](path, data)
        .then(res =>{
            return resolve(res.data)
        })
        .catch(err =>{
            return reject(err.response.data.error);
        })
    });
}


export function saveImgToImgur(data){
        return new Promise((resolve, reject) => {
            setImgurClientID(process.env.REACT_APP_IMGUR_ID);
            return apiCall("post", "https://api.imgur.com/3/image", data)
            .then(res =>{
                return resolve(res.data.link); 
            })
            .catch(err => {
                return reject(err.data.error);
            })

        })

}