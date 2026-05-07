export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwZfk1BkZ-_Z2fLJjAzQEI5GeOd4DuLb2tWUY3qbrB29j_OUGbMH5lOe4AcWWBxo2SUMA/exec";

export async function submitToGoogleSheets(data: Record<string, string>) {
  if (GOOGLE_SCRIPT_URL === "") {
    console.warn("Google Script URL is not set. Data not submitted.");
    return false;
  }
  
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return true; // no-cors doesn't allow reading response, but we assume success if no network error
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return false;
  }
}
