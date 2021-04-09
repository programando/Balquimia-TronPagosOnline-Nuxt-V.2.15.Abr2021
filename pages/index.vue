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
          <div class="md:mt-52 lg:mt-24 grid md:block lg:pl-16 xl:pl-24">
            <label class="text-lg md:text-xl">Pin para pago electronico</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none lg:block mt-2 w-72" type="text">
            <div>
              <p class="text-primary">Texto de error</p>
            </div>
          </div>
        </div>

        <div class="hidden md:grid md:px-10 py-4  lg:border-l-2 w-3/6">
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Identificación :</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none mt-2 w-72" type="text" id="nit"  v-model="formUser.nit"/>
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>      
          </div>
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Empresa :</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none mt-2 w-72" type="text"  id="cliente" v-model="formUser.cliente"/>
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>
          </div>
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Email :</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none mt-2 w-72 " type="email"  id="email" v-model="formUser.email" />
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>
          </div>        
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Valor a pagar :</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none mt-2 w-72" type="text" id="valor" v-model="formUser.valor"/>
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>
          </div>
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Nro pedido :</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none mt-2 w-72" type="text" id="valor" v-model="formUser.valor"/>
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>
          </div>
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Nro factura :</label>
            <div class="flex">
              <input class="px-4 py-1 rounded-lg  border focus:outline-none mt-2 inline w-16" type="text"/>
              <input class="px-4 py-1 rounded-lg  border focus:outline-none mt-2 w-56" type="text" id="valor" v-model="formUser.valor"/>
            </div>
            
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>
          </div>
        </div>

        <!-- Responsive, pantallas pequeñas -->
     <div class="flex justify-center md:hidden">  
      <div class="md:hidden group block w-64">
        <button
          class="w-full outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
        >
          <span class="pr-1  flex-1">Pin para pago electronico</span>
          <span>
            <svg
              class="fill-current h-4 w-4 transform group-hover:-rotate-180
              transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </span>
        </button>
        <ul
          class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top z-10 w-64"
        >

          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="md:hidden py-2 grid">
              <label class="">Pin para pago electronico</label>
              <input class="px-4 py-1 rounded-lg  border focus:outline-none lg:block mt-2 w-56" type="text">
              <div>
                  <p class="text-primary">Texto de error</p>
              </div>
          </div>
          </li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="flex justify-center">
              <button class="border px-4 py-1 rounded-lg text-xl bg-primary text-white mt-2" id="btnCancelar">Cancelar Proceso</button>
            </div>
            <div class="flex justify-center">
              <button class="border px-4 py-1 rounded-lg text-xl bg-primary text-white mt-2" id="btnPagar" @click.prevent="psePay">Pagar Pago</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center md:hidden mb-10">
      <div class="md:hidden group block mt-4 w-64">
        <button
          class="w-full outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
        >
          <span class="pr-1  flex-1">Pago libre registro</span>
          <span>
            <svg
              class="fill-current h-4 w-4 transform group-hover:-rotate-180
              transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </span>
        </button>
        <ul
          class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top w-64"
        >

          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="grid lg:grid-cols-2">
              <label class="text-lg md:text-xl lg:ml-20 mt-2">Identificación :</label>
              <input class="px-4 py-1 rounded-lg  border focus:outline-none mt-2 w-56" type="text" id="nit"  v-model="formUser.nit"/>
              <div class="lg:col-start-2">
                <p class="text-primary">Texto de error</p>
              </div>      
            </div>
          
          </li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="grid lg:grid-cols-2">
              <label class="text-lg md:text-xl lg:ml-20 mt-2">Empresa :</label>
              <input class="px-4 py-1 rounded-lg  border focus:outline-none mt-2 w-56" type="text"  id="cliente" v-model="formUser.cliente"/>
              <div class="lg:col-start-2">
                <p class="text-primary">Texto de error</p>
              </div>
            </div>
          </li>
          
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="grid lg:grid-cols-2">
              <label class="text-lg md:text-xl lg:ml-20 mt-2">Email :</label>
              <input class="px-4 py-1 rounded-lg  border focus:outline-none mt-2 w-56 " type="email"  id="email" v-model="formUser.email" />
              <div class="lg:col-start-2">
                <p class="text-primary">Texto de error</p>
              </div>
            </div>        
          </li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="grid lg:grid-cols-2">
              <label class="text-lg md:text-xl lg:ml-20 mt-2">Valor a pagar :</label>
              <input class="px-4 py-1 rounded-lg  border focus:outline-none mt-2 w-56" type="text" id="valor" v-model="formUser.valor"/>
              <div class="lg:col-start-2">
                <p class="text-primary">Texto de error</p>
              </div>
            </div>
          </li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="grid lg:grid-cols-2">
              <label class="text-lg md:text-xl lg:ml-20 mt-2">Nro pedido :</label>
              <input class="px-4 py-1 rounded-lg  border focus:outline-none mt-2 w-56" type="text" id="valor" v-model="formUser.valor"/>
              <div class="lg:col-start-2">
                <p class="text-primary">Texto de error</p>
              </div>
            </div>
          </li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="grid lg:grid-cols-2">
              <label class="text-lg md:text-xl lg:ml-20 mt-2">Nro factura :</label>
              <div class="flex">
                <input class="px-4 py-1 rounded-lg  border focus:outline-none mt-2 inline w-16" type="text"/>
                <input class="px-4 py-1 rounded-lg  border focus:outline-none mt-2 w-40" type="text" id="valor" v-model="formUser.valor"/>
              </div>
              
              <div class="lg:col-start-2">
                <p class="text-primary">Texto de error</p>
              </div>
            </div>
          </li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <div class="flex justify-center">
              <button class="border px-4 py-1 rounded-lg text-xl bg-primary text-white mt-2" id="btnCancelar">Cancelar Proceso</button>
            </div>
            <div class="flex justify-center">
              <button class="border px-4 py-1 rounded-lg text-xl bg-primary text-white mt-2" id="btnPagar" @click.prevent="psePay">Pagar Pago</button>
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
  
  li>ul                 { transform: translatex(100%) scale(0) }
  li:hover>ul           { transform: translatex(101%) scale(1) }
  li > button svg       { transform: rotate(-90deg) }
  li:hover > button svg { transform: rotate(-270deg) }

  .group:hover .group-hover\:scale-100 { transform: scale(1) }
  .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
  .scale-0 { transform: scale(0) }
  .min-w-32 { min-width: 8rem }
</style>
