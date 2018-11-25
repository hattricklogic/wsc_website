
$(function () {
    var plaque = ["Plaque.jpg"]
    var sweater = ["Sweater_Ash", 
                    "Sweater_Black", 
                    "Sweater_Green",
                    "Sweater_Maroon",
                    "Sweater_Navy",
                    "Sweater_Red",
                    "Sweater_Steel",
                    "Sweater_White"         
                ];
    var tshirt = ["Tshirt_AshGrey",
                    "Tshirt_Black",
                    "Tshirt_Green",
                    "Tshirt_LiteBlue",
                    "Tshirt_Navy",
                    "Tshirt_Red",
                    "Tshirt_SmkGrey",
                    "Tshirt_White"
];
    var trophy = ["Baseball_M", 
                "Basketball_F",
                "Basketball_M",
                "Soccer_F",
                "Soccer_M",
                "Softball_F"
            ];

    for (var i =0; i < plaque.length; i++){
        var parent = document.createElement("li");
            parent.id = 'product-section';
        var child = document.createElement("img");
            child.src='./imgs/Plaque/'+plaque[i];
        var sibling = document.createElement("div");
            sibling.id = "product-info";
            sibling.innerHTML = `$89.95 Gold Plated Plaque`;
        var inputBtn = document.createElement("input");
            inputBtn.id = "addProduct-"+ plaque[i]; 
            inputBtn.type = "submit"; 
            inputBtn.value = "Add To Cart";
            parent.append(child);
            parent.append(sibling);
            sibling.append(inputBtn); 
            document.getElementById("products").append(parent);
    }
    for (var i =0; i < sweater.length; i++){
        var parent = document.createElement("li");
            parent.id = 'product-section';
        var child = document.createElement("img");
            child.src='./imgs/Sweatshirts/'+sweater[i] +'.jpg';
        var sibling = document.createElement("div");
            sibling.id = "product-info";
        var str = sweater[i];
        var res = str.replace(/_/g, " ");
            sibling.innerHTML = `$34.95 ${res}`;
        var inputBtn = document.createElement("input");
            inputBtn.id = "addProduct-"+ sweater[i]; 
            inputBtn.type = "submit"; 
            inputBtn.value = "Add To Cart";
            parent.append(child);
            parent.append(sibling);
            sibling.append(inputBtn); 
            document.getElementById("products").append(parent);
    }
    for (var i =0; i < tshirt.length; i++){
        var parent = document.createElement("li");
            parent.id = 'product-section';
        var child = document.createElement("img");
            child.src='./imgs/T_shirts/'+tshirt[i] +'.jpg';
        var sibling = document.createElement("div");
            sibling.id = "product-info";
        var str = tshirt[i];
        var res = str.replace(/_/g, " ");
            sibling.innerHTML = `$24.95 ${res}`
        var inputBtn = document.createElement("input");
            inputBtn.id = "addProduct-"+ tshirt[i]; 
            inputBtn.type = "submit"; 
            inputBtn.value = "Add To Cart";
            parent.append(child);
            parent.append(sibling);
            sibling.append(inputBtn); 
            document.getElementById("products").append(parent);
    }
    for (var i =0; i < trophy.length; i++){
        var parent = document.createElement("li");
            parent.id = 'product-section';
        var child = document.createElement("img");
            child.src='./imgs/trophy/'+trophy[i] +'.jpg';
        var sibling = document.createElement("div");
            sibling.id = "product-info";
        var str = trophy[i];
        var res = str.replace(/_/g, " ");
            sibling.innerHTML = `$12.95 ${res}`
        var inputBtn = document.createElement("input");
            inputBtn.id = "addProduct-"+ trophy[i]; 
            inputBtn.type = "submit"; 
            inputBtn.value = "Add To Cart";
            parent.append(child);
            parent.append(sibling);
            sibling.append(inputBtn); 
            document.getElementById("products").append(parent);
    }

});
