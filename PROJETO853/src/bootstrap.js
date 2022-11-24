import { Contatos } from "./scripts/pages/contatos.page.js";
import { CriarConta } from "./scripts/pages/criar-conta.page.js";
import { CriarContato } from "./scripts/pages/criar-contato.page.js";
import { Login } from "./scripts/pages/login.page.js"

async function redirectPages() {
    const root = document.getElementById('root')

    const Router = {
        '#login': { component: Login, path: '#login', logged: false },
        '#criar-conta': { component: CriarConta, path: '#criar-conta', logged: false },
        '#criar-contato': { component: CriarContato, path: '#criar-contato', logged: true },
        '#contatos': { component: Contatos, path: '#contatos', logged: true },
        '#404': { component: Login, path: '#404', logged: false }
    }

    let route;
    const token = sessionStorage.getItem("@token")

    if(window.location.hash === "") {
        route = Router["#login"]
    }
    else {
        route = Router[window.location.hash] || Router['#404']
        
        // se é rota logada mas ta sem o token, manda pro login
        if(route.logged && !token) {
            route = Router['#login']
        }

        // se é rota não logada (login, criar conta) e tem token, não deixa acessar, manda pra contatos
        if(!route.logged && token) {
            route = Router['#contatos']
        }
    }

     

    root.innerHTML = null
    root.append(await route.component())
    window.history.pushState(null, null, route.path)
}




window.addEventListener('load', () => {
    redirectPages()
    window.addEventListener('hashchange', redirectPages)
})
