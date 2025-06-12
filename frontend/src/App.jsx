import Footer from "./components/Footer";
import LeftProfile from "./components/LeftProfile";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="flex w-[1300px] bg-background rounded shadow h-screen py-6">
        <LeftProfile />
        <div className="flex-1 bg-background px-6 h-full overflow-y-auto scroll-hidden">
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
