import { Icon } from "./Icon"

export const StockCounterButton = ({ className, iconName, iconColor = 'currentColor', onCounterClick }) => {
    return (
        <button
            className={`flex items-center justify-center rounded-full cursor-pointer size-12 ${className}`}
            onClick={onCounterClick}
        >
            <Icon name={iconName} color={iconColor} />
        </button>
    )
}
