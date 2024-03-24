export const apiPoster = (data_object, path) =>{
    return fetch(`http://localhost:5030/postInfo${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_object),
    }).then((response)=>{
        return response.json();
    })
};