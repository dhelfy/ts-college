import React from "react"
import { FC } from "react"
import { useSelector } from "react-redux"
import { selectAllUsers } from "../state/selectors/userSelector"

export const UsersPage: FC = () => {
    const users = useSelector(selectAllUsers)

    const userElems = users.map((user) => {
        return (
            <div key={user.id}>
                <h1>{user.name}</h1>
                <p>Was born in {user.bdate}</p>
                <p>{user.name} lives in {user.address.country}, {user.address.city}</p>
            </div>
        )
    })

    return (
        <>
            {userElems}
        </>
    )
}