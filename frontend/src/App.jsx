import LeftProfile from "./components/LeftProfile";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="flex w-[1300px] bg-white rounded shadow h-[900px]">
        <LeftProfile />
        <div className="flex-1 bg-background px-6 h-full overflow-y-auto scroll-hidden">
          <Home />
          <footer className="flex flex-col md:flex-row items-center justify-between mt-16 bg-foreground-1 text-white p-6 text-sm font-medium">
            <h1>© 2024 Arter. All rights reserved.</h1>
            <h1>Developed by: John Carlo</h1>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
