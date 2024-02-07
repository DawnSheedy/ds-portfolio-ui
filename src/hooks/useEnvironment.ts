import { useMemo } from "react";
import { Environment } from "../types/Environment";

/**
 * Utility hook to get environment type
 */
export const useEnvironment = () => {
  const env = useMemo(() => {
    const host = window.location.hostname;
    if (host.includes("localhost")) {
      return Environment.Dev;
    }
    if (host.includes("stg.")) {
      return Environment.Staging;
    }
    return Environment.Production;
  }, []);

  return env;
};
