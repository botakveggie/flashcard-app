import "./BottomBar.css";

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="btn-1 bottom-bar-element">
        <span>Add New</span>
      </div>
      <div className="Spacing" />
      <div className="btn-2 bottom-bar-element">
        <span>Delete</span>
      </div>
    </div>
  );
}

export default BottomBar;
