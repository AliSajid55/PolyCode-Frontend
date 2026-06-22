import { useEffect, useState } from "react";
import { normalizeThemeId } from "../../../shared/theme/themes";

export function useDocumentThemeId() {
  const [themeId, setThemeId] = useState(() =>
    normalizeThemeId(
      document.documentElement.getAttribute("data-theme") || "dark",
    ),
  );

  useEffect(() => {
    const sync = () => {
      setThemeId(
        normalizeThemeId(
          document.documentElement.getAttribute("data-theme") || "dark",
        ),
      );
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return themeId;
}
