import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Background from './components/Background';

function App() {
    return (
        <div>
            <Background /> 
            <NavTabs />                 
            <main className= "bg-filter border-2 p-5 m-3">
                <Outlet />
            </main>
        </div>
    )
}

export default App
