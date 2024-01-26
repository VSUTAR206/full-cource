import 'bootstrap/dist/css/bootstrap.min.css';
import Errormsg from './componenets/Errormsg';
import Foodlist from './componenets/Foodlist';

function App() {
  let foodlist = ['vadapav','pizza','burgur','vishal-khimraj-sutar','dal-roti','hello'];

  return <>
  
  <h1>Healthy food</h1>

  <Errormsg iteamsList={foodlist}></Errormsg>
  <Foodlist iteamsList={foodlist}></Foodlist>
   
  </>
}

export default App
