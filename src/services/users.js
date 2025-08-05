
const BASE_API = 'https://api.github.com';

async function fetchWrapper(url,options){

    try {

        const response = await fetch(url,options);
    
        if(!response.ok){
            return {
                data: null,
                isError: true,
                status: response.status,
                statusText: response.statusText
            }
        }
    
        const data = await response.json();
    
        return {
            data,
            isError: false
        }

    }catch(err){

        return {
            data: null,
            isError: true,
            error: err.message
        };

    }

}

export async function getUser(username){

    return fetchWrapper(`${BASE_API}/users/${username}`);

}

export async function getRepos(username){

    return fetchWrapper(`${BASE_API}/users/${username}/repos`);

}