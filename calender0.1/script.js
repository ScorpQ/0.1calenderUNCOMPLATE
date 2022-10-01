// STAGE 1
    const currentDate = document.querySelector(".current-date");

    var allMonth= ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz",
    "Ağustos","Eylül","Ekim","Kasım","Aralık"];

    const D = new Date();
    let currentMonth = D.getMonth();
    let currentYear = D.getFullYear();
    let currentDay = D.getDate();

    currentDate.innerHTML =`${allMonth[currentMonth]} ${currentYear}`;

// STAGE 2
/*
    const daysTag = document.querySelector(".dayss"); 
    let lastDateofMonth = new Date().getDate() + 1;
    console.log(lastDateofMonth);
    console.log(daysTag);
    let liTag="";

    for(let i=1; i < lastDateofMonth; i++){
        liTag += `<li>${i}</li>`
    }
    daysTag.innerHTML = liTag;

     var ul = document.getElementById("list"); ****
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Four"));
        ul.appendChild(li);


            !---------WORKED APPEND LI TAG TO UL TAG WİTHİN FOR LOOP---------!
        // Create an "li" node:
        const node = document.createElement("li");
        var liTag = document.createElement("li");

        // Create a text node:
        const textnode = document.createTextNode("Water");
        const ctx = document.createTextNode(`${i}`);
        // Append the text node to the "li" node:
        node.appendChild(textnode);
        liTag.appendChild(ctx);
        // Append the "li" node to the list:
        document.getElementById("myList").appendChild(node);
        document.querySelector(".dayss").appendChild(liTag);
            !---------------------------------------------------------------!
*/
    let lastDateofMonth = new Date(currentYear, currentMonth+1, 0).getDate();
    for(let i=1; i <= lastDateofMonth; i++){
        var liTag = document.createElement("li");
        const ctx = document.createTextNode(`${i}`);
        liTag.appendChild(ctx);
        document.querySelector(".dayss").appendChild(liTag);
    }
    console.log(lastDateofMonth);
// STAGE 3
    const changeBtn = document.querySelectorAll(".icons i");
    changeBtn.forEach(icon => {
    icon.addEventListener("click", ()=> {
        // (ternary)X === Y  ? true : false
        currentMonth = icon.id === "prev" ? currentMonth -1 : currentMonth +1;
        currentDate.innerHTML =`${allMonth[currentMonth]} ${currentYear}`;        
                }
            )
        }
    );

// STAGE 4
  /*
        ! CONFUSING AREA STARTING AT LİNE 49
  */
        