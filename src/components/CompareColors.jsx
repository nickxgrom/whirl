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
                color: ""
            }
        }
        setCounter(counter + 1)
        setColors(newColors)
    }

    function computeColorType(value) {
        const hexRegex = /^#?(\w{3}){1,2}$/
        const rgbRegex = /^#?(\d{1,3},\s?){2}\d{1,3}$/
        if (hexRegex.test(value)) {
            return {
                type: "hex",
                value: value.includes("#") ? value : `#${value}`
            }
        } else if (rgbRegex.test(value)) {
            return {
                type: "rgb",
                value: value.includes("#") ? value.split("#")[1] : value
            }
        } else return {
            type: "unkwn",
            value: value.includes("#") ? value.split("#")[1] : value
        }
    }

    function handleInput(e, id) {
        const { type, value } = computeColorType(e.target.value) || {}
        const newColors = {
            ...colors,
            [`color${id}`]: {
                id: id,
                type: type,
                color: value
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
            <div className="section-title flex justify-between items-center">
                Compare colors
                <div
                    className="action-icon"
                    onClick={addColor}
                >
                    <img src="../../public/plus.svg" width="25"/>
                </div>
            </div>
            <div className="flex gap-2">
                {inputs}
            </div>
        </div>
    )
}

export default CompareColors