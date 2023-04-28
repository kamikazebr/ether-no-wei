import { useEffect, useReducer, useState } from "react"

export const CountButton = () => {
  const [count, increase] = useReducer((c) => c + 1, 0)
  const [text, setText] = useState("Inicial")

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.type === "content:btn") {
        console.log("content:btn", message)
        setText(message.value ?? "Vazio")
      }

      return true
    })
  }, [])

  return (
    <button
      onClick={() => increase()}
      type="button"
      className="flex flex-row items-center px-4 py-2 text-sm rounded-lg transition-all border-none
      shadow-lg hover:shadow-md
      active:scale-105">
      Count:
      <span className="inline-flex items-center justify-center w-8 h-4 ml-2 text-xs font-semibold rounded-full">
        {count}
      </span>
      <span className="inline-flex items-center justify-center w-8 h-4 ml-2 text-xs font-semibold rounded-full">
        {text}
      </span>
    </button>
  )
}
