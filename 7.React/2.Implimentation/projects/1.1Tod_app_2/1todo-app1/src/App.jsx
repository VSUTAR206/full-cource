import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Appname from "./componenets/appname.jsx";
import Addtodo from "./componenets/addTODO.jsx";
import Iteam1 from "./componenets/iteam1";
import Iteam2 from "./componenets/Iteam2.jsx";

function App() {
  return (
    <div className="todo-container">
      <Appname />
      <Addtodo />
      <Iteam1 />
      <Iteam2 />
    </div>
  );
}

export default App;
