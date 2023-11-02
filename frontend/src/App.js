import React,{useState} from "react";
import "./App.css";
import RoomCategory from "./components/roomcategory/RoomCategory";
import FoodList from "./components/mappinglist/FoodList";

function App() {
  const [room,setRoom] = useState("");
  const handleRoomValue = (e) =>{
    e.preventDefault();
    setRoom(e.target.value)
  }
  return (
    <div>
      <form>
        <input type="text" value={room} onInput={handleRoomValue} />
      </form>
      <RoomCategory name={room} />
      <FoodList />
    </div>
  );
}

export default App;
