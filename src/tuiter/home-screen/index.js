import '../index.css';
import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
    return (
        <div id="wd-post-list">
            <WhatsHappening/>
            <TuitsList/>
        </div>

    )
}
export default HomeScreen;