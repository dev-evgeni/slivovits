import { FC } from "react";

const MainContent: FC = function () {
    return (
      <main class="h-full p-4 pt-20 md:ml-64">
        <section class="bg-gray-50 antialiased dark:bg-gray-900">
          <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
              <div>
                <h2 class="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                  All jokes
                </h2>
              </div>
              <div class="flex items-center space-x-4">
                <button
                  data-modal-toggle="filterModal"
                  data-modal-target="filterModal"
                  type="button"
                  class="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                >
                  <svg
                    class="-ms-0.5 me-2 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                    />
                  </svg>
                  Filters
                  <svg
                    class="-me-0.5 ms-2 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="w-full space-y-4">
              <div class="w-full rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021
                  so far, in reverse chronological order.
                </p>
              </div>
              <div class="w-full rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021
                  so far, in reverse chronological order.
                </p>
              </div>
              <div class="w-full rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021
                  so far, in reverse chronological order.
                </p>
              </div>
              <div class="w-full rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021
                  so far, in reverse chronological order.
                </p>
              </div>
              <div class="w-full rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021
                  so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
  
          <form
            action="#"
            method="get"
            id="filterModal"
            tabindex="-1"
            aria-hidden="true"
            class="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full"
          >
            <div class="relative h-full w-full max-w-xl md:h-auto">
              <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
                <div class="flex items-start justify-between rounded-t p-4 md:p-5">
                  <h3 class="text-lg font-normal text-gray-500 dark:text-gray-400">
                    Filters
                  </h3>
                  <button
                    type="button"
                    class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="filterModal"
                  >
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <div class="px-4 md:px-5">
                  <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                    <ul
                      class="-mb-px flex flex-wrap text-center text-sm font-medium"
                      id="myTab"
                      data-tabs-toggle="#myTabContent"
                      role="tablist"
                    >
                      <li class="mr-1" role="presentation">
                        <button
                          class="inline-block pb-2 pr-1"
                          id="brand-tab"
                          data-tabs-target="#brand"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Category
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div id="myTabContent">
                    <div
                      class="grid grid-cols-2 gap-4 md:grid-cols-3"
                      id="brand"
                      role="tabpanel"
                      aria-labelledby="brand-tab"
                    >
                      <div class="space-y-2">
                        <h5 class="text-lg font-medium uppercase text-black dark:text-white">
                          D
                        </h5>
  
                        <div class="flex items-center">
                          <input
                            id="apple"
                            type="checkbox"
                            value=""
                            class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          />
  
                          <label
                            for="apple"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {" "}
                            Dirty (1){" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="flex items-center space-x-4 rounded-b p-4 dark:border-gray-600 md:p-5">
                  <button
                    type="reset"
                    class="hover:text-primary-700 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    );
  };

  export default MainContent;