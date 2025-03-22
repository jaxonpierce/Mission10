import { useEffect, useState } from "react";
import { fetchBowlers } from "../api";

interface Bowler {
    name: string;
    team: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
}

const BowlersList = () => {
    const [bowlers, setBowlers] = useState<Bowler[]>([]); // Ensure bowlers is initialized as an array

    useEffect(() => {
        fetchBowlers()
            .then(data => {
                console.log("Fetched data:", data); // Debugging step
                if (Array.isArray(data)) {
                    setBowlers(data);
                } else {
                    console.error("API response is not an array:", data);
                }
            })
            .catch(error => console.error("Error fetching bowlers:", error));
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold mt-4">Bowler List</h2>
            {bowlers.length === 0 ? (
                <p>Loading or no data available...</p>
            ) : (
                <table className="border-collapse border border-gray-400 w-full mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th>Name</th>
                            <th>Team</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bowlers.map((b, index) => (
                            <tr key={index} className="border border-gray-400">
                                <td>{b.name}</td>
                                <td>{b.team}</td>
                                <td>{b.address}</td>
                                <td>{b.city}</td>
                                <td>{b.state}</td>
                                <td>{b.zip}</td>
                                <td>{b.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BowlersList;
