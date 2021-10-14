import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { authenticateUser } from "../helpers/apiCall";
import { toast } from "react-toastify";

function VerifyEmail() {
  const [message, setMessage] = useState("We are verifying your account....");
  const { token } = useParams();
  console.log(token);

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const res = await authenticateUser(token);

        if (!res.error) {
          setMessage("you account has benn verified");
          return;
        }

        setMessage("verification error");
      } catch (error) {
        toast(`🦄 ${error.message}`);
      }
    };
    verifyAccount();
  }, []);

  return <section className="page-wrapper">{message}</section>;
}

export default VerifyEmail;
