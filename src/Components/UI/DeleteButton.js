import RedButton from "./RedButton";

const DeleteButton = (props) => {
    const {togglefn, ...other} = props;
    const clickHandler = () => {
        console.log('delete nao...')
        togglefn();
    };
    return <RedButton onClick={clickHandler} {...other} />
}

export default DeleteButton;