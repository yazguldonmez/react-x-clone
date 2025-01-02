import { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size, color, bold, className, children, ...props }) {
    return createElement('button', {
        className: classNames("rounded-full flex justify-center items-center transition-colors", {
            "px-4 h-8 text-sm": size === 'small',
            "px-4 h-9": size === 'normal',
            "px-4 text-[17px] h-[52px] w-full": size === 'large',
            "bg-[#e7e9ea] hover:bg-[#dcdedf] text-[#0f1419]": color === 'white',
            "bg-[#1d9bf0] hover:bg-[#1a8cd8]": color === 'blue',
            "border border-[#536471]": color === 'outline-white',
            "font-bold": bold,
            [className]: true//className'i bu şekilde yazıp, propstan almıyoruz çünkü props geçtiği zaman üstteki className'i eziyor.
        }),
        ...props
    }, children)
}

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    color: PropTypes.oneOf(['white', 'blue', 'outline-white']),
    bold: PropTypes.bool,
    props: PropTypes.object,
    className: PropTypes.string
}

Button.defaultProps = {
    size: 'normal',
    color: 'blue',
    bold: true
}