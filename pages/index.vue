<template>
  <div class="font-robo">
   
      <HeaderLogos></HeaderLogos>
    
    <div class="flex justify-center mt-8">
      <h2 class="text-4xl lg:text-5xl text-primary">Pagos en Línea</h2>
    </div>
        <div class="flex justify-center">
        <h2 class="mt-4 text-2xl lg:text-2xl text-primary">Realize su pago por medio de:</h2>
      </div>

    <div class="flex items-center justify-center">
      <div class="py-3 mt-4 border border-primary">

        <div class="flex flex-col items-center justify-center ">
          <form class="w-full mx-20 lg:mx-28">
            <nuxt-link to="pin">
              <div
                class="w-full p-1 text-center hover:bg-gray-200 hover:text-primary"
              >
                <label
                  class="px-2 cursor-pointer lg:text-lg"
                  for="contactChoice1"
                  >Número Pin</label
                >
              </div>
            </nuxt-link>
            <nuxt-link to="pedido">
              <div
                class="w-full p-1 mt-2 text-center hover:bg-gray-200 hover:text-primary"
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
                class="w-full p-1 mt-2 text-center hover:bg-gray-200 hover:text-primary"
              >
                <label
                  class="px-2 cursor-pointer lg:text-lg"
                  for="contactChoice3"
                  >Número Factura</label
                >
              </div>
            </nuxt-link>
            <nuxt-link to="libre" >
              <div
                class="w-full p-1 mt-2 text-center hover:bg-gray-200 hover:text-primary"
              >
                <label
                  class="px-2 cursor-pointer lg:text-lg"
                  for="contactChoice4"
                  >Libre Registro</label
                >
              </div>
            </nuxt-link>  

            <div class="flex justify-center mt-4 mb-4 space-x-3">
               <a href="http://www.balquimia.com" class="flex justify-center px-2 py-1 text-white border rounded-lg w-28 bg-primary border-primary">
                         Cancelar
                  </a>  
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
