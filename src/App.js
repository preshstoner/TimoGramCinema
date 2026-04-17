import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer} from "./components"
import './App.css';
import React from "react";

//Import AuthProvider and SeatMap
import { AuthProvider } from "./context/AuthContext";
import SeatMap from "./components/SeatMap";

function App() {
  const [selectedSeats, setSelectedSeats] = React.useState([]);

  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <AllRoutes />

        {/* Temporay SeatMap Test - I will remove this later */}
        < div className="p-8 bg-black min-h-screen text-white">
          <h1 className="text-3xl font-bold mb-8 text-center">Test Seat Map</h1>

          <SeatMap
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            bookedSeats={["A3", "B5", "C7", "D2"]} // Example of booked seats
          />

          <div className="mt-8 text-center text-lg">
            Selected Seats:{selectedSeats.join(", ") || " None"}
          </div>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
