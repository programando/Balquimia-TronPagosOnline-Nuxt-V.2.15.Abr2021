<template>
  <div class="mx-10 mt-4">
    <div class="flex justify-center mt-2 -ml-4">
      <a href="http://www.balquimia.com">
        <img class="h-20" src="/logo.png" alt="Balquimia.com" />
      </a>
    </div>
    <div class="flex justify-center mt-10 text-lg border-t border-l border-r sm:text-xl text-primary border-primary">
      <h1>Pago Libre Registro</h1>
    </div>
    <div class="px-4 py-4 border border-primary">
      <div class="grid mx-4 sm:grid-cols-2">
        <label class="flex justify-center">Identificación</label>
        <div class="flex justify-center">
          <input class="w-48 px-2 py-1 border rounded-lg focus:outline-none sm:w-56" type="text">
        </div>
      </div>
      <div class="grid mx-4 sm:grid-cols-2">
        <label class="flex justify-center">Email</label>
        <div class="flex justify-center">
          <input class="w-48 px-2 py-1 border rounded-lg focus:outline-none sm:w-56" type="text">
        </div>
      </div>
      <div class="grid mx-4 sm:grid-cols-2">
        <label class="flex justify-center">Cliente</label>
        <div class="flex justify-center">
          <input class="w-48 px-2 py-1 border rounded-lg focus:outline-none sm:w-56" type="text">
        </div>
      </div>
      <div class="grid mx-4 sm:grid-cols-2">
        <label class="flex justify-center">Vr. Pagar</label>
        <div class="flex justify-center">
          <input class="w-48 px-2 py-1 border rounded-lg focus:outline-none sm:w-56" type="text">
        </div>
      </div>
      

      <div class="flex justify-center mt-4">
        <ButtonCancel
          text="Cancelar"
          to="/"
          width="w-28"
        ></ButtonCancel>
        <div class="ml-2">
          <button class="px-2 py-1 text-white border rounded-lg w-28 bg-primary border-primary">Pagar</button>
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