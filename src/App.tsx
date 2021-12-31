import Home from './view/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderContainer from './layout/headers/HeaderContainer';

function App() {
    return (
        <BrowserRouter>
            <HeaderContainer />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
