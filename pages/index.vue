<template>
  <div class="font-rale">
      <div class="mt-2 ml-20">
         <nuxt-link to="http://www.balquimia.com">
          <img src="/logo.png" alt="" />
         </nuxt-link>
      </div>

      <div class="flex justify-center text-2xl md:text-3xl lg:text-5xl ">
        <h2 class="text-primary">Pagos en línea</h2>
      </div>

      <form class="justify-center mx-4 mt-4 md:flex md:mx-10 lg:mt-10 lg:mx-16">
        <div class="hidden w-3/6 py-4 md:px-10 md:grid md:border-r-2 lg:border-none">
        <div class="flex justify-center">
          <div class="text-center md:mt-52 lg:mt-24">
            <label class="text-lg md:text-xl">Pin para pago electrónico</label>
            <input 
              v-model="pinValor"
              @change="errorPin=''"
              @blur="buscarPin"
              class="px-6 py-1 mt-2 text-2xl text-center border rounded-lg focus:outline-none lg:block w-72" type="text">
            <div>
              <p class="text-sm text-primary">{{ pinError}}</p>
            </div>
          </div>
        </div>
          
        </div>

        <div class="hidden w-3/6 py-4 md:grid md:px-10 lg:border-l-2">
          <div class="grid lg:grid-cols-2">
            <label class="mt-2 text-lg md:text-xl lg:ml-20">Identificación :</label>
            <input class="px-6 py-1 mt-2 border rounded-lg focus:outline-none w-72" type="text" id="nit"  v-model="formUser.nro_identif"/>
            <div class="lg:col-start-2">
              <p class="text-sm text-primary">{{ errorNit }}</p>
            </div>      
          </div>
          <div class="grid lg:grid-cols-2">
            <label class="mt-2 text-lg md:text-xl lg:ml-20">Cliente :</label>
            <input class="px-6 py-1 mt-2 border rounded-lg focus:outline-none w-72" type="text"  id="cliente" v-model="formUser.nom_full"/>
            <div class="lg:col-start-2">
              <p class="text-sm text-primary"> {{ errorCliente }}</p>
            </div>
          </div>
          <div class="grid lg:grid-cols-2">
            <label class="mt-2 text-lg md:text-xl lg:ml-20">Email :</label>
            <input class="px-6 py-1 mt-2 border rounded-lg focus:outline-none w-72 " type="email"  id="email" v-model="formUser.email" />
            <div class="lg:col-start-2">
              <p class="text-sm text-primary"  >{{ errorEmail }}</p>
            </div>
          </div>        
          
          <div class="grid lg:grid-cols-2">
            <label class="mt-2 text-lg md:text-xl lg:ml-20">Nro pedido :</label>
            <input class="px-6 py-1 mt-2 border rounded-lg focus:outline-none w-72" type="text" id="valor" v-model="formUser.idpedido"/>
 
          </div>
          <div class="grid lg:grid-cols-2">
            <label class="mt-2 text-lg md:text-xl lg:ml-20">Nro factura :</label>
            <div class="flex">
              <input class="inline w-16 px-4 py-1 mt-2 border rounded-lg focus:outline-none" type="text" v-model="formUser.prefFactura"/>
              <input class="w-56 px-4 py-1 mt-2 border rounded-lg focus:outline-none" type="text" id="valor" v-model="formUser.idFactura"/>
            </div>

 
          </div>
          <div class="grid lg:grid-cols-2">
            <label class="mt-2 text-lg md:text-xl lg:ml-20">Valor a pagar :</label>
            <input class="px-6 py-1 mt-2 text-xl text-right border rounded-lg focus:outline-none w-72" type="text" id="valor_pin" 
              v-on:keypress="numberFormat"
              v-model="formUser.valor_pin"/>
            <div class="lg:col-start-2">
              <p class="text-sm text-primary">{{ errorVrPagar }}</p>
            </div>
          </div>
        </div>

        <!-- Responsive, pantallas pequeñas I-->
   <div class="flex justify-center md:hidden">  
      <div class="block w-64 md:hidden group">
        <button
          @click.prevent="formPin = !formPin"
          class="flex items-center w-full px-3 py-1 bg-white border rounded-sm outline-none focus:outline-none min-w-32"
        >
          <span class="flex-1 pr-1">Pin para pago electrónico</span>
          
        </button>
        <div v-if="formPin"
          class="transition duration-150 ease-in-out"
        >
          <ul
          class="z-10 w-64 transition duration-150 ease-in-out origin-top bg-white border rounded-sm"
        >

          <li class="px-3 py-1 rounded-sm hover:bg-gray-100">
        
            <div class="grid py-2 text-center md:hidden">
              <label class="">Número de PIN</label>

            <input 
              v-model="pinValor"
              @change="errorPin=''"
              @blur="buscarPin"
              class="w-56 px-4 py-1 mt-2 text-xl text-center border rounded-lg focus:outline-none lg:block" type="text">
            <div>
              <p class="text-sm text-primary">{{ pinError}}</p>
            </div>
 
              
          </div>

          </li>
          <li class="px-3 py-1 rounded-sm hover:bg-gray-100">
            <div class="flex justify-center">
              <button class="px-4 py-1 mt-2 text-xl text-white border rounded-lg bg-primary" id="btnPagar" @click.prevent="psePay">Realizar pago</button>
            </div>

            <div class="flex justify-center">
             <BtnGoToBalquimia></BtnGoToBalquimia>
            </div>

          </li>
        </ul>
        </div>
        
      </div>
    </div>
    <!-- Fin Respnsive, pantallas pequeñas I -->




     <!-- Responsive, pantallas pequeñas II-->

  <div class="flex justify-center mb-10 md:hidden">
      <div class="block w-64 mt-4 md:hidden group">
        <button
          @click.prevent="formRegistro = !formRegistro"
          class="flex items-center w-full px-3 py-1 bg-white border rounded-sm outline-none focus:outline-none min-w-32"
        >
          <span class="flex-1 pr-1">Pago de libre registro</span>
          
        </button>
        <ul
          v-if="formRegistro"
          class="w-64 origin-top bg-white border rounded-sm"
        >

          <li class="px-3 py-1 rounded-sm hover:bg-gray-100">
            <div class="grid lg:grid-cols-2">
              <label class="mt-2 text-lg md:text-xl lg:ml-20">Identificación :</label>
              <input class="w-56 px-4 py-1 mt-2 border rounded-lg focus:outline-none" type="text" id="nit"  v-model="formUser.nro_identif"/>
              <div class="lg:col-start-2">
                <p class="text-sm text-primary">{{ errorNit }}</p>
              </div>      
            </div>
          
          </li>
          <li class="px-3 py-1 rounded-sm hover:bg-gray-100">
            <div class="grid lg:grid-cols-2">
              <label class="mt-2 text-lg md:text-xl lg:ml-20">Cliente :</label>
              <input class="w-56 px-4 py-1 mt-2 border rounded-lg focus:outline-none" type="text"  id="cliente" v-model="formUser.nom_full"/>
              <div class="lg:col-start-2">
                <p class="text-sm text-primary"> {{ errorCliente }}</p>
              </div>
            </div>
          </li>
          
          <li class="px-3 py-1 rounded-sm hover:bg-gray-100">
            <div class="grid lg:grid-cols-2">
              <label class="mt-2 text-lg md:text-xl lg:ml-20">Email :</label>
              <input class="w-56 px-4 py-1 mt-2 border rounded-lg focus:outline-none " type="email"  id="email" v-model="formUser.email" />
              <div class="lg:col-start-2">
                 <p class="text-sm text-primary"  >{{ errorEmail }}</p>
              </div>
            </div>        
          </li>
          
          <li class="px-3 py-1 rounded-sm hover:bg-gray-100">
            <div class="grid lg:grid-cols-2">
              <label class="mt-2 text-lg md:text-xl lg:ml-20">Nro pedido :</label>
              <input class="w-56 px-4 py-1 mt-2 border rounded-lg focus:outline-none" type="text" id="valor" v-model="formUser.idpedido"/>

            </div>
          </li>
          <li class="px-3 py-1 rounded-sm hover:bg-gray-100">
            <div class="grid lg:grid-cols-2">
              <label class="mt-2 text-lg md:text-xl lg:ml-20">Nro factura :</label>
              <div class="flex">
                <input class="inline w-16 px-4 py-1 mt-2 border rounded-lg focus:outline-none" type="text"/>
                <input class="w-40 px-4 py-1 mt-2 border rounded-lg focus:outline-none" type="text" id="valor" v-model="formUser.idFactura"/>
              </div>
              
 
            </div>
          </li>
          <li class="px-3 py-1 rounded-sm hover:bg-gray-100">
            <div class="grid lg:grid-cols-2">
              <label class="mt-2 text-lg md:text-xl lg:ml-20">Valor a pagar :</label>
              <input class="w-56 px-4 py-1 mt-2 border rounded-lg focus:outline-none" type="text" id="valor_pin" 
              v-on:keypress="numberFormat"
              v-model="formUser.valor_pin"/>
              <div class="lg:col-start-2">
                <p class="text-sm text-primary">{{ errorVrPagar }}</p>
              </div>
            </div>
          </li>
          <li class="px-3 py-1 rounded-sm hover:bg-gray-100">
            
            <div class="flex justify-center">
              <button class="px-4 py-1 mt-2 text-xl text-white border rounded-lg bg-primary" id="btnPagar" @click.prevent="psePay">Realizar pago</button>
            </div>
          <BtnGoToBalquimia></BtnGoToBalquimia>


          </li>
        </ul>
      </div>
    </div> 
 <!-- Fin Responsive, pantallas pequeñas II -->

    </form>
      <div class="justify-center hidden mt-20 space-x-5 md:flex md:mt-8 -ml-11">
        
         <BtnGoToBalquimia></BtnGoToBalquimia>

          <button class="px-4 py-1 text-xl text-white border rounded-lg bg-primary " id="btnPagar" @click.prevent="psePay">Realizar pago</button>    
    </div>
    <FormPsePay></FormPsePay>
 
  </div>
</template>

<script>
 import FormPsePay from   "@/components/psePayForm";
 import md5  from "md5";
 import PinesPgoElectronico from "@/models/PinesPgoElectronico";
 import BtnGoToBalquimia from "@/components/buttonGoToBalquimia";
export default {
  components: { FormPsePay, BtnGoToBalquimia },
    data:  ()=> ({
          formPin: false,
          formRegistro: false,
          formUser : {
                  nro_identif:'',
                  nom_full:'',
                  email:'',
                  valor_pin:'',
                  idpedido:'',
                  prefFactura:'',
                  idFactura:'',
                  valor_pin:''
          },
          pinValor:'2104026',
          pinError:'',
          errorNit:'',
          errorCliente:'',
          errorEmail:'',
          errorVrPagar:''
  }),
 
  mounted() {
      this.numberFormat();
  },

  methods: {
          buscarPin() {
               this.pinError = '';
               this.reiniciarForm();
              PinesPgoElectronico.buscarPin ( this.pinValor)
              .then( response => {
                  if (!response.data || response.data.length == 0) {
                    this.pinError = 'Número de PIN no encontrado!';
                    this.reiniciarForm();
                    return ;
                  }
                  let Data = response.data[0];
                  this.formUser.nro_identif = Data.nro_identif;
                  this.formUser.nom_full    = Data.nom_full;
                  this.formUser.email       = Data.email;
                  this.formUser.valor_pin   = Data.valor_pin.toLocaleString() ;
              })
          },
          reiniciarForm () {
                this.formUser.nro_identif = '';
                this.formUser.nom_full    = '';
                this.formUser.email       = '';
                this.formUser.valor_pin   = '';
                this.errorNit             = '';
                this.errorCliente         = '';
                this.errorEmail           = '';
                this.errorVrPagar         = '';
          },
          psePay() {
            let getErrors= this.dataValidation();
            if ( getErrors === true  ) {
              return ;
            }
            let valorPIN = parseInt(this.formUser.valor_pin.replace(/\./g, '') ) ;

            document.getElementById('description').value   = this.getIdPedido();
            document.getElementById('amount').value        = valorPIN;
            document.getElementById('payerFullName').value = this.formUser.nom_full;
            document.getElementById('buyerEmail').value    = this.formUser.email;
            document.getElementById('payerDocument').value = this.formUser.nro_identif;
            document.getElementById('referenceCode').value = this.formUser.nro_identif;
            document.getElementById('signature').value     = this.signatureMD5( valorPIN );
            document.psePayForm.submit();      

          },

         signatureMD5( valorPIN) {
            let nit       = this.formUser.nro_identif +"~";
            let signature = process.env.SIGNATURE + nit + valorPIN +  "~COP";
            return md5( signature);
         } ,

         getIdPedido() {
            if ( this.formUser.idpedido.length > 0 ) {
                return 'PED'+this.formUser.idpedido;
            }else {
                return 'NIT'+this.formUser.nro_identif;
            }
         },

         dataValidation() {
            let getError=false;
            this.formUser.nom_full = this.formUser.nom_full.replace(/[^a-zA-Z ]/g, " ")

            if ( this.formUser.nro_identif.length==0){
               this.errorNit ='Identificación es un dato obligatorio';
                getError = true;
            }
            if ( this.formUser.nom_full.length==0){
               this.errorCliente ='Nombre de cliente  es un dato obligatorio';
                getError = true;
            }   
            if ( this.formUser.email.length==0){
               this.errorEmail ='Email de clientes es un dato obligatorio';
                getError = true;
            }    
            if ( this.formUser.valor_pin.length==0){
                 this.errorVrPagar ='No ha registrado el valor a pagar';
                getError = true;            
            }
            return getError;
         },

         numberFormat ( ) {
            var separador = document.getElementById('valor_pin');

            separador.addEventListener('input', (e) => {
                var entrada = e.target.value.split(','),
                  parteEntera = entrada[0].replace(/\./g, ''),
                  parteDecimal = entrada[1],
                  salida = parteEntera.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                  
                e.target.value = salida + (parteDecimal !== undefined ? ',' + parteDecimal : '');
            }, false);
         }


  },

  
 
}
</script>

<style>
  

  .group:hover .group-hover\:scale-100 {transform: rotate(180deg) }
  .group:hover .group-hover\:-rotate-180 {transform: rotate(180deg)  }
  .scale-0 { transform: scale(0) }
  .min-w-32 { min-width: 8rem }
</style>
