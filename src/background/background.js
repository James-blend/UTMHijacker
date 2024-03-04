// Listen for URL visits and web visits using webRequest and onBeforeRequest
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.includes("utm")) {
      return {cancel: true};
    } else {
      let customUTM = {
        utm_name: "James",
        utm_website: "therealjamesrussell.com",
        utm_message: "You've been Hijacked"
      };
      let url = new URL(details.url);
      url.searchParams.set("utm_name", customUTM.utm_name);
      url.searchParams.set("utm_website", customUTM.utm_website);
      url.searchParams.set("utm_message", customUTM.utm_message);
      return {redirectUrl: url.toString()};
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);




