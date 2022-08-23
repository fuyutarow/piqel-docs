import { Link } from "solid-app-router"
import { For, Show } from "solid-js"
import { CodeBlock, QueryCard } from "../components/QueryCard"
import { ShowBlock } from "../components/RunBlock"
import { codeIntro, hackernewsResouce } from "../utils/introductions"
import wordmark from '../assets/wordmark.png'

export default function Home() {
  return (
    <section class="text-gray-700 p-8">
      <div class="my-3 flex justify-center">
        <img
          src={wordmark}
          height={60}
        />
      </div>
      <div class="my-3 text-gray-100 flex justify-center">
        An implementation of PartiQL written in Rust.
      </div>
      <div class="my-10 text-gray-300 flex justify-center">
        <div class='flex items-center gap-5'>
          <div class='w-120'>
            <video autoplay loop>
              <source
                src="https://user-images.githubusercontent.com/14998939/186226990-96f8345f-a6cd-420f-8d3d-dd8fb5ddca6b.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div class='w-80'>
            <div class='flex justify-center'>
              A command line tool for data processing with SQL queries.
              json, yaml, toml to your favorite format.
            </div>
            <div class='flex justify-center my-5'>
              <Link
                href='/cli#installation'>
                <button class='text-sea-900 text-xl bg-moon-500 hover:bg-moon-700 px-5 py-3 rounded-2xl'>
                  Install piqel CLI
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-3 pb-10 flex flex-col gap-4">
        <For each={codeIntro}>
          {({ script, result, description }) => (
            <div>
              <div class='text-gray-300'>
                {description}
              </div>
              <div class='py-2'>
                <CodeBlock text={script} />
                <Show when={result}>
                  <ShowBlock text={result} />
                </Show>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  )
}
