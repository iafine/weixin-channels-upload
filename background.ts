export {}

console.log("222")

const setupTab = () => {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "export_logs",
      title: "日志",
      contexts: ["browser_action"],
      enabled: true
    })
  })

  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId == "export_logs") {
      chrome.tabs.create({
        url: `chrome-extension://${chrome.runtime.id}/pages/tab.html#/export-logs`
      })
    }
  })
}

setupTab()
