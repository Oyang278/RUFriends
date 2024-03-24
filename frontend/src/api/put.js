export const apiPutter = (data_object)=>{
    return fetch("http://localhost:5030/putInfo", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_object),
    }).then((response)=>{
        return response.json();
    })
};
