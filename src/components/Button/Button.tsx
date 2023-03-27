import "./Button.css"

interface ButtonProps {
    content: string
}

export const Button = ({ content }: ButtonProps) => (
    <button type="button">{content}</button>
)