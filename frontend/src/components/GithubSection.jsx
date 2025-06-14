import GitHubCalendar from 'react-github-calendar';

const GithubSection = ({ username, selectedYear, onYearChange, loading }) => {
  return (
    <div className="bg-foreground-1 p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{username}</h2>
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-4">
        <div className="flex md:flex-col gap-2">
          {[2024, 2025].map((year) => (
            <button
              key={year}
              onClick={() => onYearChange(year)}
              className={`px-4 py-2 rounded font-medium transition duration-200
                ${selectedYear === year
                  ? 'bg-color-primary text-black'
                  : 'text-white hover:text-primary'}`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="w-full min-h-[200px] flex items-center justify-center overflow-auto">
          {loading ? (
            <div className="text-white animate-pulse">Loading contributions...</div>
          ) : (
            <GitHubCalendar
              year={selectedYear}
              username={username}
              theme={{
                light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GithubSection;