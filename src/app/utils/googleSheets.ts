export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwZfk1BkZ-_Z2fLJjAzQEI5GeOd4DuLb2tWUY3qbrB29j_OUGbMH5lOe4AcWWBxo2SUMA/exec";

export async function submitToGoogleSheets(data: Record<string, string>) {
  if (!GOOGLE_SCRIPT_URL) return false;
  
  try {
    // Using no-cors requires headers to be "safelisted". 
    // text/plain is safelisted and allows the POST to succeed without CORS errors.
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    return true; 
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return false;
  }
}
