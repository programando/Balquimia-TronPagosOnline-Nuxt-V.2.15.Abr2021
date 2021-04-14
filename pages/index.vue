<template>
  <div class="font-rale">
    <div class="flex justify-center md:justify-around mt-2 -ml-4 md:ml-4 md:mt-8">
      <a href="http://www.balquimia.com">
        <img class="h-20 md:h-auto lg:h-28 mt-4" src="/logo.png" alt="Balquimia.com" />
      </a>
      <div class="hidden lg:block">
        <img class="h-40" src="PayU.png" alt="pagos    ">
      </div>
    </div>
    <div class="flex justify-center mt-14">
      <h2 class="text-4xl lg:text-5xl text-primary">Pagos en Linea</h2>
    </div>
    <div class="flex justify-center items-center">
      <div class="mt-8 px-10 md:px-20 py-6 border  border-primary ">
        <div class="flex justify-center">
          <h2 class="text-xl">Tipo de pago a realizar</h2>
        </div>
        <div class="mx-10">
          <div class="flex flex-col items-center justify-center mt-2">
            <form class="flex flex-col">
              <div>
                <nuxt-link to="pin">
                  <input
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="phone"
                  />
                  <label class="px-2 text-lg" for="contactChoice1"
                    >Numero Pin</label
                  >
                </nuxt-link>
              </div>
              <div class="mt-2">
                <nuxt-link to="pedido">
                  <input
                    type="radio"
                    id="contactChoice2"
                    name="contact"
                    value="phone"
                  />
                  <label class="px-2 text-lg" for="contactChoice2"
                    >Número Pedido</label
                  >
                </nuxt-link>
              </div>
              <div class="mt-2">
                <nuxt-link to="factura">
                  <input
                    type="radio"
                    id="contactChoice3"
                    name="contact"
                    value="mail"
                  />
                  <label class="px-2 text-lg" for="contactChoice3"
                    >Numero Factura</label
                  >
                </nuxt-link>
              </div>
              <div class="mt-2">
                <nuxt-link to="libre">
                  <input
                    type="radio"
                    id="contactChoice4"
                    name="contact"
                    value="mail"
                  />
                  <label class="px-2 text-lg" for="contactChoice4"
                    >Libre Registro</label
                  >
                </nuxt-link>
              </div>
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
  </div>
</template>

<script>
export default {};
</script>
