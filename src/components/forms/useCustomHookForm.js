import { useState } from "react"

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    return [
        {
            value,
            onChange: e => setValue(e.target.value)
        },
        () => setValue(initialValue)
    ]
}

export default function UseCustomHookForm() {

    const [titleProps, resetTitle] = useInput("")
    const [colorProps, resetColor] = useInput("#000000")

    const submit = (e) => {
        e.preventDefault()
        alert(`${titleProps.value}, ${colorProps.value}`)
        resetTitle()
        resetColor()
    }

    return (
        <>
            <p>Using an controlled component by using custom hook</p>
            <form onSubmit={submit}>
                <input
                    {...titleProps}
                    type="text"
                    placeholder="color title..."
                />
                <input
                    {...colorProps}
                    type="color" />
                <button>Add</button>
            </form>

            <p>Form Resources:</p>
            <ul>
                <li><a href="https://formik.org/">Formik</a></li>
                <li><a href="https://react-hook-form.com/">React Hook Form</a></li>
            </ul>
        </>
    )
}