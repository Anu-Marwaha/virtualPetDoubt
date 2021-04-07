class Food{
    constructor(){
        this.foodStock = null
        this.image=loadImage("images/Milk.png");
    }
    display(){
        var x=80,y=100;

         imageMode(CENTER);
         //image(this.image,720,220,70,70);
         if (this.foodStock!=0) {
             for (var i = 0; i < this.foodStock; i++) {
                 if (i%10==0) {
                     x=80;
                     y=y+50;
                 }
                 image(this.image,x,y,50,50);
                 x=x+30;
             }
         }
    }

   
     getFoodStock(){
        var reference  =  await database.ref('FoodStock').once("value");
        if(reference.exists()){
          reference.on("value",(data)=>{
          this.foodStock =   data.val(); // here i am getting value from data base 

          });

    }
    
      console.log("value in getFoodstock function="+this.foodStock); // at this time it display the value
      }
      
    addFood(){
        this.foodStock++;
        console.log("add food= "+ this.foodStock);
        database.ref('/').update({
          FoodStock:this.foodStock
        });
      }
      
    updateFood(foodS){
        database.ref('/').update({
          FoodStock:foodS
        });
      }
    }