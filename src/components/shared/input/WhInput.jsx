import PropTypes from "prop-types"
import classes from "./style.module.css"

function WhInput({type = "text", appendText, value, onChange, copy, close, onClose, className}) {
    function handleCopyClick() {
        navigator.clipboard.writeText(value)
    }

    let copyElement

    if (copy) {
        copyElement = <div
            className={classes.copyIcon}
            onClick={handleCopyClick}
        >
            <img
                src="../../../../public/content-copy.svg"
                width="18px"
                height="18px"
            />
        </div>
    }

    return (
        <div className={`${classes.WhInput} ${className || ''}`}>
            { close &&
                <div
                    onClick={onClose}
                    className={classes.close}
                >
                    <img
                        src="../../../../public/close-circle-outline.svg"
                        width="20"
                        height="20"
                    />
                </div>
            }
            <input
                type={type}
                value={value}
                onChange={onChange}
            />
            <div className={classes.appendText}>
                <div
                    className={copy ? classes.text : ''}
                >
                    { appendText }
                </div>

                { copyElement }
            </div>
        </div>
    )
}

WhInput.propTypes = {
    type: PropTypes.string,
    appendText: PropTypes.string
}

export default WhInput