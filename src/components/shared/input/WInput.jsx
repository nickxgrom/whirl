import PropTypes from "prop-types"
import classes from "./style.module.css"

function WInput({ type = "text", appendText, value, onChange }) {
    return (
        <div className={classes.wInput}>
            <input
                type={type}
                value={value}
                onChange={onChange}
            />
            <div>{ appendText }</div>
        </div>
    )
}

WInput.propTypes = {
    type: PropTypes.string,
    appendText: PropTypes.string
}

export default WInput