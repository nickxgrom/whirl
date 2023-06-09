import WhInput from "./shared/WhInput.jsx";
import {useState} from "react";
import {mdiSwapHorizontal} from "@mdi/js";
import WhIcon from "./shared/WhIcon.jsx";

function PxToRem() {
    const [pxValue, setPxValue] = useState(0)
    const [remValue, setRemValue] = useState("")
    const [baseValue, setBaseValue] = useState(16)

    function handlePxChange(event) {
        const value = event.target.value

        setPxValue(value)
        if (+value) {
            setRemValue(calcValues(+value, null, +baseValue))
        }
    }

    function handleRemChange(event) {
        const value = event.target.value

        setRemValue(value)
        if (+value) {
            setPxValue(calcValues(null, +value, +baseValue))
        }
    }

    function handleBaseChange(event) {
        const value = event.target.value

        setBaseValue(value)
        if (+value) {
            setRemValue(calcValues(+pxValue, null, +value))
        }
    }

    function calcValues(px, rem, base) {
        if (typeof px === "number") {
            if (base === 0) {
                return 0
            }
            return px / base
        }
        if (typeof rem === "number") {
            return rem * base
        }
    }

    return (
        <div className="section-card">
            <div className="section-title">Px to rem</div>
            <div className="flex justify-between items-center gap-2">
                <WhInput
                    value={pxValue}
                    onChange={handlePxChange}
                    type="number"
                    appendText="px"
                    copy
                />

                <div>
                    <WhIcon className="w-6 h-6" path={mdiSwapHorizontal} />
                </div>

                <WhInput
                    value={remValue}
                    onChange={handleRemChange}
                    type="number"
                    appendText="rem"
                    copy
                />
                <WhInput
                    value={baseValue}
                    onChange={handleBaseChange}
                    type="number"
                    appendText="base"
                />
            </div>
        </div>
    )
}

export default PxToRem