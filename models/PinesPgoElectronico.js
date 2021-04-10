import Api  from "@/config/Axios";
 

export default {

      async buscarPin ( nro_pin ) {
        return Api.get('/pin/buscar', { params: { nro_pin } });
  },
  
  
 
 
}
