const LAST_ROUTE_KEY = "polycode_last_route";

function isRememberableRoute(pathname) {
  if (!pathname || pathname === "/") return false;
  if (pathname === "/login" || pathname === "/signup") return false;
  if (pathname.startsWith("/verify-certificate")) return false;
  return true;
}

export function saveLastRoute(pathname, search = "") {
  if (!isRememberableRoute(pathname)) return;
  try {
    localStorage.setItem(LAST_ROUTE_KEY, `${pathname}${search || ""}`);
  } catch {
    // ignore quota / private mode
  }
}

export function getLastRoute() {
  try {
    const route = localStorage.getItem(LAST_ROUTE_KEY);
    if (!route || !isRememberableRoute(route.split("?")[0])) return null;
    return route;
  } catch {
    return null;
  }
}

export function resolveResumePath(fallback = "/hub") {
  return getLastRoute() || fallback;
}
