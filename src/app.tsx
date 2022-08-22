import { Component, For } from 'solid-js';
import { Link, useRoutes, useLocation } from 'solid-app-router';
import { routes } from './routes';
import { VsTerminal } from 'solid-icons/vs'
import { SiJavascript } from 'solid-icons/si'
import { SiPython } from 'solid-icons/si'
import { SiRust } from 'solid-icons/si'
import wordmark from './assets/wordmark.png'

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  const iconSize = 16
  const targets = [
    {
      label: "CLI",
      href: '/cli',
      Icon: () => <VsTerminal size={iconSize} />
    },
    {
      label: "Rust",
      href: '/rust',
      Icon: () => <SiRust size={iconSize} />
    },
    {
      label: "Python",
      href: '/python',
      Icon: () => <SiPython size={iconSize} />
    },
    {
      label: "JavaScript",
      href: '/javascript',
      Icon: () => <SiJavascript size={iconSize} />
    }
  ]

  return (
    <div class='min-h-screen bg-sea-700'>
      <nav class="sticky top-0 bg-sea-700 z-10 text-white px-4">
        <div class="flex items-center">
          <div class="py-2 px-4 flex-grow">
            <Link href="/" class="no-underline hover:underline text-white flex items-center gap-3">
              <img
                src={wordmark}
                width={60}
              />
            </Link>
          </div>
          <div class="py-2 px-4 flex gap-5">
            <For each={targets}>
              {({ href, label, Icon }) => (
                <Link
                  // href={`${href}${location.hash}`}
                  href={href}
                  class={`no-underline hover:underline flex items-center gap-2
              ${location.pathname.startsWith(href)
                      ? 'text-white'
                      : 'text-gray-400'
                    }`}
                >
                  <Icon />
                  {label}
                </Link>
              )}
            </For>
          </div>
          <div class="py-2 px-4 flex-grow flex gap-5 justify-end">
            <Link
              href="/dev"
              class={`no-underline hover:underline flex items-center gap-2
              ${location.pathname.startsWith('/dev')
                  ? 'text-white'
                  : 'text-gray-500'
                }`}
            >
              Dev
            </Link>
            <Link
              href="/about"
              class={`no-underline hover:underline flex items-center gap-2
              ${location.pathname.startsWith('/about')
                  ? 'text-white'
                  : 'text-gray-500'
                }`}
            >
              About
            </Link>
          </div>
        </div>
      </nav>

      <main class="sm:container sm:mx-auto flex justify-center">
        <Route />
      </main>
    </div>
  );
};

export default App;
