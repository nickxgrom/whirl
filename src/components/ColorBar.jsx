function ColorBar({ colors }) {
    return (
        <div className="color-bar">
            { colors.map((color, index) => (
                    <div
                        key={`${color}-${index}`}
                        style={{background: color}}
                        className="color-block"
                    />
                ))
            }
        </div>
    )
}

export default ColorBar