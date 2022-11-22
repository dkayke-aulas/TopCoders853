import { Contatos } from "./src/scripts/pages/contatos.page.js";
import { CriarConta } from "./src/scripts/pages/criar-conta.page.js";
import { Login } from "./src/scripts/pages/login.page.js"

function redirectPages() {
    const root = document.getElementById('root')

    const Router = {
        '#login': { component: Login, path: '#login' },
        '#criar-conta': { component: CriarConta, path: '#criar-conta' },
        '#contatos': { component: Contatos, path: '#contatos' },
        '#404': { component: Login, path: '#404' }
    }

    let route;

    if(window.location.hash === "") {
        route = Router["#login"]
    }
    else {
        route = Router[window.location.hash] || Router['#404']
    }

    root.innerHTML = null
    root.append(route.component())
    window.history.pushState(null, null, route.path)
}




window.addEventListener('load', () => {
    redirectPages()
    window.addEventListener('hashchange', redirectPages)
})
