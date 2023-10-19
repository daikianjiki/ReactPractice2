import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({ totalStars = 5 }) => {

    const [selectedStars, setSelectedStars] = useState(0)

    const createArray = (length) => [...Array(length)]
    function Star({ selected = false, onSelect }) {
        return (
        <FaStar 
            color={selected ? "red" : "gray"} 
            size="50"
            onClick={onSelect}/>)
    }

    return (
        <>
        {createArray(totalStars).map((n, i) => (
            <Star 
                key={i} 
                selected={selectedStars > i} 
                onSelect={() => setSelectedStars(i + 1)} />
        ))}
        <p>{selectedStars} of {totalStars}</p>
        </>
    )
}

export default StarRating