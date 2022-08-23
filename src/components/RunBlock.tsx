
import { Component, createEffect, createSignal, For, JSXElement, Show } from "solid-js"
import { langs, Langs, QueryResource } from "../types"
import { VsLoading } from 'solid-icons/vs'
import stringify from "json-stringify-pretty-compact";

import { partiqlAPI } from "../utils/partiql";
import { sleep } from "../utils";


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
          if (props.resource.result) {
            await sleep(1e3)
            setResult(stringify(JSON.parse(props.resource.result)))
          } else {
            const data = await partiqlAPI(props.resource.url, props.resource.query)
            setResult(stringify(data))
          }
          setIsLoaindg(false)
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
        <For each={(result() ?? "").replaceAll(' ', '\u00A0').split('\n')}>
          {line => (
            <div>{line}</div>
          )}
        </For>
      </div>
    </div >
  )
}

export const ShowBlock: Component<{
  text: string,
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
          await sleep(200)
          setResult(props.text)
          setIsLoaindg(false)
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
        <For each={(result() ?? "").replaceAll(' ', '\u00A0').split('\n')}>
          {line => (
            <div>{line}</div>
          )}
        </For>
      </div>
    </div >
  )
}
