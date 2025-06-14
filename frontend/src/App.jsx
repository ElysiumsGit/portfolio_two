import { useState } from "react";
import Footer from "./components/Footer";
import LeftProfile from "./components/LeftProfile";
import Home from "./pages/Home";
import { FiMenu, FiX } from "react-icons/fi";
import UseResponsive from "./components/UseResponsive";
import { Outlet } from "react-router-dom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = UseResponsive();

  const handleClickMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div
        className={`relative flex w-[1300px] bg-background rounded shadow h-screen overflow-hidden ${
          !isMobile && "py-6"
        }`}
      >
        {/* Overlay for dimming background when menu is open */}
        {isMobile && isMenuOpen && (
          <div
            className="absolute inset-0 bg-black opacity-40 z-40"
            onClick={handleCloseMenu}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            ${isMobile ? "absolute z-50 h-full" : "relative"}
            transition-transform duration-300 ease-in-out
            ${
              isMobile
                ? isMenuOpen
                  ? "translate-x-0"
                  : "-translate-x-full"
                : ""
            }
          `}
        >
          <LeftProfile />
        </div>

        {/* Main content */}
        <div
          className={`flex-1 bg-background px-6 h-full overflow-y-auto scroll-hidden  ${
            isMobile && "py-6"
          }  relative z-10`}
        >
          <div className="flex justify-end">
            {isMobile && !isMenuOpen && (
              <FiMenu
                size={24}
                color="white"
                className="mb-4"
                onClick={handleClickMenu}
              />
            )}
            {isMobile && isMenuOpen && (
              <FiX
                size={24}
                color="white"
                className="mb-4"
                onClick={handleCloseMenu}
              />
            )}
          </div>
          <Outlet/>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;