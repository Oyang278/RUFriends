export const apiDeleter = (data_object)=>{
    return fetch("http://localhost:5030/deleteInfo", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_object),
    }).then((response)=>{
        return response.json();
    })  
};
