import { Link } from "@mongez/react-router";
import img from "../image/images.jpg";
import "./Home.css";

export default function Article() {
  return (
    <>
      <div className="article-container">
        <div className="article-content">
          <h3>React Router</h3>
          <p>
            The primary goal of Router in React JS is to supply the browser with
            an asynchronous URL that corresponds to the data that will show on
            the web page. It is mainly used to create single-page web apps since
            it retains the application's regular structure and functionality.
          </p>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="article-img">
          <img src={img} alt="Image" />
        </div>
      </div>
    </>
  );
}
