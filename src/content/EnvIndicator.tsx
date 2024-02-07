import { useEnvironment } from "../hooks/useEnvironment";
import { Environment } from "../types/Environment";
import { CogIcon } from "@heroicons/react/24/solid";

/**
 * Environmental Indication Banner
 */
export const EnvIndicator = () => {
  const env = useEnvironment();

  return env === Environment.Production ? null : (
    <div className="px-2 py-2 border border-slate-400 dark:border-slate-700 rounded-md mx-4 my-4 backdrop:blur-xl bg-slate-300 dark:bg-slate-800">
      <CogIcon className="h-6 inline-block mr-2" />
      <span className="align-middle">
        {env === Environment.Dev ? "Development" : "Staging"} Environment
      </span>
    </div>
  );
};
