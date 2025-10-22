export const UseApi = async (url, setLoading) => {
  try {
    if (setLoading) setLoading(true);

    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("HTTP error:", response.status, data);
      return { success: false, status: response.status, data };
    }

    return { success: true, data };
  } catch (error) {
    console.error("UseApi error:", error);
    return { success: false, error: error.message };
  } finally {
    if (setLoading) setLoading(false);
  }
};
