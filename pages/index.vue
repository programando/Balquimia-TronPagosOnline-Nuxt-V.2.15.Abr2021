<template>
  <div class="font-rale">
      <div class="ml-10 mt-2">
         <nuxt-link to="http://www.balquimia.com">
         <img src="/logo.png" alt="" />
         </nuxt-link>
      </div>
      <div class="flex justify-center text-lg md:text-2xl lg:text-4xl ">
        <h2 class="text-primary">Pagos en linea</h2>
      </div>
      <form class="md:flex mx-4 md:mx-10 lg:mt-10 lg:mx-16 justify-center">
        <div class="mx-10 my-4 grid md:block md:mx-20">
          <div class="md:mt-24 lg:mt-12 grid md:block">
            <label class="text-lg md:text-xl">Pin para pago electronico</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none lg:block mt-2" type="text">
            <div>
              <p class="text-primary">Texto de error</p>
            </div>
            <div class="md:mt-64 lg:mt-40 flex justify-start mt-2 lg:justify-end">
              <button class="border px-4 py-1 rounded-lg text-xl bg-primary text-white" id="btnCancelar">Cancelar Proceso</button>
            </div>
          </div>
        </div>
        <div class="my-4 mx-10">
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Identificación :</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none mt-2 " type="text" id="nit"  v-model="formUser.nit"/>
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>      
          </div>
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Empresa :</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none mt-2 " type="text"  id="cliente" v-model="formUser.cliente"/>
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>
          </div>
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Email :</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none mt-2 " type="email"  id="email" v-model="formUser.email" />
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>
          </div>        
          <div class="grid lg:grid-cols-2">
            <label class="text-lg md:text-xl lg:ml-20 mt-2">Valor a pagar :</label>
            <input class="px-6 py-1 rounded-lg  border focus:outline-none mt-2 " type="text" id="valor" v-model="formUser.valor"/>
            <div class="lg:col-start-2">
              <p class="text-primary">Texto de error</p>
            </div>
          </div>
          <div class="flex justify-start mt-9 lg:justify-end lg:mt-9">
            <button class="border px-4 py-1 rounded-lg text-xl bg-primary text-white" id="btnPagar" @click.prevent="psePay">Pagar Pago</button>
          </div>
        </div>      
    </form>
    <div class="flex justify-center">
          
          
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

</style>
