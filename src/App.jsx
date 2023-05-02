import styles from "./styles/index.css"
import PxToRem from "./components/PxToRem.jsx"
import Header from "./components/Header.jsx";
import CompareColors from "./components/CompareColors.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <PxToRem />
                <CompareColors />
            </div>
        </div>
    )
}

export default App
