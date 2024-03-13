import Headers from "./Header";
import Footers from "./Footer";
import ChapterOne from "./ChapterOne";

const LayoutInit = ({ children }) => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Headers />

          <section className="">
            <div className=""><ChapterOne/></div>
          </section>

          <Footers />
        </div>
      </div>
    </div>
  );
};

export default LayoutInit;
