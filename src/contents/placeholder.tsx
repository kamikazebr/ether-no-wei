import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

import { CountButton } from "~features/count-button"

import "~base.css"

import { useEffect } from "react"

export const config: PlasmoCSConfig = {
  matches: ["https://blank.org/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <>
      <table className="mntl-sc-block-table__table">
        <colgroup span={1}></colgroup>
        <colgroup span={1}></colgroup>
        <colgroup span={1}></colgroup>
        <colgroup span={1}></colgroup>
        <thead>
          <tr>
            <th colSpan={1} className="mntl-sc-block-table__title">
              Sub-units of Ether
            </th>
          </tr>
        </thead>
        <tbody data-check="-1">
          <tr>
            <td>Unit</td>
            <td>wei value</td>
            <td>wei</td>
            <td>ether value</td>
          </tr>
          <tr>
            <td>wei</td>
            <td>1 wei</td>
            <td>1</td>
            <td>10^-18 ETH</td>
          </tr>
          <tr>
            <td>kwei</td>
            <td>10^3 wei</td>
            <td>1,000</td>
            <td>10^-15 ETH</td>
          </tr>
          <tr>
            <td>mwei</td>
            <td>10^6 wei</td>
            <td>1,000,000</td>
            <td>10^-12 ETH</td>
          </tr>
          <tr>
            <td>gwei</td>
            <td>10^9 wei</td>
            <td>1,000,000,000</td>
            <td>10^-9 ETH</td>
          </tr>
          <tr>
            <td>microether</td>
            <td>10^12 wei</td>
            <td>1,000,000,000,000</td>
            <td>10^-6 ETH</td>
          </tr>
          <tr>
            <td>milliether</td>
            <td>10^15 wei</td>
            <td>1,000,000,000,000,000</td>
            <td>10^-3 ETH</td>
          </tr>
          <tr>
            <td>ether</td>
            <td>10^18 wei</td>
            <td>1,000,000,000,000,000,000</td>
            <td>1 ETH</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default PlasmoOverlay
