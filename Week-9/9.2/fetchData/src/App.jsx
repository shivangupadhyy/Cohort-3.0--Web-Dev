import { useEffect } from "react";
import { useState } from "react"

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        // Create an async function named fetchData that will fetch data from the API
        const fetchData = async () => {
            // Use a try-catch block to handle errors while fetching data
            try {
                // Fetch data from the API using the fetch function and store the response in the response variable
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                // Convert the response to JSON format and store it in the data variable
                const data = await response.json();

                // Update the users state with the data fetched from the API
                setUsers(data);
            } catch (error) { // Catch any errors that occur while fetching data
                // Log the error to the console if there is an error while fetching data
                console.error("Error fetching data:", error);
            } finally { // this block will run whether the try block is successful or not
                // Update the loading state to false after fetching the data
                setLoading(false);
            }
        };

        // Call the fetchData function when the component mounts to fetch the data
        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts.


  return <>
  <div>
    <ul>
      <li>
        <p>Name: {}</p>
      </li>
    </ul>
  </div>
  </>
}

export default App
