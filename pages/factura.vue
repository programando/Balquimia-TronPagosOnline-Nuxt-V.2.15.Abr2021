<template>
  <div class="mx-10 mt-4">
    <div
      class="flex justify-center mt-2 -ml-4 md:justify-around md:ml-4 md:mt-8"
    >
      <a href="http://www.balquimia.com">
        <img
          class="h-24 mt-4"
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
          <h1 class="text-center">Pago con su numero de Factura</h1>
        </div>
        <div class="grid mx-4 sm:grid-cols-2">
          <label class="flex justify-center lg:text-lg md:justify-start md:ml-4">Numero de Factura</label>
          <div class="flex justify-center">
            <input
              class="w-12 px-2 py-1 border rounded-lg focus:outline-none sm:w-16 pocision"
              type="text"
            />
            <input
              class="px-2 py-1 border rounded-lg w-36 focus:outline-none sm:w-40 pocision"
              type="text"
            />
          </div>
        </div>
        <div class="mt-2">
          <InputDisable text="Identificacion"></InputDisable>
        </div>
        <div class="mt-2">
          <InputDisable text="Cliente"></InputDisable>
        </div>
        <div class="mt-2">
          <InputDisable text="Email"></InputDisable>
        </div>
        <div class="mt-2">
          <InputDisable text="Vr. Pagar"></InputDisable>
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
  }
};
</script>

<style>
.pocision {
  direction: rtl;
}
</style>