import { useTrees } from "./TreeCustomHook"

const TreeListCustomHook = () => {
    const trees = useTrees()
    return (
        <>
            <h1>Trees I've heard of (from CustomHook): </h1>
            <ul>
                {trees.map((tree) => (
                    <li key={tree.id}>{tree.type}</li>
                ))}
            </ul>
        </>
    )
}

export default TreeListCustomHook