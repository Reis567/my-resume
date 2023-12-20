import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Inicio from './pages/InicioPage';
import Contatos from './pages/ContatosPage';
import Sobre from './pages/SobrePage';
import Projetos from './pages/ProjetosPage';



const AppRoute = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/projetos" element={<Projetos/>}/>
                <Route path="/contatos" element={<Contatos/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoute;