import { topics } from "~/utils/consts";
import Topic from "~/layouts/main/rightbar/topics/topic";
import SidebarSection from "~/components/sidebar-section";

export default function Topics() {
    return (
        <SidebarSection 
        title="What’s happening"
        more="/trends"
        >     
        {topics.map((topic, index) => <div className="grid"><Topic item={topic} key={index} /> </div> )}
        </SidebarSection>

    )
} 