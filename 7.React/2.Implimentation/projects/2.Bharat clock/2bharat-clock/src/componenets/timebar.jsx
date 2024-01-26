function Currentdate() {
    let time = new Date();
  return (
    <div className="container">
      <p>This is current time : {time.toLocaleDateString()}
      {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Currentdate;
