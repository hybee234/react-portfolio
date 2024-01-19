import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Background from './components/Background';
import Footer from './components/Footer';

function App() {

    return (
        <div>
            <Background /> 
            <NavTabs />                 
            <main className= "text-center">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default App
