<template>
  <div class="bg-white min-h-full flex flex-col lg:relative">
    <div class="flex-grow flex flex-col">
      <div class="flex-grow flex flex-col bg-white">
        <div
          class="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8"
        >
          <div class="flex-shrink-0 pt-10 sm:pt-16">
            <a href="/" class="inline-flex">
              <span class="sr-only">Workflow</span>
              <img src="@/assets/svg/company-logo-sm.svg" alt="logo" />
            </a>
          </div>
          <div class="flex-shrink-0 my-auto py-16">
            <p
              class="text-sm font-semibold text-indigo-600 uppercase tracking-wide"
            >
              404 error
            </p>
            <h1
              class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
            >
              Page not found
            </h1>
            <p class="mt-2 text-base text-gray-500">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div class="mt-6">
              <router-link
                to="/"
                class="text-base font-medium text-indigo-600 hover:text-indigo-500"
                >Go back home<span aria-hidden="true">
                  &rarr;</span
                ></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
