import WInput from "./shared/input/WInput.jsx";
import {useState} from "react";

function PxToRem() {
    const [value, setValue] = useState('')

    function handleChange(e) {
        setValue(e.target.value)
    }

    return (
        <div className="section-card">
            <div className="section-title">Px to rem</div>
            <WInput
                value={value}
                onChange={handleChange}
                type="number"
            />
        </div>
    )
}

export default PxToRem