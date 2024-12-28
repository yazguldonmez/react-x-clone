import { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size, color, bold, children }) {
    return createElement('button', {
        className: classNames("rounded-full flex justify-center items-center transition-colors", {
            "px-4 h-8 text-sm": size === 'small',
            "px-4 h-9": size === 'normal',
            "px-4 text-[17px] h-[52px] w-full": size === 'large',
            "bg-[#e7e9ea] hover:bg-[#dcdedf] text-[#0f1419]": color === 'white',
            "bg-[#1d9bf0] hover:bg-[#1a8cd8]": color === 'blue',
            "font-bold": bold,
        })
    }, children)
}

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    color: PropTypes.oneOf(['white', 'blue']),
    bold: PropTypes.bool,
}

Button.defaultProps = {
    size: 'normal',
    color: 'blue',
    bold: true
}