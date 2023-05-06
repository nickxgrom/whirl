import PropTypes from "prop-types"
import classes from "./style.module.css"
import {mdiCloseCircleOutline, mdiContentCopy} from "@mdi/js";
import WhIcon from "../icon/WhIcon.jsx";

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
            <WhIcon path={mdiContentCopy} />
        </div>
    }

    return (
        <div className={`${classes.WhInput} ${className || ''}`}>
            { close &&
                <div
                    onClick={onClose}
                    className={classes.close}
                >
                    <WhIcon path={mdiCloseCircleOutline}></WhIcon>
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