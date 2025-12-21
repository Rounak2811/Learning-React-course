import ErrorMessage from "./ErrorMessage.jsx";
import ListItems from "./listItems.jsx";
import Container from "./Container.jsx"
import InputBox from "./InputBox.jsx";
import { useState } from "react";

function App() {
  let myBasket = [
    "Apple",
    "Banana",
    "Carrot",
    // "Dragon fruit",
    // "Elaichi",
    // "FullMarks",
    // "Grapes",
  ];

  // let textToShow='User entered Text here';
  // let [textToShow,setTextToShow]=useState("Food Item entered by the user");
  // const handleOnChange=(event)=>{
  //   console.log(event.target.value);
  //   // textToShow=event.target.value;
  //   setTextToShow(event.target.value);
  // }
  let [foodItems,setFoodItems]=useState(myBasket);
  const onKeyDown=(event)=>{
    if(event.key==='Enter'){
      console.log(event);
      let newFood = event.target.value;
      // Check if input is not empty
      if (newFood !== "") {
        event.target.value = "";
        let newFoodItems = [...foodItems, newFood];
        setFoodItems(newFoodItems);
      } else {
        event.target.value = ""; // clear input even if empty
      }
    }
  }
  let [activeItems,setActiveItems]=useState([]);
  const onBuyButton=(item)=>{
    let newActiveItems=[...activeItems,item];
    setActiveItems(newActiveItems);
  }

  return (
    <>
      <Container>
        <h1 className="kg-heading">Healthy Food Items</h1>
        {/* <InputBox handleOnChange={handleOnChange}></InputBox> */}
        <InputBox handleOnKeyDown={onKeyDown}></InputBox>
        {/* <p>{textToShow}</p> */}
        <ErrorMessage items={foodItems} />
        <ul className="list-group">
          {foodItems.map((item) => (
            <ListItems
              key={item}
              eachItem={item}
              bought={activeItems.includes(item)}
              handleBuyButton={(event) =>onBuyButton(item)}
            ></ListItems>
          ))}
        </ul>
      </Container>
      {/* <Container>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quaerat dolores, placeat quibusdam quo modi totam iste labore mollitia omnis consequuntur ut assumenda et maiores perspiciatis a similique dolore pariatur.
      </Container> */}
    </>
  );
}

export default App;
