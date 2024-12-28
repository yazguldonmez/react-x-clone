import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export default function SidebarSection({ title, children, more }) {
    return (
        <section className="bg-black mb-4 overflow-hidden rounded-2xl border border-[#16181c]">
            <h5 className="py-3 px-4 text-xl font-bold text-[#e7e9ea] leading-6 h-12 flex items-center">
                {title}
            </h5>
            <div className="grid">
                {children}
            </div>
            {more && (
                <Link
                    to={more}
                    className="h-[52px flex items-center justify-start pl-[15px] pb-[15px] text-[15px] text-[#1d9bf0] transition-colors hover:bg-white/[0.03]">
                    Show more
                </Link>
            )}
        </section>
    )
}

SidebarSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}

SidebarSection.defaultProps = {
    more: false
}