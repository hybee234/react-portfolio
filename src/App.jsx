import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Background from './components/Background';

function App() {
    return (
        <div>
            <Background /> 
            <NavTabs />                 
            <main className= "p-5 m-3 text-center">
                <Outlet />
            </main>
        </div>
    )
}

export default App
