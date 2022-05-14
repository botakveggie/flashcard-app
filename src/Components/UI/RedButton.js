import "./RedButton.css";

const RedButton = (props) => {
  var {buttonName, className, ...other} = props;
  const classes = "red-button " + props.className;
  var name = "Nameless Button";
  if (props.buttonName !== undefined) {
    var buttonName = props.buttonName;
  } else if (props.children !== undefined) {
    var buttonName = props.children;
    // console.log(props.children);
  } else buttonName = name;
  return (
    <button className={classes} {...other}>
      {buttonName}
    </button>
  );
};

export default RedButton;
