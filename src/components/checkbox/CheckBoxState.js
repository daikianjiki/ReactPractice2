import { useState } from "react"

const CheckBoxState = () => {
    const [checked, setChecked] = useState(false)
    return (
        <>
        <input
            type="checkbox"
            value={checked}
            onChange={() =>
                setChecked(() => !checked)} 
        />
        {checked ? "checked" : "not checked"}
        </>
    )
}

export default CheckBoxState