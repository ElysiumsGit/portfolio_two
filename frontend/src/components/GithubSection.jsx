import { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubSection = () => {
  const [selectYear, setSelectYear] = useState(2025);
  const [loading, setLoading] = useState(false);

  const handleYearChange = (year) => {
    if (year === selectYear) return;
    setLoading(true);
    setSelectYear(year);

    setTimeout(() => {
      setLoading(false);
    }, 800); 
  };

  return (
    <>
        <h2 className="text-2xl font-bold mb-8">My Contribution</h2>
        <div className="bg-foreground-1 p-6 shadow-md rounded-lg">
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-4">
                <div className="flex md:flex-col gap-2">
                    {[2024, 2025].map((year) => (
                        <button
                        key={year}
                        onClick={() => handleYearChange(year)}
                        className={`px-4 py-2 rounded font-medium transition duration-200
                            ${selectYear === year
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
                        
                            year={selectYear}
                            username="ElysiumsGit"
                            theme={{
                                light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
                                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                        }}
                        />
                    )}
                </div>
            </div>
        </div>
    </>
  );
};

export default GitHubSection;
