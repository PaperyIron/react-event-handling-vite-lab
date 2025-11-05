// Code PasswordInput Component Here

function handleChange() {
    console.log('Entering password...');
};

function PasswordInput (){
    return(
        <>
        <input type="password" onChange={handleChange}/>
        </>
    )
}

export default PasswordInput;