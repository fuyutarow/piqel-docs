import { FaRegularCopy, FaSolidCopy } from "solid-icons/fa"
import { Component, createSignal, For, Match, Show, Switch } from "solid-js"
import { makeClipboard } from "@solid-primitives/clipboard";

export const CopyButton: Component<{ text: string }> = (props) => {
  const [showCopied, setShowCopied] = createSignal(false)
  const [write, read, newItem] = makeClipboard();

  return (
    <button
      // class='bg-red-400 p-3'
      class='p-3'
      onClick={() => {
        write(props.text)
        setShowCopied(true)
        console.log(showCopied())
      }}>
      <Show when={showCopied()}>
        <div
          class="text-green-400"
          onMouseLeave={() => {
            setShowCopied(false)
          }}
        >
          copied
        </div>
      </Show>
      <Show when={!showCopied()}>
        <FaRegularCopy />
      </Show>
    </button>
  )
}