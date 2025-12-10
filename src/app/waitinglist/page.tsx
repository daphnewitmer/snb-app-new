"use client"

import AddPerson from "./newPerson"
import { useState } from "react"

export default function PeopleOverview() {
    const [add, setAdd] = useState(false)

    return (
        <div className="w-200 bg-red-50 h-screen">
            {add ? (
                <AddPerson />
            ) : (
                <>
                    <h1>Wachtlijst</h1>
                    <button
                        onClick={(add) => {
                            setAdd(true)
                        }}
                    >
                        Nieuwe Persoon
                    </button>
                </>
            )}
        </div>
    )
}
