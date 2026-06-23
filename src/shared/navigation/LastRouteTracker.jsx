import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../features/auth/context/AuthContext";
import { saveLastRoute } from "./lastRoute";

/** Persists the last in-app route for signed-in users (tab close + navigation). */
export default function LastRouteTracker() {
  const location = useLocation();
  const { user, loading } = useAuth();

  React.useEffect(() => {
    if (loading || !user) return;
    saveLastRoute(location.pathname, location.search);
  }, [location.pathname, location.search, user, loading]);

  React.useEffect(() => {
    if (!user) return undefined;

    const persist = () => {
      saveLastRoute(location.pathname, location.search);
    };

    window.addEventListener("pagehide", persist);
    window.addEventListener("beforeunload", persist);
    return () => {
      window.removeEventListener("pagehide", persist);
      window.removeEventListener("beforeunload", persist);
    };
  }, [user, location.pathname, location.search]);

  return null;
}
