<template>
  <div class="font-rale">
    <div class="flex justify-center mt-2 -ml-4">
      <a href="http://www.balquimia.com">
        <img class="h-20" src="/logo.png" alt="Balquimia.com" />
      </a>
    </div>
    <div class="flex justify-center mt-14">
      <h2 class="text-4xl text-primary">Pagos en Linea</h2>
    </div>
    <div class="py-2 mx-10 mt-8 border rounded-lg border-primary ">
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

            <nuxt-link to="pedido">
                  <div class="mt-2">
                    <input    type="radio"   id="contactChoice2"     name="contact"   value="phone"  />
                    <label class="px-2 text-lg" for="contactChoice2">Número Pedido</label>
                  </div>
             </nuxt-link>
          
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
            <div class="flex justify-center mt-4 space-x-3">
              <div>
                <nuxt-link
                  to="/"
                  class="flex justify-center px-2 py-1 text-white border rounded-lg w-28 bg-primary border-primary"
                  
                >
                  Cancelar</nuxt-link
                >
              </div>
              <button
                class="px-4 py-1 text-white border rounded-md w-28 bg-primary"
                type="submit"
              >
                Seleccionar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

 
 
  </div>
</template>

<script>
export default {};
</script>
