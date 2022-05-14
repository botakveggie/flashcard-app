import DeleteButton from "./DeleteButton";
import AddNewButton from "./AddNewButton";
import "./BottomBar.css";

const BottomBar = (props) => {
  const {onClick, ...other} = props;
  const togglebutt = () => {
    onClick();
  }
  const deletebutt = () => {
    console.log('sorry, delete not implemented yet')
  }
  return (
    <div className="bottom-bar" {...other}>
      <AddNewButton className="btn-1 bottom-bar-element" buttonName='Add  [C]' togglefn={togglebutt}/>
      <DeleteButton className="btn-2 bottom-bar-element" buttonName='Delete [Del]' togglefn={deletebutt}/>
    </div>
  );
}

export default BottomBar;
