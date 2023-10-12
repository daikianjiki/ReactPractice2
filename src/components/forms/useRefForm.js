import { useRef } from "react"

export default function UseRefForm() {
    const txtTitle = useRef()
    const hexColor = useRef()

    const submit = (e) => {
        e.preventDefault()
        const title = txtTitle.current.value
        const color = hexColor.current.value
        alert(`${title}, ${color}`)
        txtTitle.current.value = ""
        hexColor.current.value = ""
    }

    return (
        <>
        <p>Using an uncontrolled component by using useRef</p>
        <form onSubmit={submit}>
            <input
                ref={txtTitle}
                type="text"
                placeholder="color title..."
            />
            <input ref={hexColor} type="color" />
            <button>Add</button>
        </form>
        </>
    )
}