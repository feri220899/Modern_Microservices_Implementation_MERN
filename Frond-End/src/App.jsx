// App.js
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';

import Layout from './Layouts/Layout';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    {/* Rute untuk menampilkan Layout dan rute lainnya */}
                    <Route path="/app/*" element={<Layout />} />
                    <Route path="*" element={<Navigate to={"/app/home"} replace />}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
