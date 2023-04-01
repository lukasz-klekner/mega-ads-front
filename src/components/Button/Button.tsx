import { Link } from "react-router-dom"

import "./Button.css"

interface ButtonProps {
    content: string
    to?: string
}

export const Button = ({ content, to }: ButtonProps) => (
    <>
    {to ? <Link className="btn" to={to}>{to}</Link> : <button>{content}</button>}
    </>
)