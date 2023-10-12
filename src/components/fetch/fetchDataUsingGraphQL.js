import { useEffect, useState } from "react"

const query = `
query	{
    allTrails {
      name
      difficulty
      status
    }
  }
`

const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
}

function Trail({ name, difficulty, status }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{difficulty} {status}</p>
        </div>
    )
}

export default function FetchDataUsingGraphQL() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(
            `https://snowtooth.moonhighway.com/`, opts
        )
            .then(res => res.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [])

    if (loading) return <h1>Loading...</h1>
    if (error) return <pre>{JSON.stringify(error)}</pre>
    if (!data) return null
    console.log(data)
    return (
        <div>
            {data.data.allTrails.map((trail) => (
                <Trail
                    name={trail.name}
                    difficulty={trail.difficulty}
                    status={trail.status} />
            ))}
        </div>
    )
}