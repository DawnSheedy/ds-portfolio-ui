import { useEnvironment } from "../hooks/useEnvironment";
import { useGetPortfolioServiceStatusQuery } from "../redux/api/portfolioServiceApi";
import { Environment } from "../types/Environment";
import { CogIcon } from "@heroicons/react/24/solid";
import packageJson from "../../package.json";

/**
 * Environmental Indication Banner
 */
export const EnvIndicator = () => {
  const env = useEnvironment();
  const { data: status, isLoading } = useGetPortfolioServiceStatusQuery(
    undefined,
    {
      skip: env === Environment.Production,
    }
  );

  return env === Environment.Production ? null : (
    <div className="px-2 py-2 border border-slate-400 dark:border-slate-700 rounded-md mx-4 my-4 backdrop:blur-xl bg-slate-300 dark:bg-slate-800">
      <CogIcon className="h-6 inline-block mr-2" />
      <span className="align-middle">
        {env === Environment.Dev ? "Development" : "Staging"} Environment
      </span>
      <div className="float-right text-right align-middle dark:text-slate-400 text-slate-500 ml-2 ">
        UI Version: {packageJson.name}:{packageJson.version}
      </div>
      <div className="float-right text-right align-middle dark:text-slate-400 text-slate-500">
        API Version:{" "}
        {isLoading
          ? "Loading API Info..."
          : `${status?.appName}:${status?.version}`}
      </div>
    </div>
  );
};
