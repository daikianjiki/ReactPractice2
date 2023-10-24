import { createContext } from "react"
import TreeList from "./TreeList"

export const TreeContext = createContext()

const trees = [
    {id: "1", type: "Maple"},
    {id: "2", type: "Oak"},
    {id: "3", type: "Family"},
    {id: "4", type: "Component"},
]

const Tree = () => {
    return (
        <TreeContext.Provider value={{ trees }}>
            <TreeList />
        </TreeContext.Provider>
    )
}

export default Tree