  import { useEffect, useState } from "react";
  


  const useDashboard = () => {

      const [fetchdata, setFetchdata] = useState(null);
useEffect(() => {
  const token = localStorage.getItem("authToken");

  fetch("https://geochain.app/api/api/account/dashboard", {
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Please check your internet server");
      }
      return res.json();
    })
    .then((data) => {
      console.log("Dashboard data:", data);
      setFetchdata(data);
    })
    .catch((error) => console.log(error));
}, []);

return fetchdata
  };
export default useDashboard;





