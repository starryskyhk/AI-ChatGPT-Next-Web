import { useEffect } from "react";
import Router from "next/router";
// @ts-ignore
import Clicky from "react-clicky";

const ClickyComponent = () => {
  useEffect(() => {
    Router.events.on("routeChangeComplete", handleClicky);

    return () => {
      Router.events.off("routeChangeComplete", handleClicky);
    };
  }, []);

  const handleClicky = () => {
    if (typeof window !== "undefined") {
      const clicky = new Clicky({ siteId: "101442322" });
      clicky.log(window.location.href);
    }
  };

  return null;
};

export default ClickyComponent;
