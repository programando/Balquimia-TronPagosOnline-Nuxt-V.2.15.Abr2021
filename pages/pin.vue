<template>
  <div class="mx-10 mt-4">

    <div class="flex justify-center mt-2 -ml-4 md:justify-around md:ml-4 md:mt-8"  >
      <a href="http://www.balquimia.com">
        <img class="mt-4 h-28 " src="/logo.png" alt="Balquimia.com" />
      </a>
      <div class="hidden lg:block">
        <img class="h-28" src="PayU.png" alt="pagos    " />
      </div>
    </div>

    <div class="flex items-center justify-center mt-8 md:mt-14">
      <div class="px-10 py-4 border border-primary">
        <div class="pb-4 text-lg sm:text-xl lg:text-2xl text-primary ">
          <h1 class="text-center">Pago con número de PIN</h1>
        </div>
        <div class="grid mx-4 sm:grid-cols-2">
          <label class="flex justify-center md:justify-start md:ml-4 lg:text-lg"
            >Número de Pin :</label
          >
          <div class="flex justify-center">
            <input
              @blur="buscarPin"
              class="w-48 px-2 py-1 border rounded-lg focus:outline-none sm:w-56 pocision"
              type="text" v-model="pin"
            />
          </div>
        </div>
         <div class="mt-2">
          <InputDisable v-model="formUser.nro_identif" text="Identificación :" ></InputDisable>
        </div>  
         <div class="mt-2">
          <InputDisable text="Cliente :" v-model="formUser.nom_full"></InputDisable>
        </div>
        <div class="mt-2">
          <InputDisable text="Email :" v-model="formUser.email"></InputDisable>
        </div>
        <div class="mt-2">
          <InputDisable text="Vr. a pagar:" v-model="formUser.valor_pagar"></InputDisable>
        </div> 

        <div class="flex justify-center mt-4">
          <ButtonCancel text="Cancelar" to="/" width="w-28"></ButtonCancel>
          <div class="ml-2">  
            
            <button class="px-2 py-1 text-white border rounded-lg w-28 bg-primary border-primary">
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
import PinesPgoElectronico from "@/models/PinesPgoElectronico";
export default {
  components: { InputDisable, ButtonCancel },
  data: ()=>  ({
        pin :'2104031',
          formUser : {
              nro_identif:'94491178',
              nom_full:'',
              email:'',
              valor_pagar:'',
          },
  }),

    methods: {
          buscarPin() {
               this.pinError = '';
                
              PinesPgoElectronico.buscarPin ( this.pin)
              .then( response => {
                  if (!response.data || response.data.length == 0) {
                    this.pinError = 'Número de PIN no encontrado!';
                     
                    return ;
                  }
                  let Data = response.data[0];
                  this.formUser.nro_identif = Data.nro_identif;
                  this.formUser.nom_full    = Data.nom_full;
                  this.formUser.email       = Data.email;
                  this.formUser.valor_pin   = Data.valor_pin.toLocaleString() ;
              })
          },
    },
}
</script>

<style>
.pocision {
  direction: rtl;
}
</style>
