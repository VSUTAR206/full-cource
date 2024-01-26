function Iteam2() {
    let iteamname = 'MIlk';
    let date = '33/10/2023';

  return (
    <div className="container">
      <div className="row">
        <div className="col-3 iteam">{iteamname}</div>
        <div className="col-3 iteam">{date}</div>
        <div className="col-2">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Iteam2;
