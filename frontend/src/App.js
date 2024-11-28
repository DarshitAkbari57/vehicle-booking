import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import BookVehicles from "./pages/bookVehicles";
import Bookings from "./pages/bookings";
import { Toaster } from "react-hot-toast";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue theme
    },
    secondary: {
      main: "#ff4081", // Pink accent
    },
    background: {
      default: "#f5f5f5", // Light background
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster position="top-right" reverseOrder={false} />
        <Router>
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="sticky top-0 h-screen">
              <Sidebar />
            </div>

            {/* Content */}
            <div className="flex-1 bg-gray-50">
              <Routes>
                <Route path="/" element={<BookVehicles />} />
                <Route path="/booking" element={<Bookings />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
