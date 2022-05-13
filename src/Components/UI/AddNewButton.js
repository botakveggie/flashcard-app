import BlueButton from "./BlueButton";

const AddNewButton = (props) => {
    const {togglefn, ...other} = props;
    const clickHandler = () => {
        console.log('new add!!!');
        togglefn();
    };
    return <BlueButton onClick={clickHandler} {...other} />
}

export default AddNewButton;