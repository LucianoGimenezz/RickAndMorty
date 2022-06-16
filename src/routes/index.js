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
}

export default router;