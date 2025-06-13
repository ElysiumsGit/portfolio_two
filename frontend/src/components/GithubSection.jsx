import GitHubCalendar from 'react-github-calendar';

const GitHubSection = () => {
  return (
    <div className="bg-foreground-1 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">GitHub Contributions</h2>
      <GitHubCalendar username="ElysiumsGit" />
    </div>
  );
};

export default GitHubSection;