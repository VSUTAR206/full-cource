import List from "./iteams";
const Foodlist = ( {iteamsList} ) => {

  return (
    <>
      <ul className="list-group">
        {iteamsList.map((bazar)=>(
            <List key={bazar} addbazar={bazar}></List>
        ))}
      </ul>
    </>
  );
};

export default Foodlist;
