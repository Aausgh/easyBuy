import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
    return (
        <Router>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>

            <Footer />

        </Router>
    )
}

export default App