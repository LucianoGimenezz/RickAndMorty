import router from "./routes";

window.addEventListener('load',router);
window.addEventListener('hashchange',() => {
    console.log('Hash changed');
    router();
});