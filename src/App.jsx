import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';


function App() {
    return (
        <div>
            <Nav />      
            <main className="mx-3">
                <Outlet />
            </main>
        </div>
    )
}

export default App
