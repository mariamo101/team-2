import {Link} from "react-router-dom";
import {LoaderDark} from "../components/UI/Loader";

function PageNotFound() {
  return (
    <>
      <div className={`h-screen flex flex-col justify-center items-center`}>
        <header className="flex flex-col flex-auto  items-start justify-center">
          <h1 className="text-title sm:text-[1.8rem] mb-8">This Page doesn't exists!</h1>
          <Link
            className="pointer no-underline text-goBackBtn border-inputBorderS border-3 p-2"
            to="/"
          >
            Go to Home Page
          </Link>
          {LoaderDark}
        </header>
      </div>
    </>
  );
}

export default PageNotFound;
