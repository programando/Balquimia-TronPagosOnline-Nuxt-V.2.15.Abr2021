<template>
  <div class="mx-10 mt-4">
    <div
      class="flex justify-center mt-2 -ml-4 md:justify-around md:ml-4 md:mt-8"
    >
      <a href="http://www.balquimia.com">
        <img
          class="h-24 mt-4 "
          src="/logo.png"
          alt="Balquimia.com"
        />
      </a>
      <div class="hidden lg:block">
        <img class="h-40" src="PayU.png" alt="pagos    " />
      </div>
    </div>
    <div class="flex items-center justify-center mt-8 md:mt-14">
      <div class="px-10 py-4 border border-primary">
        <div
          class="pb-4 text-lg sm:text-xl lg:text-2xl text-primary "
        >
          <h1 class="text-center">Pago de Libre Registro</h1>
        </div>
        <div class="grid mx-4 sm:grid-cols-2">
          <label class="flex justify-center md:justify-start md:ml-4 lg:text-lg">Identificación</label>
          <div class="flex justify-center">
            <input
              class="w-48 px-2 py-1 border rounded-lg focus:outline-none sm:w-56"
              type="text"
            />
          </div>
          <div v-if="inputErrorIdentificacion" class="flex justify-center sm:col-start-2 ">
            <label class="text-sm text-primary">Identificacion incorrecta</label>
          </div>
        </div>
        <div class="grid mx-4 mt-2 sm:grid-cols-2">
          <label class="flex justify-center md:justify-start md:ml-4 lg:text-lg">Cliente</label>
          <div class="flex justify-center">
            <input
              class="w-48 px-2 py-1 border rounded-lg focus:outline-none sm:w-56"
              type="text"
            />
          </div>
          <div v-if="inputErrorCliente" class="flex justify-center sm:col-start-2 ">
            <label class="text-sm text-primary">Cliente Error</label>
          </div>
        </div>
        <div class="grid mx-4 mt-2 sm:grid-cols-2">
          <label class="flex justify-center md:justify-start md:ml-4 lg:text-lg">Email</label>
          <div class="flex justify-center">
            <input
              class="w-48 px-2 py-1 border rounded-lg focus:outline-none sm:w-56"
              type="text"
            />
          </div>
          <div v-if="inputErrorEmail" class="flex justify-center sm:col-start-2 ">
            <label class="text-sm text-primary">Email incorrecto</label>
          </div>
        </div>
        <div class="grid mx-4 mt-2 sm:grid-cols-2">
          <label class="flex justify-center md:justify-start md:ml-4 lg:text-lg">Vr. Pagar</label>
          <div class="flex justify-center">
            <input
              class="w-48 px-2 py-1 border rounded-lg focus:outline-none sm:w-56"
              type="text"
            />
          </div>
          <div v-if="inputErrorPagar" class="flex justify-center sm:col-start-2 ">
            <label class="text-sm text-primary">Monto a pagar Incorrecto</label>
          </div>
        </div>
        

        <div class="flex justify-center mt-4">
          <ButtonCancel text="Cancelar" to="/" width="w-28"></ButtonCancel>
          <div class="ml-2">
            <button
              class="px-2 py-1 text-white border rounded-lg w-28 bg-primary border-primary"
            >
              Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputDisable from "@/components/inputs/inputDisable";
import ButtonCancel from "@/components/buttons/buttonCancel";
export default {
  components: {
    InputDisable,
    ButtonCancel
  },

  data() {
    return {
      inputErrorIdentificacion: true,
      inputErrorCliente: true,
      inputErrorEmail: true,
      inputErrorPagar: true
      
      
    }
  },
};
</script>

