import { CountButton } from "~features/count-button"

import "~base.css"
import "~style.css"

import SlideModal from "~features/slide-modal"

function IndexPopup() {
  return (
    <>
      <SlideModal />
      <div className="flex items-center justify-center h-16 w-40">
        <CountButton />
      </div>
    </>
  )
}

export default IndexPopup
