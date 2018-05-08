export default {
    getAllPosts() {

        return fetch('http://0.0.0.0:8000/api/posts/')
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                return jsonResponse;
            })
            .catch(error => {
                console.log('-----error-------');
                console.log(error);
            });
    }
}
