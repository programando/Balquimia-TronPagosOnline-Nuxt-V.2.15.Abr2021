<template>
  <div>
      <div class="logo">
         <nuxt-link to="http://www.balquimia.com">
         <img src="/logo.png" alt="" />
         </nuxt-link>
         
      </div>
      <div class="titulo">
        <h2>Pagos en linea</h2>
      </div>
      <form> 
      <div class="">
        <div class="formulario1">
          
          <label class="label1">Identificación :</label>
            <span> Dato obligatorio</span>
          <input class="input1" type="text" id="nit"  v-model="formUser.nit"/>      
        </div>
        
        <div class="formulario1">
          <label class="label1">Empresa :</label>
          <input class="input1" type="text"  id="cliente" v-model="formUser.cliente"/>
        </div>
        <div class="formulario1">
          <label class="label1">Email : :</label>
          <input class="input1" type="email"  id="email" v-model="formUser.email" />
        </div>        
        <div class="formulario1">
          <label class="label1">Valor a pagar :</label>
          <input class="input1" type="text" id="valor" v-model="formUser.valor"/>
        </div>
      </div>
      <div class="container-boton">
          <button class="boton1" id="btnCancelar">Cancelar</button>
          <button class="boton1" id="btnPagar" @click.prevent="psePay">Pagar</button>
      </div>
    </form>
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

<style src="@/assets/styles.css"></style>
