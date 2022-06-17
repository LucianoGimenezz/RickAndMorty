import router from "./routes";
import './styles/styles.scss';

window.addEventListener('load',router);
window.addEventListener('hashchange',() => {
    console.log('Hash changed');
    router();
});