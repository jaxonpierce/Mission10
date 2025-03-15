export const fetchBowlers = async () => {
    try {
        const response = await fetch("http://localhost:5169/api/bowlers"); // Adjust API URL if needed
        const data = await response.json();
        console.log("API Data:", data); // Debugging
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

