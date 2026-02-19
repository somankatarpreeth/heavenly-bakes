function filterItems(category){
    let cards = document.querySelectorAll(".card")
    let buttons = document.querySelectorAll("#filter_btns>button")
    cards.forEach((card)=>{
        if(category == "all"){
            card.style.display = "flex"
        }else{
            if(card.classList.contains(category)){
                card.style.display = "flex"
            }else{
                card.style.display = "none"
            }
        }
    })
    buttons.forEach((btn)=>{
        btn.classList.remove("active")
    })
    event.target.classList.add("active")
}

// Add to cart Functionality

let cart =[];
let cards = document.querySelectorAll(".card")

cards.forEach((card)=>{
    let name = card.querySelector(".card_one>.card_info>h2").innerText
    let price = Number(card.querySelector(".card_one>.card_info>p").innerText.replace("₹",'').replace("/-",''))
    let quantity = card.querySelector(".card_two>.card_quantity>.quantity")

    // Increment and Decrement
    
    let plusbtn = card.querySelector(".plus")
    plusbtn.addEventListener("click",()=>{
        quantity.innerText = Number(quantity.innerText)+1
    })
    
    let minusbtn = card.querySelector(".minus")
    minusbtn.addEventListener("click",()=>{
         let current = Number(quantity.innerText)
         if(current > 0){
            quantity.innerText = current-1
         }
    })

    // Addtocart btn
    let addBtn = card.querySelector(".addToCart button")
    console.log(addBtn)
    addBtn.addEventListener("click",()=>{
        let qty = Number(quantity.innerText)
        if(qty>0){
            let existingItem = cart.find(item=> item.name==name)
            if(existingItem){
                existingItem.qty += qty
            }else{
                cart.push({name:name,qty:qty,price:price})
                addBtn.style.background="green"
            }
            updatecart()
            
        }else{
            alert("Please select atleast One Quantity of your product..")
        }
    })
})

// Sidebar functionality

let sidebar = document.getElementById("sidebar")
let cart_icon = document.getElementById("cart_icon")

cart_icon.addEventListener("click",()=>{
    sidebar.style.right = "0px"
})
let close_sidebar = document.getElementById("close_sidebar")
close_sidebar.addEventListener("click",()=>{
    sidebar.style.right="-450px"
})