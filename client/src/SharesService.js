const baseURL = 'http://localhost:5000/api/shares/'

//Create,Read all,ReadById,UpdateById,DeleteById  functionality

//get all shares
export const getShares = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

//get share by id
export const getShare = (id) => {
  return fetch(baseURL + id).then((res) => res.json());
};

//create new share
export const postShare = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
//delete share by id
export const deleteShare = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

//update share by id
export const updateShare = (id, payload) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
}

