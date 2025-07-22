import { IconButton } from "./button/IconButton"

const variants = {
    primary: {
        parentStyle: "bg-gray-50",
        addStyle: "bg-green-500 size-12",
        removeStyle: "bg-red-500 size-12",
        iconAddColor: "white",
        iconRemoveColor: "white"
    },
    secondary: {
        parentStyle: "bg-gray-100",
        addStyle: "bg-green-500/20 size-8",
        removeStyle: "bg-red-500/20 size-8",
        iconAddColor: "green",
        iconRemoveColor: "red"
    }
}

export const StockCounterPill = ({
    variant = 'primary',
    text,
    className = '',
    onAddClick,
    onRemoveClick
}) => {
    const baseStyles = "flex items-center gap-2 rounded-full";

    const { parentStyle, addStyle, removeStyle, iconAddColor, iconRemoveColor } = variants[variant];

    return (
        <div className={`${baseStyles} ${parentStyle} ${className}`}>
            <IconButton
                iconName="remove"
                iconColor={iconRemoveColor}
                className={removeStyle}
                onClick={onRemoveClick}
            />
            <span className="font-medium">{text}</span>
            <IconButton
                iconName="add"
                iconColor={iconAddColor}
                className={addStyle}
                onClick={onAddClick} />
        </div>
    )
}
