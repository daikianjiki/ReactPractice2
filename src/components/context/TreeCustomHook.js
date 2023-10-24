import { createContext, useContext } from "react"
import TreeListCustomHook from "./TreeListCustomHook"

const TreeContextFromCustomHook = createContext()

export const useTrees = () => useContext(TreeContextFromCustomHook)

const treesFromCustomHook = [
    {id: "1", type: "Maple"},
    {id: "2", type: "Oak"},
    {id: "3", type: "Family"},
    {id: "4", type: "Component"},
]

const TreeCustomHook = () => {
    return (
        <TreeContextFromCustomHook.Provider value={ treesFromCustomHook }>
            <TreeListCustomHook />
        </TreeContextFromCustomHook.Provider>
    )
}

export default TreeCustomHook