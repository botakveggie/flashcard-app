import RedButton from "./RedButton";

const DeleteButton = (props) => {
    const clickHandler = () => {console.log('delete nao...')};
    return <RedButton onClick={clickHandler} {...props} />
}

export default DeleteButton;