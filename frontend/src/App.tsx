import React from "react"
import { gql, useQuery } from "@apollo/client"

const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`

function App() {

  const { data, loading } = useQuery(GET_USER)

  if (loading) {
    return <p>Carregando ...</p>
  }
  console.log(data)
  return (
    <ul>
      {data?.users.map((item: any, index: number) =>
        <li key={index}>{item?.name}</li>
      )}
    </ul>
  )
}

export default App
