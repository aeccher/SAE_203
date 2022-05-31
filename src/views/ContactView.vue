<template>
  <main class="bg-Jaune">
    <section>
      <div class="items-center px-5 py-12">
        <div class="mx-auto my-6 flex w-full transform flex-col rounded-lg p-10">
          <div class="mt-8">
            <div class="mt-6">
              <form action="#" method="POST" class="space-y-6">
                <div class="grid grid-cols-2 gap-2">
                  <div class="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      autocomplete="name"
                      required=""
                      placeholder="Prénom"
                      class="w-full rounded-lg bg-Noir px-5 py-3 font-roboto text-base text-Jaune placeholder-Jaune"
                    />
                  </div>
                  <div class="mt-1">
                    <input
                      id="family-name"
                      name="family-name"
                      type="family-name"
                      autocomplete="family-name"
                      required=""
                      placeholder="Nom"
                      class="w-full rounded-lg bg-Noir px-5 py-3 font-roboto text-base text-Jaune placeholder-Jaune"
                    />
                  </div>
                </div>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    placeholder="Email"
                    class="w-full rounded-lg bg-Noir px-5 py-3 font-roboto text-base text-Jaune placeholder-Jaune"
                  />
                </div>
                <div>
                  <textarea
                    class="w-full rounded-lg bg-Noir px-5 py-3 font-roboto text-base text-Jaune placeholder-Jaune"
                    id="description"
                    type="text"
                    name="description"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>

                <div class="flex justify-end">
                  <button type="submit" class="mb-9 rounded-lg bg-Noir px-10 py-4 text-center font-roboto text-base text-Jaune">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>