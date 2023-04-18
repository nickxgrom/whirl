import styles from "./styles/index.css"
import PxToRem from "./components/PxToRem.jsx"
import Header from "./components/Header.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <PxToRem />
            </div>
        </div>
    )
}

export default App
