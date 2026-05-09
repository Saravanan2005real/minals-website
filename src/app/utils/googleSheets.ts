// URLs for different Google Sheets
export const CONTACT_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwZfk1BkZ-_Z2fLJjAzQEI5GeOd4DuLb2tWUY3qbrB29j_OUGbMH5lOe4AcWWBxo2SUMA/exec";
export const DEALER_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwZfk1BkZ-_Z2fLJjAzQEI5GeOd4DuLb2tWUY3qbrB29j_OUGbMH5lOe4AcWWBxo2SUMA/exec"; // Placeholder, update when second sheet is ready

export type SheetType = 'contact' | 'dealer' | 'product_enquiry';

export async function submitToGoogleSheets(data: Record<string, string>, type: SheetType = 'contact') {
  let scriptUrl = CONTACT_SCRIPT_URL;
  
  if (type === 'dealer') {
    scriptUrl = DEALER_SCRIPT_URL;
  } else if (type === 'product_enquiry') {
    // For now, we can route product enquiries to the contact sheet or a dedicated one
    scriptUrl = CONTACT_SCRIPT_URL;
  }

  if (!scriptUrl) return false;
  
  try {
    // Using no-cors requires headers to be "safelisted". 
    // text/plain is safelisted and allows the POST to succeed without CORS errors.
    await fetch(scriptUrl, {
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
