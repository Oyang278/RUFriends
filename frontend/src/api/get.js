export const apiGetter = (path) => {
    return fetch(`http://localhost:5030/getInfo${path}`)
        .then((response) => {
            return response.json();
        });
};