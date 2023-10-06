import button from "../styles/button.css";

function Button({ text, action }) {
    return (
        <button className="button" onClick={action}>{text}</button>
    );
}

export default Button;
