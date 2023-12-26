import Design from "../Design/Design";
import LessonPage from "../LessonPage/LessonPage";
import Manage from "../Manage/Manage";
import Merketing from "../Merketing/Merketing";
import OurClient from "../OurClient/OurClient";
import Scroll from "../Scroll/Scroll";

const Home = () => {
  return (
    <>
      <div>
        <Scroll/>
        <LessonPage />
        <OurClient />
        <Manage/>
        <Design/>
        <Merketing/>
      </div>
    </>
  );
};

export default Home;
