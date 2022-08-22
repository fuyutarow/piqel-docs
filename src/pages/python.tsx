import { Component, createSignal, For } from 'solid-js';
import { nanoid } from 'nanoid'
import { queryExamples, QueryResource, toSome } from '../utils/queryExamples';
import { QueryCard } from '../components/QueryCard';



export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <section class="text-gray-700 p-8">
      <For each={queryExamples}>
        {resource => (
          <QueryCard resource={resource} lang="Python" />
        )}
      </For>

      <h1 class="text-2xl font-bold">Home</h1>
      <p class="mt-4">This is the home page.</p>

      <div class="flex items-center space-x-2">
        <button
          class="border rounded-lg px-2 border-gray-900"
          onClick={() => setCount(count() - 1)}
        >
          -
        </button>

        <output class="p-10px">Count: {count}</output>

        <button
          class="border rounded-lg px-2 border-gray-900"
          onClick={() => setCount(count() + 1)}
        >
          +
        </button>
      </div>
    </section>
  );
}
