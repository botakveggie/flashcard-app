import "./Card.css";

const Card = (props) => {
  const {className, children, ...other} = props;
  const classes = "card " + className;
  return <div className={classes} {...other}>{children}</div>;
}

export default Card;
