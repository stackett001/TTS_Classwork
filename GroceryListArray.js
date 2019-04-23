var shopList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
shopList.push('fruit loops');
shopList.splice(4, 1, "fair trade coffee");
 console.log(shopList[4]);
 shopList.splice(2, 2, "rice", "beans");
 console.log(shopList);
 var shopCart = [];

 shopCart.push(shopList.pop()); 
 shopCart.push(shopList.shift());       

 while(shopList.length !== 0)  
   shopCart.push(shopList.pop());        
 console.log(shopCart);

 shopCart.sort().reverse();
 console.log(shopCart);