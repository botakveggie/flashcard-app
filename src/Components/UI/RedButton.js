import "./RedButton.css";

const RedButton = (props) => {
  const classes = "red-button " + props.className;
  var name = "Nameless Button";
  var {buttonName, ...props} = props;
  if (props.buttonName != undefined) {
    var buttonName = props.buttonName;
  } else if (props.children != undefined) {
    var buttonName = props.children;
    console.log(props.children);
  }
  return (
    <button className={classes} {...props}>
      {buttonName}
    </button>
  );
};

export default RedButton;
