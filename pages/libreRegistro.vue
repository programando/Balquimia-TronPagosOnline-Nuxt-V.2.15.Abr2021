<template>
  <div class="mx-10 mt-4">
    <div class="mt-2 flex -ml-4 justify-center">
      <a href="http://www.balquimia.com">
        <img class="h-20" src="/logo.png" alt="Balquimia.com" />
      </a>
    </div>
    <div class="flex justify-center text-lg sm:text-xl text-primary border-t border-l border-r border-primary mt-10">
      <h1>Pago Libre Registro</h1>
    </div>
    <div class="border border-primary px-4 py-4">
      <div class="grid sm:grid-cols-2 mx-4">
        <label class="flex justify-center">Identificacion</label>
        <div class="flex justify-center">
          <input class="border rounded-lg px-2 py-1 focus:outline-none w-48 sm:w-56" type="text">
        </div>
      </div>
      <div class="grid sm:grid-cols-2 mx-4">
        <label class="flex justify-center">Email</label>
        <div class="flex justify-center">
          <input class="border rounded-lg px-2 py-1 focus:outline-none w-48 sm:w-56" type="text">
        </div>
      </div>
      <div class="grid sm:grid-cols-2 mx-4">
        <label class="flex justify-center">Cliente</label>
        <div class="flex justify-center">
          <input class="border rounded-lg px-2 py-1 focus:outline-none w-48 sm:w-56" type="text">
        </div>
      </div>
      <div class="grid sm:grid-cols-2 mx-4">
        <label class="flex justify-center">Vr. Pagar</label>
        <div class="flex justify-center">
          <input class="border rounded-lg px-2 py-1 focus:outline-none w-48 sm:w-56" type="text">
        </div>
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