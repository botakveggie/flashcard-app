import "./MainPage.css";

const MainPage = (props) => {
  var {children, ...other} = props;
  return (
    <div className="MainPage" {...other}>
      {children}
    </div>
  );
};

export default MainPage;
