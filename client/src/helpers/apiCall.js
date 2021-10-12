const serverUrl = "http://localhost:5000";

export const authenticateUser = async (token) => {
  try {
    const res = await (
      await fetch(`${serverUrl}/users/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
    ).json();
    return res;
  } catch (error) {
    return error;
  }
};
