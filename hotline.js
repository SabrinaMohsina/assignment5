


let  coinBtn = 100;
document.getElementById("call-btn").addEventListener("click" , function(){
  
   const  title = document.getElementById("card-title-1").innerText
   const  number = document.getElementById("card-number-1").innerText
   
  //  alert(document.getElementById("card-title-1").innerText  )
  //  if(document.getElementById("coin-btn").innerText == 0){
  //      alert("You haven't sufficient coins")
  //  }
  //  //coinBtn
  //   const coinBtn = document.getElementById("coin-btn").innerText;
  // let currentTotal = coinBtn - 20;
  // document.getElementById("coin-btn").innerText = currentTotal;
  
  //history card 
  const historyCard = document.getElementById("history-card");
  //create element
  const newCard = document.createElement("div");
  newCard.innerHTML = `
             <div  class="card my-2 rounded-xl shadow-xl p-[4px]">
               <h6  class="font-semibold">${title} </h6>
               <p  class="pb-2  text-md">${number} </p>
            </div>
  `;
//container a add kora
historyCard.append(newCard);

})