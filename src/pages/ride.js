import NavBar from "../nav/navbar"

export default function Ride(){
    return (
        <>
        <NavBar/>
        <h1>Request a ride for now</h1>
        <h4>Add your trip details</h4>
        <input placeholder="Enter Location"/>
        <input placeholder="Enter Destination"/>
       </>
    )
}