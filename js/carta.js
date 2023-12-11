const { createApp } = Vue
  createApp({
    data() {
      return {
        url:'https://andreaangel70.pythonanywhere.com/platos',
        error:false,
        carta:[],
        id:0,
        nombre:"",
        foto:"",
        precio:0,
        descripcion:""
    }  
    },
    methods: {
        fetchDatos(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.carta = data;
                })
                .catch(er => {
                    console.error(er);
                })
        },
        eliminar(plato_id) {
            const url = this.url+'/' + plato_id;
            fetch(url, {method: 'DELETE'})
                .then(res => res.text())
                .then(res => {
			 alert('Se eliminó el plato 🍽')
                    window.location.reload();
                })
        },
        subir_plato(){
            let plato = {
                nombre:this.nombre,
                precio:this.precio,
                foto:this.foto,
                descripcion:this.descripcion
            }
            var opt = {
                method: 'POST',
                body:JSON.stringify(plato),
                headers: { 'Content-Type': 'application/json' }
            }
            fetch(this.url, opt)
                .then(function () { //funcion callback
                    alert("Se subió tu plato")
                    window.location.href = "./bk_carta.html";
                })
                .catch(er => {
                    console.error(er);
                })      
        }
    },
    created() {
        this.fetchDatos(this.url)
    },
  }).mount('#app')
