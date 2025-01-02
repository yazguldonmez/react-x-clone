import Items from "~/components/tab/items"
import Item from "~/components/tab/item"
import Content from "~/components/tab/content"
import PropTypes from "prop-types"
import { TabContext } from "~/components/tab/context"
import { useState } from "react"
import { useEffect } from "react"

export default function Tab({ children, activeTab }) {

    const [active, setActive] = useState(activeTab)

    const contents = children.filter(c => c.type === Content)
    const items = children.filter(c => c.type === Items)

    const content = contents.find(c => c.props.id === active)

    useEffect(() => {
        setActive(activeTab)
    }, [activeTab])

    const data = {
        active,
        setActive
    }

    return (
        <TabContext.Provider value={data}>
            <div className="border-b border-[#16181c] sticky top-0 bg-black/65 z-50 backdrop-blur-md">
                {items}
            </div>
            {content}
        </TabContext.Provider>
    )
}

Tab.Items = Items //Bu şekilde yaparak, tab'ı kullanacağımız yerde <Tab.Items> şeklinde kullanmamıza olanak sağlıyor.
Tab.Item = Item
Tab.Content = Content

Tab.propTypes = {
    children: PropTypes.arrayOf( //Her biri bir React elemanı olmalı. 
        PropTypes.node
    ),
    activeTab: PropTypes.string.isRequired

}