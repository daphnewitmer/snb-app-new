"use client"

import NewBike from "./newBike"
import { useState } from "react"

export default function BikeOverview() {
    const [add, setAdd] = useState(false)

    return (
        <div className="w-200 bg-red-50 h-screen">
            {add ? (
                <NewBike />
            ) : (
                <>
                    <h1>Fiets Overzicht</h1>
                    <button
                        onClick={(add) => {
                            setAdd(true)
                        }}
                    >
                        Nieuwe Fiets
                    </button>
                </>
            )}
        </div>
    )
}
