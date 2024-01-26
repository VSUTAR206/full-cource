function Hello(){

    let myname = 'vishal';
    let num = 456;
    let fullname =()=>{
        return 'vishal sutar';
    }


    return <p>
        Hello {num} This is vishal speaking from Canada. im vishal sutar {fullname()}
    </p>
}

export default Hello;