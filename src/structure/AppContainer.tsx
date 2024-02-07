import { EnvIndicator } from "../content/EnvIndicator";

export interface ContentSafeColumnProps {
  children?: React.ReactNode;
}

export const AppContainer = ({ children }: ContentSafeColumnProps) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 h-screen flex flex-col justify-between">
      <div className="container mx-auto">{children}</div>
      <EnvIndicator />
    </div>
  );
};
