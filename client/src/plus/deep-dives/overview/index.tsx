import React from "react";

import { PageContentContainer } from "../../../ui/atoms/page-content";

const App = React.lazy(() => import("./app"));

export function Overview() {
  const pageTitle = "MDN Plus Deep Dives";
  React.useEffect(() => {
    document.title = pageTitle;
  }, []);
  const isServer = typeof window === "undefined";
  return (
    <PageContentContainer extraClasses="plus">
      {!isServer && (
        <React.Suspense fallback={<p>Loading...</p>}>
          <App />
        </React.Suspense>
      )}
    </PageContentContainer>
  );
}