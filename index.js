async function fetchQuizData() {
    const apiUrl = "https://api.jsonserve.com/Uw5CrX";

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        console.log("Raw Response:", response);

        const data = await response.json();
        console.log("Fetched Data:", data);

        if (!Array.isArray(data)) {
            throw new Error("Invalid data format: Expected an array");
        }

        return data;
    } catch (error) {
        console.error("Error fetching quiz data:", error.message);
        return null;
    }
}


// Call function to fetch data
fetchQuizData();
