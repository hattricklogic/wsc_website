 /*
Author: Rob Thomas 
Created: Nov 22, 2018 
Module: Client-side API  

Description: This is a client side api used to create  
             and update the product list for the site.
             This will allow user to add items to a cart, 
             essentially staging items for purchasing later.  
 */ 

var Total = 0.00;

$(function () {
    $( "#price, #qty" ).blur(() => {
            let total = $("#price").val() * $("#qty").val();
            Total = parseFloat(total); 
            $("#total").text("$" + parseFloat(total).toFixed(2));
      });

      $( "#paymentType, #cb" ).change(() => {

        pymt = $("#paymentType").val();
          
          if (pymt === "COD"){
            let total_ = Total * .10; 
            total_ = Total + total_;
            console.log(total_);
            $("#total").text("$" + parseFloat(total_).toFixed(2));
          } else {
            $("#total").text("$" + parseFloat(Total).toFixed(2));
          }
        
          checked = $("#cb").is(":checked");
          if (checked){
              $('.billing1').css("opacity", 0);
          } else {
            $('.billing1').css("opacity", 1);
          }
      });

      // $( "#cb" ).change(() => {
      //   console.log("checkbox");
      // });
})

// $(function () {
    
//     var plaque = ["Plaque.jpg"]
//     var sweater = ["Sweater_Ash", 
//                     "Sweater_Black", 
//                     "Sweater_Green",
//                     "Sweater_Maroon",
//                     "Sweater_Navy",
//                     "Sweater_Red",
//                     "Sweater_Steel",
//                     "Sweater_White"         
//                 ];
//     var tshirt = ["Tshirt_AshGrey",
//                     "Tshirt_Black",
//                     "Tshirt_Green",
//                     "Tshirt_LiteBlue",
//                     "Tshirt_Navy",
//                     "Tshirt_Red",
//                     "Tshirt_SmkGrey",
//                     "Tshirt_White"
// ];
//     var trophy = ["Baseball_M", 
//                 "Basketball_F",
//                 "Basketball_M",
//                 "Soccer_F",
//                 "Soccer_M",
//                 "Softball_F"
//             ];

//     for (var i =0; i < plaque.length-1; i++){
//         var parent = document.createElement("li");
//             parent.id = 'product-section';
//         var child = document.createElement("img");
//             child.src='./imgs/Plaque/'+plaque[i];
//         var sibling = document.createElement("div");
//             sibling.id = "product-info";
//             sibling.innerHTML = `$89.95 Gold Plated Plaque`;
//         var inputBtn = document.createElement("input");
//             inputBtn.id = "addProduct-"+ plaque[i]; 
//             inputBtn.type = "submit"; 
//             inputBtn.value = "Add To Cart";
//             parent.append(child);
//             parent.append(sibling);
//             sibling.append(inputBtn); 
//             document.getElementById("products").append(parent);
//     }
//     for (var i =0; i <= sweater.length-1; i++){
//         var parent = document.createElement("li");
//             parent.id = 'product-section';
//         var child = document.createElement("img");
//             child.src='./imgs/Sweatshirts/'+sweater[i] +'.jpg';
//         var sibling = document.createElement("div");
//             sibling.id = "product-info";
//         var str = sweater[i];
//         var res = str.replace(/_/g, " ");
//             sibling.innerHTML = `$34.95 ${res}`;
//         var inputBtn = document.createElement("input");
//             inputBtn.id = "addProduct-"+ sweater[i]; 
//             inputBtn.type = "submit"; 
//             inputBtn.value = "Add To Cart";
//             parent.append(child);
//             parent.append(sibling);
//             sibling.append(inputBtn); 
//             document.getElementById("products").append(parent);
//     }
//     for (var i =0; i <= tshirt.length-1; i++){
//         var parent = document.createElement("li");
//             parent.id = 'product-section';
//         var child = document.createElement("img");
//             child.src='./imgs/T_shirts/'+tshirt[i] +'.jpg';
//         var sibling = document.createElement("div");
//             sibling.id = "product-info";
//         var str = tshirt[i];
//         var res = str.replace(/_/g, " ");
//             sibling.innerHTML = `$24.95 ${res}`
//         var inputBtn = document.createElement("input");
//             inputBtn.id = "addProduct-"+ tshirt[i]; 
//             inputBtn.type = "submit"; 
//             inputBtn.value = "Add To Cart";
//             parent.append(child);
//             parent.append(sibling);
//             sibling.append(inputBtn); 
//             document.getElementById("products").append(parent);
//     }
//     for (var i =0; i < trophy.length-1; i++){
//         var parent = document.createElement("li");
//             parent.id = 'product-section';
//         var child = document.createElement("img");
//             child.src='./imgs/trophy/'+trophy[i] +'.jpg';
//         var sibling = document.createElement("div");
//             sibling.id = "product-info";
//         var str = trophy[i];
//         var res = str.replace(/_/g, " ");
//             sibling.innerHTML = `$12.95 ${res}`
//         var inputBtn = document.createElement("input");
//             inputBtn.id = "addProduct-"+ trophy[i]; 
//             inputBtn.type = "submit"; 
//             inputBtn.value = "Add To Cart";
//             parent.append(child);
//             parent.append(sibling);
//             sibling.append(inputBtn); 
//             document.getElementById("products").append(parent);
//     }
// });

// // function getCookie(){

// //     alert(windows.location)    
// //     token = localStorage.getItem('token'); 
// //     console.log("tried ot get token ", token); 

// //     if (!token){
// //         token = document.getElementById('products').getAttribute('name');
// //         document.getElementById('products').setAttribute('name', '');
// //         console.log("setting token", token);
// //         localStorage.setItem('token', token);
// //     }
// //     else if (token) {
// //        setTimeout(() => {
// //         getCustomerData();
// //        }, 1000);
        
// //     }
// // }

// // function getCustomerData(){
    
// //      token = localStorage.getItem('token');
// //      console.log("getting token from loaclStorage", token); 
// //      if(token){  
// //     $.ajax({
// //         type: "GET",
// //         beforeSend: function(request) {
// //             request.setRequestHeader("Authorization", 'bearer '+token);
// //           },
// //         url: "/customer",
// //         contentType : "application/json"
// //     }).done(function (data) {
// //         console.log(data);
// //     });
// // } else 
// //     console.log("error getting cookie");
// // }
