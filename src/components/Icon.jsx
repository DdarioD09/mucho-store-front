export function Icon({ name, size = 24, color = 'currentColor', notification = false, ariaLabel = "", onClick }) {
    return (
        <div className="relative">
            <svg
                width={size}
                height={size}
                fill={color}
                onClick={onClick}
                aria-label={ariaLabel}
                style={{ cursor: onClick ? 'pointer' : 'inherit' }}
            >
                <use xlinkHref={`/assets/sprite.svg#${name}`} />
            </svg>
            <div className="absolute min-w-2.5 min-h-2.5 bg-red-700 rounded-full top-0 right-0" style={{ display: notification ? 'block' : 'none' }}></div>
        </div>
    );
}