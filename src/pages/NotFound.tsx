import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import { HOME } from "../constants/Slugs";

const NotFound = () => {
  const error = useRouteError();
  console.error(typeof error);

  if (isRouteErrorResponse(error)) {
    // This means it's a known RouteErrorResponse
    console.error("Error response", error);
  } else {
    console.error("Unknown error", error);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black/90">
      <h1 className="font-bold text-3xl text-white">Oops!</h1>
      <p className="text-white">Sorry, an unexpected error has occurred.</p>
      <p className="text-white mb-6">
        <i>
          {isRouteErrorResponse(error) ? error.statusText : "Unknown Error"}
        </i>
      </p>
      <Link to={HOME} className="text-white text-sm cursor-pointer">
        Return
      </Link>
    </div>
  );
};

export default NotFound;
