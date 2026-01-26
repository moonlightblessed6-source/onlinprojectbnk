// export default async function handler(req, res) {
//   // Allow CORS (optional but safe)
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

//   if (req.method === "OPTIONS") {
//     return res.status(200).end();
//   }

//   try {
//     const response = await fetch("https://geochain.app/apps/api/transfers/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: req.headers.authorization || "",
//         "Device-ID": "WEB",
//       },
//       body: JSON.stringify(req.body),
//     });

//     const data = await response.text();
//     res.status(response.status).send(data);
//   } catch (err) {
//     res.status(500).json({ error: "Proxy error", details: err.message });
//   }
// }




const allowedOrigins = [
  "https://onlinprojectbnk.vercel.app",
  "https://www.onlinprojectbnk.vercel.app",
  "https://mynewdomain.com",       // 👈 add new domain here
  "http://localhost:5173"          // dev
];

export default async function handler(req, res) {
  const origin = req.headers.origin;

  // Allow only whitelisted domains
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await fetch("https://geochain.app/apps/api/transfers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.authorization || "",
        "Device-ID": "WEB",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.text();
    res.status(response.status).send(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy error", details: err.message });
  }
}
