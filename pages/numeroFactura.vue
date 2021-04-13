<template>
  <div class="mx-10 mt-4">
    <div class="mt-2 flex -ml-4 justify-center">
      <a href="http://www.balquimia.com">
        <img class="h-20" src="/logo.png" alt="Balquimia.com" />
      </a>
    </div>
    <div class="flex justify-center text-lg sm:text-xl text-primary border-t border-l border-r border-primary mt-10">
      <h1>Pago con su numero de Factura</h1>
    </div>
    <div class="border border-primary px-4 py-4">
      <div class="grid sm:grid-cols-2 mx-4">
        <label class="flex justify-center">Numero de Factura</label>
        <div class="flex justify-center">
          <input class="border rounded-lg px-2 py-1 focus:outline-none w-12 sm:w-16" type="text">
          <input class="border rounded-lg px-2 py-1 focus:outline-none w-36 sm:w-40" type="text">
        </div>
      </div>
      <div>
        <InputDisable
          text="Identificacion"
        ></InputDisable>
      </div>
      <div>
        <InputDisable
          text="Cliente"
        ></InputDisable>
      </div>
      <div>
        <InputDisable
          text="Email"
        ></InputDisable>
      </div>
      <div>
        <InputDisable
          text="Vr. Pagar"
        ></InputDisable>
      </div>

      <div class="mt-4 flex justify-center">
        <ButtonCancel
          text="Cancelar"
          to="/"
          width="w-28"
        ></ButtonCancel>
        <div class="ml-2">
          <button class="w-28 px-2 py-1 border rounded-lg bg-primary text-white border-primary">Pagar</button>
        </div>
      </div>  
      
    </div>
    
  </div>
</template>

<script>
import InputDisable from '@/components/inputs/inputDisable'
import ButtonCancel from '@/components/buttons/buttonCancel'
export default {
  components: {
    InputDisable,
    ButtonCancel
  }
}
</script>