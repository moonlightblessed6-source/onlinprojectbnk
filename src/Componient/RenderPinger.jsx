// import { useEffect } from "react";

// function RenderPinger() {
//   useEffect(() => {
//     const renderURL = "https://geochain.app/apps/api/keep-alive/";

//     let fastIntervalCount = 0;

//     // Function to ping your Render app
//     const pingRender = async () => {
//       try {
//         const response = await fetch(renderURL);
//         console.log("Pinged Render API:", response.status);
//       } catch (err) {
//         console.error("Ping failed:", err);
//       }
//     };

//     // Ping immediately on mount
//     pingRender();

//     // Start fast pinging: every 1 second, for first 20 times (~20 seconds)
//     const fastInterval = setInterval(() => {
//       if (fastIntervalCount >= 20) {
//         clearInterval(fastInterval);
//         // Switch to slower pinging after initial “warm-up”
//         setInterval(pingRender, 300000); // every 5 minutes
//         return;
//       }
//       pingRender();
//       fastIntervalCount++;
//     }, 1000);

//     // Cleanup intervals on unmount
//     return () => clearInterval(fastInterval);
//   }, []);

//   return null; // Does not render anything
// }

// export default RenderPinger;
