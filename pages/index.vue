<template>
  <div class="font-rale">
      <div class="ml-20 mt-2">
         <nuxt-link to="http://www.balquimia.com">
          <img src="/logo.png" alt="" />
         </nuxt-link>
      </div>
      <div class="flex justify-center text-2xl mt-4 md:text-3xl lg:text-5xl ">
        <h2 class="text-primary">Pagos en linea</h2>
      </div>
      <form class="md:flex mx-4 md:mx-10 mt-4 lg:mt-10 lg:mx-16 justify-center">
        <div class="hidden md:px-10 py-4 md:grid  md:border-r-2 lg:border-none w-3/6">
        <div class="flex justify-center">
          <div class="md:mt-52 lg:mt-24">
            <label class="text-lg md:text-xl">Pin para pago electronico</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none focus:border-primary lg:block mt-2 w-72" type="text">
            <div>
              <p class="text-primary">Texto de error</p>
            </div>
          </div>
        </div>
        </div>

        <div class="hidden md:grid md:px-10 py-4  lg:border-l-2 w-3/6">
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Identificación :</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none focus:border-primary mt-2 w-72" type="text" id="nit"  v-model="formUser.nit"/>
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>      
          </div>
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Empresa :</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none focus:border-primary mt-2 w-72" type="text"  id="cliente" v-model="formUser.cliente"/>
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>
          </div>
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Email :</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none focus:border-primary mt-2 w-72 " type="email"  id="email" v-model="formUser.email" />
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>
          </div>        
          
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Nro pedido :</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none focus:border-primary mt-2 w-72" type="text" id="valor" v-model="formUser.valor"/>
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>
          </div>
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Nro factura :</label>
            <div class="flex">
              <input class="px-4 py-1 rounded-lg  border focus:outline-none focus:border-primary mt-2 inline w-16" type="text"/>
              <input class="px-4 py-1 rounded-lg  border focus:outline-none focus:border-primary mt-2 w-56" type="text" id="valor" v-model="formUser.valor"/>
            </div>
            
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>
          </div>
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Valor a pagar :</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none focus:border-primary mt-2 w-72" type="text" id="valor" v-model="formUser.valor"/>
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>
          </div>
        </div>

        <!-- Responsive, pantallas pequeñas -->
     <div class="flex justify-center md:hidden">  
      <div class="md:hidden group block">
        <div
          class="w-full outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center justify-center"
        >
          <span class="pr-1 text-lg">Pin para pago electronico</span>
        </div>
        <div 
          class="transition duration-150 ease-in-out"
        >
          <ul
          class="bg-white border rounded-sm  
          transition duration-150 ease-in-out origin-top z-10 "
        >

          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="grid grid-cols-3 mt-2">
              <label class="mr-2 sm:text-lg sm:ml-4">Numero de Pin</label>
              <input class="px-2  rounded-lg  border focus:outline-none focus:border-primary w-48 sm:w-56" type="text"> 
            </div>
              <div class="flex justify-center">
                <p class="text-primary">Texto de error</p>
              </div>
          </li>
        </ul>
        </div>
        
      </div>
    </div>
    <div class="flex justify-center md:hidden mb-4">
      <div class="md:hidden group block mt-4 ">
        <div
          class="w-full border px-3 py-1 bg-white rounded-sm flex items-center justify-center"
        >
          <span class="pr-1 text-lg">Pago libre registro</span>
        </div>
        <ul
          class="bg-white border rounded-sm origin-top "
        >
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="grid grid-cols-3">
              <label class="mt-2 sm:text-lg sm:ml-4">Identificación :</label>
              <input class="px-2 rounded-lg  border focus:outline-none focus:border-primary mt-2 w-48 sm:w-56" type="text" id="nit"  v-model="formUser.nit"/>
            </div>
            <div class="flex justify-center">
              <p class="text-primary">Texto de error</p>
            </div>      
          </li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="grid grid-cols-3">
              <label class="sm:text-lg sm:ml-4 mt-2 mr-2">Empresa :</label>
              <input class="px-2 rounded-lg  border focus:outline-none focus:border-primary mt-2 w-48 sm:w-56" type="text"  id="cliente" v-model="formUser.cliente"/>
            </div>
            <div class="flex justify-center">
                <p class="text-primary">Texto de error</p>
            </div>
          </li>
          
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="grid grid-cols-3">
              <label class="mt-2 sm:text-lg sm:ml-4">Email :</label>
              <input class="px-2 rounded-lg border focus:outline-none focus:border-primary mt-2 w-48 sm:w-56" type="email"  id="email" v-model="formUser.email" />
            </div>
            <div class="flex justify-center">
                <p class="text-primary">Texto de error</p>
            </div>    
          </li>
          
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="grid grid-cols-3">
              <label class="mt-2 sm:text-lg sm:ml-4">Nro pedido :</label>
              <input class="px-2 rounded-lg  border focus:outline-none focus:border-primary mt-2 w-48 sm:w-56" type="text" id="valor" v-model="formUser.valor"/>
            </div>
            <div class="flex justify-center">
              <p class="text-primary">Texto de error</p>
            </div>
          </li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="grid grid-cols-3">
              <label class="mt-2 sm:text-lg sm:ml-4">Nro factura :</label>
              <div class="flex">
                <input class="px-2 rounded-lg  border focus:outline-none focus:border-primary mt-2 inline w-12 sm:w-16" type="text"/>
                <input class="px-2 rounded-lg  border focus:outline-none focus:border-primary mt-2 w-36 sm:w-40" type="text" id="valor" v-model="formUser.valor"/>
              </div>
            </div>
            <div class="flex justify-center">
                <p class="text-primary">Texto de error</p>
            </div>
          </li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="grid grid-cols-3">
              <label class="mt-2 sm:text-lg sm:ml-4">Valor a pagar :</label>
              <input class="px-2 rounded-lg  border focus:outline-none focus:border-primary mt-2 w-48 sm:w-56" type="text" id="valor" v-model="formUser.valor"/>
            </div>
            <div class="flex justify-center">
              <p class="text-primary">Texto de error</p>
            </div>
          </li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="flex justify-center  space-x-5">
              <button class="border w-40 px-2 rounded-lg text-lg bg-primary text-white " id="btnCancelar">Cancelar Proceso</button>
            </div>
            <div class="flex justify-center mt-2  space-x-5">
              <button class="border w-40 px-2 rounded-lg text-lg bg-primary text-white " id="btnPagar" @click.prevent="psePay">Pagar Pago</button>    
            </div>
          </li>
        </ul>
        
      </div>
    </div>
    </form>
    <div class="md:flex hidden justify-center  mt-20 md:mt-4 -ml-11 space-x-5">
      <button class="border px-4 py-1 rounded-lg text-xl bg-primary text-white " id="btnCancelar">Cancelar Proceso</button>
      <button class="border px-4 py-1 rounded-lg text-xl bg-primary text-white " id="btnPagar" @click.prevent="psePay">Pagar Pago</button>    
    </div>
    <FormPsePay></FormPsePay>


     

   
  </div>
</template>

<script>
 import FormPsePay from   "@/components/psePayForm";
 import md5  from "md5";
export default {
  components: { FormPsePay },
    data:  ()=> ({
          formPin: false,
          formRegistro: false,

          formUser : {
                  nit:'',
                  cliente:'',
                  email:'',
                  valor:''
          },
  }),
 
  methods: {
          psePay() {
            let validacion= this.dataValidation();
            if ( validacion === false  ) {
              alert("dldl");
              return ;
            }
            
            document.getElementById('description').value   = 'PED' + this.formUser.nit;
            document.getElementById('amount').value        = this.formUser.valor;
            document.getElementById('payerFullName').value = this.formUser.cliente;
            document.getElementById('buyerEmail').value    = this.formUser.email;
            document.getElementById('payerDocument').value = this.formUser.nit;
            document.getElementById('referenceCode').value = this.formUser.nit;
            document.getElementById('signature').value     = this.signatureMD5();
            //document.psePayForm.submit();      

          },

         signatureMD5() {
            let nit       = this.formUser.nit +"~";
            let valor     = this.formUser.valor;
            let signature = process.env.SIGNATURE + nit + valor +  "~COP";
            return md5( signature);
         } ,

         dataValidation() {
            let message='';
            if ( this.formUser.nit.length==0){
                message ='';
            }
         },


  },

  
 
}
</script>

<style>
  

  .group:hover .group-hover\:scale-100 {transform: rotate(180deg) }
  .group:hover .group-hover\:-rotate-180 {transform: rotate(180deg)  }
  .scale-0 { transform: scale(0) }
  .min-w-32 { min-width: 8rem }
</style>
