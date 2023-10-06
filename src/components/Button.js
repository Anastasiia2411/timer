import {ButtonStyle} from "../styles/button-styles";

function Button({ text, action }) {
    return (
        <ButtonStyle className="button" onClick={action}>{text}</ButtonStyle>
    );
}

export default Button;
