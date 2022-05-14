import "./BlueButton.css";

const BlueButton = (props) => {
  var {buttonName, className, ...other} = props;
  const classes = "blue-button " + props.className;
  var name = "Nameless Button";
  if (props.buttonName != undefined) {
    var buttonName = props.buttonName;
  } else if (props.children != undefined) {
    var buttonName = props.children;
    // console.log(props.children);
  } else buttonName = name;
  return (
    <button className={classes} {...other}>
      {buttonName}
    </button>
  );
};

export default BlueButton;
