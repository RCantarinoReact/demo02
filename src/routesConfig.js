import Inicial from "./Pages/Home/Inicial";
import User from "./Pages/Usuario/User";

const routesConfig = [
    {
        path:"/",
        component:Inicial,
        exact:true
    },
    {
        path:"/Usuarios",
        component:User,
        exact:true
    }
]

export default routesConfig;