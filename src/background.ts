import { convertEtherWithDecimals } from "~utils/ether-helper"

export {}
export type InfoMessage = {
  originalValue: string
  originalWei: string
}

export type ResponseMessage = {
  type: "content:btn"
  info: InfoMessage
}
chrome.runtime.onInstalled.addListener(function () {
  console.log("onInstalled")

  chrome.contextMenus.create({
    id: "1",
    title: 'Convert Ether "%s"',
    contexts: ["selection"]
  })
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  console.log("info", info)
  if (info.menuItemId === "1" && info.selectionText) {
    const value = info.selectionText ?? ""
    // replace all commas and dots with nothing
    const valueStripped = value.replace(/,|\./g, "")
    console.log("tab", tab)
    const newInfo: InfoMessage = {
      originalValue: value,
      originalWei: valueStripped
    }
    console.log("newInfo", newInfo)
    chrome.tabs.sendMessage(tab.id!, {
      type: "content:btn",
      info: newInfo
    } as ResponseMessage)
  }
})
