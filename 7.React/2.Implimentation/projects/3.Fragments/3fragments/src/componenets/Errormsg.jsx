const Errormsg = ( {iteamsList} ) =>{
    


    return <>
    {iteamsList.length === 0 ?<h5>Food list is emty .</h5> :<h5>Food list is containing some  iteam</h5> }
    </>
}

export default Errormsg;