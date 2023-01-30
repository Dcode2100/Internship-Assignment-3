import {
  GoCode,
  GoIssueOpened,
  GoGitPullRequest,
  GoPlay,
  GoProject,
  GoKey,
  GoInfo,
} from "react-icons/go";

export const links = [
  { label: "Code", route: "/code", icon: <GoCode /> },
  { label: "Issue", route: "/issues", icon: <GoIssueOpened /> },
  { label: "Pullrequest", route: "/pullrequest", icon: <GoGitPullRequest />,},
  { label: "Actions", route: "/actions", icon: <GoPlay /> },
  { label: "Projects", route: "/projects", icon: <GoProject /> },
  { label: "Wiki", route: "/wiki", icon: <GoInfo /> },
  { label: "Security", route: "/security", icon: <GoKey /> },
  { label: "Insights", route: "/insights", icon: <GoInfo /> },
];
