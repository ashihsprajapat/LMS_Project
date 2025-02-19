
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Desboard() {
    return (
        <div>
            <h1>Educaator Deshboard</h1>
            {<Outlet/>}
        </div>
    )
}
