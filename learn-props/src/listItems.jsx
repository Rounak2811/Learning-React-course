import style from "./listItems.module.css";

const ListItems = (props) => {
  //Whatever you pass to the child component is passed to child component via an object. Whatever you need to access, access it using . operator.
  const handleClick=(foodItem)=>{
    console.log(`${foodItem} is clicked`);
  }


  return (
    <div>
      <li className={`${style["kg-item"]} list-group-item ${props.bought && 'active'}`}>
        {props.eachItem}
        <button type="button" className={`btn btn-info ${style.button}`} onClick={props.handleBuyButton}
        >
          Buy
        </button>
      </li>
    </div>
  );
};
export default ListItems;
