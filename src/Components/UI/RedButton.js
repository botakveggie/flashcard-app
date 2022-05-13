import "./RedButton.css";

const RedButton = (props) => {
  const classes = "red-button " + props.className;
  var name = "Nameless Button";
  var {buttonName, ...other} = props;
  if (props.buttonName !== undefined) {
    var buttonName = props.buttonName;
  } else if (props.children !== undefined) {
    var buttonName = props.children;
    console.log(props.children);
  } else var buttonName = name
  return (
    <button className={classes} {...other}>
      {buttonName}
    </button>
  );
};

export default RedButton;
