document.addEventListener("alpine:init",() =>{
    
       Alpine.data('pizzaCart', () => {
           return {
                tittle:'Pizza Cart API',
                pizzas:[],
                username: 'Mandisa2526',
                cartId: '',
                init() {
                    axios.get('https://pizza-api.projectcodex.net/api/pizzas').then(result => {
                        this.pizzas = result.data.pizzas
                        //console.log(result.data);
                         
                       // this.pizzas is declared on you AlpineJS Widget
                    })
                }
            }
       })


});