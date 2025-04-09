import "./Button.css"
import { Component } from "react"


class Button extends Component {
    constructor(){
        super();
        this.title = "Button Component";
    }
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="btn-primary" onClick={() => alert("Button clicked")}>
                    {this.title}
                </button>
            </div>
        )
    }
}

export default Button;