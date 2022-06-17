import Header from '@template/Header';
import Home from '@pages/Home';
import Character from '@pages/Character';
import Error404 from '@pages/NotFound';
import { getHash, resolveRoutes } from '@utils/Utils';

const routes = {
    '/':Home,
    '/:id':Character
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ?  routes[route] : Error404;

    content.innerHTML = await render();
}

export default router;