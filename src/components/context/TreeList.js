import { useContext } from "react"
import { TreeContext } from "./Tree"

const TreeList = () => {
    const { trees } = useContext(TreeContext)

    return (
        <>
        <h1>Trees I've heard of: </h1>
        <ul>
            {trees.map((tree) => (
                <li key={tree.id}>{tree.type}</li>
            ))}
        </ul>
        </>
    )
}

export default TreeList