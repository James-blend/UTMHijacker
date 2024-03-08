// Listen for URL visits and web visits using webRequest and onBeforeRequest
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("onBeforeRequest triggered with details:", details);
    if (details.url.includes("utm")) {
      console.log("URL contains UTM, cancelling request.");
      return {cancel: true};
    } else {
      console.log("URL does not contain UTM, proceeding to modify URL.");
      let customUTM = {
        utm_name: "James",
        utm_website: "therealjamesrussell.com",
        utm_message: "You've been Hijacked"
      };
      console.log("Custom UTM parameters set:", customUTM);
      let url = new URL(details.url);
      console.log("Original URL:", url.toString());
      url.searchParams.set("utm_name", customUTM.utm_name);
      url.searchParams.set("utm_website", customUTM.utm_website);
      url.searchParams.set("utm_message", customUTM.utm_message);
      console.log("Modified URL:", url.toString());
      return {redirectUrl: url.toString()};
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);