import React from "react";

const SeatMap = ({ 
    selectedSeats, 
    setSelectedSeats, 
    bookedSeats = [] 
}) => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const cols = 10; 

    const toggleSeat = (seat) => {
        if (bookedSeats.includes(seat)) return; // Ignore booked seats

        setSelectedSeats(prev =>
            prev.includes(seat)
                ? prev.filter(s => s !== seat) // Deselect
                : [...prev, seat] // Select
        );
    };
    
    return (
        <div className="p-6 bg-gray-900 rounded-xl">
            <div className="text-center mb-6">
                <div className="text-white text-lg font-bold mb-2">SCREEN</div>
                <div className="h-2 bg-yellow-400 mx-auto w-96 rounded-full"></div>
            </div>

            <div className="grid grid-cols-10 gap-3 max-w-lg mx-auto">
                {rows.map(row =>
                    Array.from({ length: cols }, (_, i) => {
                        const seatId = `${row}${i + 1}`;
                        const isBooked = bookedSeats.includes(seatId);
                        const isSelected = selectedSeats.includes(seatId);

                        return (
                            <button
                            key={seatId}
                            onClick={() => toggleSeat(seatId)}
                            disabled={isBooked}
                            className={`aspect-square rounded-lg font-semibold text-sm transition-all
                                ${isBooked
                                    ? 'bg-red-600 cursor-not-allowed text-white'
                                    : isSelected
                                        ? 'bg-green-500 scale-110 shadow-lg text-white'
                                        : 'bg-green-700 hover:bg-green-600 text-white'
                                }`}
                            >
                                {seatId}
                            </button>
                        );
                    })
                )}
        </div>

        <div className="flex justify-center gap-8 mt-10 text-sm">
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-700 rounded"></div>
                Available
            </div>
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-500 rounded"></div>
                Selected
            </div>
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-red-600 rounded"></div>
                Booked
            </div>
        </div>
    </div>
    );
}; 

export default SeatMap;