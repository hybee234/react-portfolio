import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';


function App() {
    return (
        <div>
            <Nav />      
            <main className= "bg-purple-400 mx-3">
                <Outlet />
            </main>
        </div>
    )
}

export default App
