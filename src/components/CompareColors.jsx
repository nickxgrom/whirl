import WInput from "./shared/input/WInput.jsx";
import {useState} from "react";

function CompareColors({}) {
    const [colors, setColors] = useState({})

    const [counter, setCounter] = useState(0)

    function addColor() {
        const newColors = {
            ...colors,
            [`color${counter}`]: {
                id: counter,
                type: "hex",
                color: "#ffffff"
            }
        }
        setCounter(counter + 1)
        setColors(newColors)
    }

    function handleInput(e, id) {
        const newColors = {
            ...colors,
            [`color${id}`]: {
                id: id,
                type: "hex",
                color: e.target.value
            }
        }
        setColors(newColors)
    }

    const inputs = Object.keys(colors).map((color, index) =>
        <WInput
            key={colors[color].id}
            appendText={colors[color].type}
            value={colors[color].color}
            onChange={(e) => (handleInput(e, colors[color].id))}
        />
    )

    return (
        <div className="section-card">
            <div className="section-title">Compare colors</div>
            <div className="flex gap-2">
                {inputs}
            </div>
            <div onClick={addColor}>
                add color
            </div>
        </div>
    )
}

export default CompareColors