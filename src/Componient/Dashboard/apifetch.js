import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useDashboard = () => {
  const [fetchdata, setFetchdata] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      localStorage.clear();
      navigate("/login", { replace: true }); // immediate redirect
      return;
    }

    // Optional: check token expiry
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.exp * 1000 < Date.now()) {
        localStorage.clear();
        navigate("/login", { replace: true });
        return;
      }
    } catch {
      localStorage.clear();
      navigate("/login", { replace: true });
      return;
    }

    fetch("https://geochain.app/apps/api/account/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.clear();
          navigate("/login", { replace: true });
          return;
        }
        if (!res.ok) throw new Error("Please check your internet server");
        return res.json();
      })
      .then((data) => {
        if (data) setFetchdata(data);
      })
      .catch((error) => console.log(error));
  }, [navigate]);

  return fetchdata;
};

export default useDashboard;
