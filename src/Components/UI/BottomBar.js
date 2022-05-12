import BlueButton from "./BlueButton";
import DeleteButton from "./DeleteButton";
import AddNewButton from "./AddNewButton";
import "./BottomBar.css";

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <AddNewButton className="btn-1 bottom-bar-element" buttonName='Add New' />
      <DeleteButton className="btn-2 bottom-bar-element" buttonName='Delete' />
    </div>
  );
}

export default BottomBar;
