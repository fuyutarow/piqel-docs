import { Component, createSignal, For, Show } from 'solid-js';
import { nanoid } from 'nanoid'
import { queryExamples, QueryResource, toSome } from '../utils/queryExamples';
import { CodeBlock, QueryCard } from '../components/QueryCard';
import { installation } from '../utils/installation';
import { Link, useLocation } from 'solid-app-router';
import { Langs } from 'src/types';
import { docs } from '../utils/docs';


export const Template: Component<{ lang: Langs }> = (props) => {
  const location = useLocation()

  const { title, links } = docs[props.lang]

  return (
    <section class="text-gray-700 p-8">
      <div class='text-3xl text-gray-200 my-3'>
        {title}
      </div>
      <ul class='my-3'>
        <For each={links}>
          {link => (
            <li>
              <Link
                href={link}
                class='no-underline hover:underline text-gray-200'
              >
                {link}
              </Link>
            </li>
          )}
        </For>
      </ul>
      <Link
        id='installation'
        href={`${location.pathname}#installation`}
        class='no-underline hover:underline text-2xl text-gray-200'
      >
        Installation
      </Link>
      <div class="pt-3 pb-10 flex flex-col gap-4">
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
        Examples
      </Link>
      <div class="pt-3 pb-10 flex flex-col gap-10">
        <For each={queryExamples}>
          {resource => (
            <QueryCard resource={resource} lang={props.lang} />
          )}
        </For>
      </div>
    </section>
  );
}
