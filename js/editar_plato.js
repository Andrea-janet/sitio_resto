console.log(location.search)
var id=location.search.substr(4)


const { createApp } = Vue
  createApp({
    data() {
      return {
        url:'https://andreaangel70.pythonanywhere.com/platos'+"/"+id,
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
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id
                    this.nombre = data.nombre;
                    this.descripcion=data.descripcion
                    this.foto=data.foto
                    this.precio=data.precio                    
                })
                .catch(err => {
                    console.error(err);
                })
        },
        editar() {
            let plato = {
                nombre:this.nombre,
                descripcion: this.descripcion,
                precio: this.precio,
                foto: this.foto
            }
            var opt = {
                method: 'PUT',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(plato),
            }
            fetch(this.url, opt)
                .then(function () {
                    alert("Cambios guardados ✔")
                    window.location.href = "./bk_carta.html";      
                })
                .catch(error => {
                    console.error(error);
                    alert("🚫 No fue posible modificar. Intentalo otra vez.")
                })      
        }
    },
    created() {
        this.fetchDatos(this.url)
    },
  }).mount('#app')