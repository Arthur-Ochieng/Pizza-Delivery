var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function(){
    $("button.proceed").click(function(event){
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = $("#toppings option:selected").val();
    });
    switch(psize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1300;
           console.log(price);
         break;
         case "medium":
           price = 900;
           console.log("The price is "+price);
         break;
         case "small":
           price = 600;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pcrust){
          case "0":
            crust_price = 0;
          break;
          case "Cheese Stuffed crust":
            crust_price = 200;
          break;
          case "Pizza Bagels":
            crust_price = 150;
          break;
          case "Sicilian style":
            crust_price = 180;
          break;
          case "Neapolitan style":
            crust_price = 180;
          break;
          case "Gluten free":
            crust_price = 180;
          break;
          default:
            console.log("No price"); 
        }
        switch(ptopping){
            case "0":
                topping_price= 0;
            break;
            case "Pepperoni":
                topping_price= 200;
            break;
            case "Mushrooms":
                topping_price = 150;
            break;
            case "Onions":
                topping_price = 180;
            break;
            case "Bacon":
                topping_price = 180;
            break;
            case "Extra Cheese":
                topping_price = 180;
            break;
            case "Sicilian style":
                topping_price = 180;
            break;
            case "Neapolitan style":
                topping_price = 180;
            break;
            case "Gluten free":
                topping_price = 180;
            break;
            default:
              console.log("No price"); 
          }
});