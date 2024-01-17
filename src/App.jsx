import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Background from './components/Background';

function App() {
    return (
        <div>
            <Background /> 
            <NavTabs />                 
            <main className= "bg-purple-400 mx-3">
                <Outlet />
            </main>
        </div>
    )
}

export default App
