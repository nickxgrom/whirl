import classes from "./style.module.css"

function WhIcon({path, className = ""}) {
    return (
        <svg viewBox="0 0 24 24" className={`${classes.whIcon} ${className}`}>
            <path d={path}></path>
        </svg>
    )
}

export default WhIcon