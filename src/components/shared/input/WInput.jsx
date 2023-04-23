import PropTypes from "prop-types"
import classes from "./style.module.css"

console.log(classes)

function WInput({ type = "text", appendText, value, onChange }) {


    return (
        <div className={`w-input ${classes.wInput} ${appendText ? classes.hasPostfix : ''}`}>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={classes.appearanceNone}
            />
            <span className={classes.appendText}>{ appendText }</span>
        </div>
    )
}

WInput.propTypes = {
    type: PropTypes.string,
    appendText: PropTypes.string
}

export default WInput