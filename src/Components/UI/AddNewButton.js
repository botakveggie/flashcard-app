import BlueButton from "./BlueButton";

const AddNewButton = (props) => {
    const clickHandler = () => {console.log('new add!!!')};
    return <BlueButton onClick={clickHandler} {...props} />
}

export default AddNewButton;