function getHash () {
    return location
            .hash
            .slice(1)
            .toLocaleLowerCase()
            .split('/') || '/'
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

export {
    getHash,
    resolveRoutes
}