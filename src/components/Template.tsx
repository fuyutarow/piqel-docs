import { Component, createSignal, For, Show } from 'solid-js';
import { nanoid } from 'nanoid'
import { queryExamples, QueryResource, toSome } from '../utils/queryExamples';
import { CodeBlock, QueryCard } from '../components/QueryCard';
import { installation } from '../utils/installation';
import { Link, useLocation } from 'solid-app-router';
import { Langs } from 'src/types';


export const Template: Component<{ lang: Langs }> = (props) => {
  const location = useLocation()

  return (
    <section class="text-gray-700 p-8">
      <Link
        id='installation'
        href={`${location.pathname}#installation`}
        class='no-underline hover:underline text-2xl text-gray-200'
      >
        # Installation
      </Link>
      <div class="pt-3 pb-10 flex flex-col gap-8">
        <For each={installation[props.lang]}>
          {({ label, description, script }) => (
            <div>
              <div class='text-xl text-gray-200 py-1'>
                {label}
              </div>
              <Show when={description}>
                <div class='text-md text-gray-300 py-1'>
                  {description}
                </div>
              </Show>
              <div class='py-2'>
                <CodeBlock text={script} />
              </div>
            </div>
          )}
        </For>
      </div>

      <Link
        id='examples'
        href={`${location.pathname}#examples`}
        class='no-underline hover:underline text-2xl text-gray-200'
      >
        # Examples
      </Link>
      <div class="pt-3 pb-10 flex flex-col gap-10">
        <For each={queryExamples}>
          {resource => (
            <QueryCard resource={resource} lang="Rust" />
          )}
        </For>
      </div>
    </section>
  );
}
