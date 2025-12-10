import Login from "./login/page"
import BikeOverview from "./bikes/page"
import PeopleOverview from "./waitinglist/page"

export default function Home() {
    const loggedIn = true
    return (
        <div className="w-full flex justify-center">
            {loggedIn ? (
                <>
                    <BikeOverview />
                    <PeopleOverview />
                </>
            ) : (
                <Login />
            )}
        </div>
    )
}
