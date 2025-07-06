import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/log'
import Landing from './pages/landing'
import FreeTest from './pages/freeTest'

function AppRoutes() {

    return (

        <HashRouter basename='/'>
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/'} element={<Landing />} />
                <Route exact path='/free' element={<FreeTest />}/>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes