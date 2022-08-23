
import { Component, createEffect, createSignal, For, JSXElement, Show } from "solid-js"
import { langs, Langs } from "../types"
import { QueryResource } from "../utils/queryExamples"
import { VsLoading } from 'solid-icons/vs'
import stringify from "json-stringify-pretty-compact";

import Highlight from "solid-highlight"
import "highlight.js/styles/base16/atlas.css";
import { partiqlAPI } from "../utils/partiql";


export const RunBlock: Component<{
  resource: QueryResource,
}> = (props) => {
  const [isLoading, setIsLoaindg] = createSignal(false)
  const [result, setResult] = createSignal<string | null>(null)

  return (
    <div class='my-3'>
      <button
        class={`text-lg text-white my-2 py-1 px-3 rounded-xl ${isLoading()
          ? 'bg-gray-500'
          : 'bg-green-500 hover:bg-green-400'
          }`}
        disabled={isLoading()}
        onClick={async () => {
          setIsLoaindg(true)
          const data = await partiqlAPI(props.resource.url, props.resource.query)
          setIsLoaindg(false)
          setResult(stringify(data))
          console.log(stringify(data))
        }}
      >
        <Show when={isLoading()}>
          <VsLoading size={24} class='animate-spin' />
        </Show>
        <Show when={!isLoading()}>
          Run
        </Show>
      </button>
      <div class={`max-w-3xl break-all tex-gray-900 bg-sea-300 rounded-xl ${result() && 'p-2'}`}>
      {/* {'\u00A0'} */}
        <For each={(result() ?? "").replaceAll(' ', '\u00A0').split('\n')}>
          {line => (
            <div>{line}</div>
          )}
        </For>
      </div>
    </div >
  )
}
