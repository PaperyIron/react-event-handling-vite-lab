// Code SubmitButton Component Here

function handleEnter() {
    console.log('Mouse Entering');
}

function handleLeave() {
    console.log('Mouse Exiting');
}

function SubmitButton (){
    return(
        <>
        <button type="submit" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Submit Password</button>
        </>
    )
}

export default SubmitButton;