export const StaticContent = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl">Hi There,</h1>
      <p className="text-slate-500 dark:text-slate-400">
        I'm a software engineer based in Seattle, WA. I've been working
        professionally since 2021.
        <br />
        My current area of focus is frontend development, however I'm well
        versed in full-stack development and love to try out new things.
      </p>
      <h1 className="text-xl mt-8">Professional Experience & Inquiries</h1>
      <p className="text-slate-500 dark:text-slate-400">
        Currently, I work at{" "}
        <a
          className="dark:hover:text-slate-200 hover:text-slate-700 underline"
          href="https://clearwateranalytics.com/"
        >
          Clearwater Analytics
        </a>{" "}
        under the title Software Development Engineer II.
        <br />
        Before relocating to Seattle, I worked at{" "}
        <a
          className="dark:hover:text-slate-200 hover:text-slate-700 underline"
          href="https://presshook.com/"
        >
          Press Hook
        </a>{" "}
        as their first full time full-stack engineer.
      </p>
      <h1 className="text-xl mt-8">Links</h1>
      <p className="text-slate-500 dark:text-slate-400">
        <ul className="ml-6 list-disc">
          <li>
            <a
              className="dark:hover:text-slate-200 hover:text-slate-700 underline"
              href="https://www.linkedin.com/in/dawnshee/"
            >
              LinkedIn/dawnshee
            </a>{" "}
            — The best way to reach me for professional inquiries.
          </li>
          <li>
            <a
              className="dark:hover:text-slate-200 hover:text-slate-700 underline"
              href="https://github.com/DawnSheedy"
            >
              GitHub/DawnSheedy
            </a>{" "}
            — Ostensibly my scratch pad for trying random things.
          </li>
        </ul>
      </p>
      <h1 className="text-xl mt-8">About this Site</h1>
      <p className="text-slate-500 dark:text-slate-400">
        This website is currently a WIP. All content is static for now.
        <br />
        It's deployed automatically to my kubernetes cluster using GHA.
        <br />
        This page itself is written in React using tailwind for styling.
      </p>
    </div>
  );
};
