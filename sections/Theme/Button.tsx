import { h } from "preact";

interface ButtonProps {
    text: string;
    onClick: () => void;
    variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg";
}

const Button = (
    { text, onClick, variant = "primary", size = "md" }: ButtonProps,
) => {
    const baseClasses = "btn capitalize transition-transform duration-250";
    const sizeClasses = size === "sm"
        ? "btn-xs"
        : size === "lg"
        ? "btn-lg"
        : "btn-sm";

    const variantClasses = {
        primary: "bg-primary text-white hover:bg-primaryDark",
        secondary: "bg-secondary text-white hover:bg-secondaryDark",
        accent: "bg-accent text-white hover:bg-accentDark",
        outline:
            "border border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "bg-transparent text-primary hover:bg-primary hover:text-white",
        link: "text-primary underline hover:text-primaryDark",
    };

    return (
        <button
            className={`${baseClasses} ${sizeClasses} ${
                variantClasses[variant]
            }`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
