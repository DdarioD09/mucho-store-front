import { Icon } from "../Icon"

export const IconButton = ({
    variant = 'default',
    className = '',
    iconName,
    iconColor = 'currentColor',
    onClick
}) => {
    const baseStyles = "flex items-center justify-center cursor-pointer";

    const variants = {
        default: "rounded-full"
    }

    return (
        <button
            type="button"
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            <Icon name={iconName} color={iconColor} />
        </button>
    )
}
