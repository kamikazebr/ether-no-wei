import { Popover } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { type InfoMessage } from "~background"
import { convertEtherWithDecimals } from "~utils/ether-helper"

type Props = {
  info: InfoMessage
}

export default function ConversionInfo({ info }: Props) {
  const [open, setOpen] = useState(false)
  const [originalWei, setOriginalWei] = useState("")
  const [ether, setEther] = useState("")
  const [decimals, setDecimals] = useStorage("ENW-decimals", "18")

  useEffect(() => {
    if (info.originalWei) {
      setOriginalWei(BigInt(info.originalWei).toString())
      convert(info.originalWei, Number(decimals))
    }
  }, [info])

  const handlerOnChangeDecimals = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setDecimals(value)
    convert(originalWei, Number(value))
  }
  const handlerOnChangeOriginalWei = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value
    setOriginalWei(value)
    convert(value, Number(decimals))
  }

  function convert(wei: string, value: number) {
    const newEther = convertEtherWithDecimals(wei, value)
    setEther(newEther)
  }

  return (
    <>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Ether no Wei
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Juicy and handy conversions.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="originalWei"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Original Wei
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="number"
                      name="originalWei"
                      id="originalWei"
                      value={originalWei}
                      onChange={handlerOnChangeOriginalWei}
                      autoComplete="originalWei"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="4200000000000000000"
                    />
                    <span className="select-none items-center py-1.5 pr-1">
                      wei
                    </span>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="number"
                      name="decimals"
                      id="decimals"
                      value={decimals}
                      onChange={handlerOnChangeDecimals}
                      autoComplete="decimals"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="18"
                    />
                    <span className="select-none items-center py-1.5 pr-1">
                      decimals
                    </span>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="convertedEther"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Converted to:
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      value={ether}
                      name="convertedEther"
                      id="convertedEther"
                      onChange={(e) => {
                        setEther(e.target.value)
                      }}
                      autoComplete="convertedEther"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="42.0"
                    />
                    <span className="select-none items-center py-1.5 pr-1">
                      ether
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
