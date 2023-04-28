import { Popover } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"

import type { InfoMessage, ResponseMessage } from "~background"

import ConversionInfo from "./conversion-info"

export default function SlideModal() {
  const [open, setOpen] = useState(true)
  const [info, setInfo] = useState<InfoMessage>({
    originalValue: "",
    originalWei: ""
  })

  useEffect(() => {
    chrome.runtime.onMessage.addListener(
      (message: ResponseMessage, sender, sendResponse) => {
        if (message.type === "content:btn") {
          console.log("content:btn", message)
          setOpen(!!message.info)
          if (message.info) {
            setInfo(message.info)
          }
        }

        return true
      }
    )
  }, [])

  return (
    <>
      {open && (
        <div
          key={"modal"}
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      {/* <svg
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg> */}
                      <SvgEthereumIcon />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <ConversionInfo info={info} />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                    Ok
                  </button>
                  {/* <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                    Cancel
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const SvgEthereumIcon = (props) => (
  <svg
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 7
    }}
    viewBox="0 0 142 215"
    {...props}>
    <path
      d="m1394.74 693.463-64.38-89.439v50.214l64.38 39.225Z"
      style={{
        fill: "#c8b2f5",
        stroke: "#3441c0",
        strokeWidth: "2.27px"
      }}
      transform="matrix(1.08181 0 0 -1.03277 -1368.349 837.392)"
    />
    <path
      d="m1394.74 693.463-64.38-89.439v50.214l64.38 39.225Z"
      style={{
        fill: "#eecbc0",
        stroke: "#3441c0",
        strokeWidth: "2.27px"
      }}
      transform="matrix(-1.08181 0 0 -1.03277 1510.05 837.392)"
    />
    <path
      d="m1398.61 639.614-69.66-30.973v70.608l69.66-39.635Z"
      style={{
        fill: "#87a9f0",
        stroke: "#3441c0",
        strokeWidth: "2.4px"
      }}
      transform="matrix(-1 0 0 1 1399.8 -529.114)"
    />
    <path
      d="m1398.61 639.614-69.66-30.973v70.608l69.66-39.635Z"
      style={{
        fill: "#cab3f5",
        stroke: "#3441c0",
        strokeWidth: "2.4px"
      }}
      transform="translate(-1258.104 -529.114)"
    />
    <path
      d="m1394.74 709.855-64.38-105.831v75.841l64.38 29.99Z"
      style={{
        fill: "#eecbc0",
        stroke: "#3441c0",
        strokeWidth: "2.27px"
      }}
      transform="matrix(-1.08181 0 0 1.03277 1510.05 -622.62)"
    />
    <path
      d="m1394.74 709.855-64.38-105.831v75.841l64.38 29.99Z"
      style={{
        fill: "#b8fbf6",
        stroke: "#3441c0",
        strokeWidth: "2.27px"
      }}
      transform="matrix(1.08181 0 0 1.03277 -1368.349 -622.62)"
    />
  </svg>
)
