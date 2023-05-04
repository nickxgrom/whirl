import WhInput from "./shared/input/WhInput.jsx";
import {useState} from "react";

function CompareColors({}) {
    const [colors, setColors] = useState({
        color0: { id: 0, type: "hex", value: "" },
        color1: { id: 1, type: "rgb", value: "" },
    })

    const [counter, setCounter] = useState(2)

    function addColor() {
        const newColors = {
            ...colors,
            [`color${counter}`]: {
                id: counter,
                type: "hex",
                value: ""
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
            type: "???",
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
                value
            }
        }
        setColors(newColors)
    }

    function handleClose(id) {
        let newColors = {}
        for (let key in colors) {
            if (colors[key].id !== id) {
                newColors = {
                    ...newColors,
                    [key]: colors[key]
                }
            }
        }

        setColors(newColors)
    }

    const inputs = Object.keys(colors).map(key =>
        <WhInput
            key={colors[key].id}
            appendText={colors[key].type}
            value={colors[key].value}
            onChange={(e) => (handleInput(e, colors[key].id))}
            copy
            close={Object.keys(colors).length > 2}
            onClose={ () => handleClose(colors[key].id) }
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