function Random(){

    let number = Math.random()*100;


    return <h1 style={{backgroundColor: '#776691'}}>Random<br></br> Number is : {Math.round(number)}</h1>
}

export default Random;