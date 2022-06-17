const API = 'https://rickandmortyapi.com/api/character';

function getHash () {
    return location
            .hash
            .slice(1)
            .toLocaleLowerCase()
            .split('/')[1] || '/'
} 

function resolveRoutes(route) {
    if(route.length <= 3) {
        let validRoute = route === '/' 
                                ? route
                                : '/:id';
        return validRoute;
    }
    return `/${route}`;
};

async function getAllCharacters() {
    try{
        const response = await fetch(API);
        const data = await response.json();
        return data;
    }catch(error) {
        console.error(new Error(`Fetch error ${error}`));
    }
}


async function getCharacterById(id){
    try {
        const response = await fetch(`${API}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(new Error(`Fetch error ${error}`));
    }
} 

export {
    getCharacterById,
    getAllCharacters,
    getHash,
    resolveRoutes
}