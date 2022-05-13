import "./BlueButton.css";

const BlueButton = (props) => {
  const classes = "blue-button " + props.className;
  var name = "Nameless Button";
  var {buttonName, ...other} = props;
  if (props.buttonName != undefined) {
    var buttonName = props.buttonName;
  } else if (props.children != undefined) {
    var buttonName = props.children;
    console.log(props.children);
  }
  return (
    <button className={classes} {...other}>
      {buttonName}
    </button>
  );
};

export default BlueButton;
