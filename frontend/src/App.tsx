import React from "react"
import { gql, useQuery } from "@apollo/client"
import { NewUserForm } from "./components/NewUserForm.component";

type User = {
  name: string;
  id: string;
}

export const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`

function App() {

  const { data, loading } = useQuery<{ users: User[] }>(GET_USER)

  if (loading) {
    return <p>Carregando ...</p>
  }
  console.log(data)
  return (
    <>
      <ul>
        {data?.users.map((user) =>
          <li key={user?.id}>{user?.name}</li>
        )}
      </ul>
      <div>
        <NewUserForm />
      </div>
    </>
  )
}

export default App
