import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import { useSelector } from "react-redux";
const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.id) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="w-full min-h-screen bg-lite dark:bg-darkbg p-10 relative isolate">
      <img
        src="/ellipse.png"
        alt="bg"
        className="hidden lg:block absolute bottom-0 left-0 right-0 z-[-1]"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img src="/logo.png" alt="crowfounding-app" />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-12 lg:py-16 mx-auto">
        <h1 className="font-semibold text-lg lg:text-xl mb-1 lg:mb-3 text-text1 dark:text-white text-center">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

// Propstype
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

// Export and ErrorBoundray
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
