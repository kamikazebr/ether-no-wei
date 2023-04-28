import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

import { CountButton } from "~features/count-button"

import "~base.css"

import { useEffect } from "react"

import SlideModal from "~features/slide-modal"

export const config: PlasmoCSConfig = {
  matches: ["https://blank.org/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return <SlideModal key={"slidemodal"} />
}

export default PlasmoOverlay
