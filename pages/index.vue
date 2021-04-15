<template>
  <div class="font-rale">
    <div
      class="flex justify-center mt-2 -ml-4 md:justify-around md:ml-4 md:mt-8"
    >
      <a href="http://www.balquimia.com">
        <img class="h-24 mt-4" src="/logo.png" alt="Balquimia.com" />
      </a>
      <div class="hidden lg:block">
        <img class="h-40" src="PayU.png" alt="pagos    " />
      </div>
    </div>
    <div class="flex justify-center mt-14">
      <h2 class="text-4xl lg:text-5xl text-primary">Pagos en Linea</h2>
    </div>
    <div class="flex items-center justify-center">
      <div class="py-6 mt-8 border border-primary">
        <div class="flex justify-center">
          <h2 class="text-lg ld:text-xl">Realize su pago por medio de:</h2>
        </div>
        <div class="flex flex-col items-center justify-center mt-2">
          <form class="w-full mx-20 lg:mx-28">
            <nuxt-link to="pin">
              <div
                class="w-full text-center hover:bg-gray-200 hover:text-primary"
              >
                <label
                  class="px-2 cursor-pointer lg:text-lg"
                  for="contactChoice1"
                  >Numero Pin</label
                >
              </div>
            </nuxt-link>
            <nuxt-link to="pedido">
              <div
                class="w-full mt-2 text-center hover:bg-gray-200 hover:text-primary"
              >
                <label
                  class="px-2 cursor-pointer lg:text-lg"
                  for="contactChoice2"
                  >Número Pedido</label
                >
              </div>
            </nuxt-link>
            <nuxt-link to="factura">
              <div
                class="w-full mt-2 text-center hover:bg-gray-200 hover:text-primary"
              >
                <label
                  class="px-2 cursor-pointer lg:text-lg"
                  for="contactChoice3"
                  >Numero Factura</label
                >
              </div>
            </nuxt-link>
            <nuxt-link to="libre">
              <div
                class="w-full mt-2 text-center hover:bg-gray-200 hover:text-primary"
              >
                <label
                  class="px-2 cursor-pointer lg:text-lg"
                  for="contactChoice4"
                  >Libre Registro</label
                >
              </div>
            </nuxt-link>
            <div class="flex justify-center mt-4 space-x-3">
              <div>
                <nuxt-link
                  to="/"
                  class="flex justify-center px-2 py-1 text-white border rounded-lg w-28 bg-primary border-primary"
                >
                  Cancelar</nuxt-link
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
  }
</script>
