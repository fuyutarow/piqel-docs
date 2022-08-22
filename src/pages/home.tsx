import { createSignal, For } from 'solid-js';

const QueryCard = () => {
  const [text, setText] = createSignal(
    `
    curl "https://registry.npmjs.org/-/v1/search?text=aptos" | pq -q "SELECT objects.package.name, objects.searchScore as score ORDERED BY score"
    `
  )

  return (
    <div class='flex justify-center'>
      <div class='flex flex-col justify-center'>
        <div class="bg-red-500 rounded-2xl p-5 w-108">
          <For each={text().split('\n')}>
            {line => (
              <div class='text-white'>
                {line}
              </div>
            )}
          </For>
        </div>
        <div>
          <button class='text-lg text-white bg-green-500 py-2 px-3 rounded-xl'>
            Run
          </button>
        </div>
      </div>
    </div>
  )

}


export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <section class="bg-gray-100 text-gray-700 p-8">
      <QueryCard />
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
