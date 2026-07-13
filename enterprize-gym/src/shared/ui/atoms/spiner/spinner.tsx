import clsx from "clsx";

import Classes from "./style/Spinner.module.css";
import type SPINNER_PROPS_INTERFACE from "./interfaces/spinnerPropsInterfaces";


/**
 * Spinner Component
 *
 * A reusable atomic loading indicator.
 *
 * Features:
 * - Three predefined sizes.
 * - Supports custom className.
 * - Lightweight CSS animation.
 *
 * Example:
 *
 * <Spinner size="medium" />
 *
 * Common Use Cases:
 * - Button loading state
 * - API requests
 * - Page loading
 * - Data fetching
 */

export const Spinner = ({
    size,
    className,
}: SPINNER_PROPS_INTERFACE) => {
    return (
        <span
            className={clsx(
                Classes.spinner,
                Classes[size],
                className
            )}
        />
    );
};