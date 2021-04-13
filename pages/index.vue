<template>
  <div class="font-rale">
    <div class="mt-2 flex -ml-4 justify-center">
      <a href="http://www.balquimia.com">
        <img class="h-20" src="/logo.png" alt="Balquimia.com" />
      </a>
    </div>
    <div class="flex justify-center mt-14">
      <h2 class="text-4xl text-primary">Pagos en Linea</h2>
    </div>
    <div class="mt-8 mx-10 border py-2 border-primary rounded-lg ">
      <div class="flex justify-center">
        <h2 class="text-xl">Tipo de pago a realizar</h2>
      </div>
      <div class="mx-10">
        <div class="flex flex-col items-center justify-center mt-2">
          <form class="flex flex-col">
            <div>
              <input
                type="radio"
                id="contactChoice1"
                name="contact"
                value="phone"
              />
              <label class="px-2 text-lg" for="contactChoice1"
                >Numero Pin</label
              >
            </div>
            <div class="mt-2">
              <input
                type="radio"
                id="contactChoice2"
                name="contact"
                value="phone"
              />
              <label class="px-2 text-lg" for="contactChoice2"
                >Numero Pedido</label
              >
            </div>

            <div class="mt-2">
              <input
                type="radio"
                id="contactChoice3"
                name="contact"
                value="mail"
              />
              <label class="px-2 text-lg" for="contactChoice3"
                >Numero Factura</label
              >
            </div>
            <div class="mt-2">
              <input
                type="radio"
                id="contactChoice4"
                name="contact"
                value="mail"
              />
              <label class="px-2 text-lg" for="contactChoice4"
                >Libre Registro</label
              >
            </div>
            <div class="mt-4 flex justify-center space-x-3">
              <div>
                <nuxt-link
                  to="/"
                  class="w-28 px-2 py-1 border rounded-lg bg-primary text-white border-primary flex justify-center"
                  
                >
                  Cancelar</nuxt-link
                >
              </div>
              <button
                class="w-28 px-4 py-1 border rounded-md bg-primary text-white"
                type="submit"
              >
                Seleccionar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="mx-10 mt-2 ">
      <nuxt-link
        class="px-2 border py-1 rounded-lg border-primary"
        to="numeroPin"
        >Numero Pin</nuxt-link
      >
      <nuxt-link
        class="px-2 border py-1 rounded-lg border-primary"
        to="numeroPedido"
        >Numero Pedido</nuxt-link
      >
    </div>
    <div class="mx-10 mt-2">
      <nuxt-link
        class="px-2 border py-1 rounded-lg border-primary"
        to="numeroFactura"
        >Numero Factura</nuxt-link
      >
      <nuxt-link
        class="px-2 border py-1 rounded-lg border-primary"
        to="libreRegistro"
        >Libre Registro</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>
