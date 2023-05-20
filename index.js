import { plansList } from "./data.js";

const table = document.getElementById("plansTable");


function toEmoji (attribute) {
    if (attribute === "true") {
        attribute = "✔";
    } else if( attribute ==="false") {
         attribute = "✖";
        }
    return attribute;
};



for (let i = 0; i < plansList.length; i++) {

    let rows = document.querySelectorAll("table#plansTable tr");
 
    let nameTh = document.createElement("th");
    nameTh.textContent = plansList[i].name;
    rows[0].appendChild(nameTh);

    let planBr = document.createElement("br");
    nameTh.appendChild(planBr);
    
    let planBtn = document.createElement("button");
    planBtn.onclick = (target => {
        window.location = "./cycle.html?plan=" + i ;
    });

    planBtn.textContent= plansList[i].yearlySubPrice +"$";
    nameTh.appendChild(planBtn);





    let monthlySubTh = document.createElement("th");
    monthlySubTh.textContent = plansList[i].monthlySubPrice;
    rows[1].appendChild(monthlySubTh);
    
    let yearlySubTh = document.createElement("th");
    yearlySubTh.textContent = plansList[i].yearlySubPrice;
    rows[2].appendChild(yearlySubTh);


    //####################################### start updating as needed #######################################


    let numericFeature1 = document.createElement("th");
    numericFeature1.textContent = plansList[i].numericFeature1;
    rows[3].appendChild(numericFeature1);
    
    let numericFeature2 = document.createElement("th");
    numericFeature2.textContent = plansList[i].numericFeature2;
    rows[4].appendChild(numericFeature2);
    
    let binaryFeature1 = document.createElement("th");
    binaryFeature1.textContent = plansList[i].binaryFeature1;
    binaryFeature1.textContent= toEmoji(binaryFeature1.textContent);
    rows[5].appendChild(binaryFeature1);
    
    let binaryFeature2 = document.createElement("th");
    binaryFeature2.textContent = plansList[i].binaryFeature2;
    binaryFeature2.textContent =toEmoji(binaryFeature2.textContent);
    rows[6].appendChild(binaryFeature2);

    let customerCare = document.createElement("th");
    customerCare.textContent = plansList[i].customerCare;
    customerCare.textContent=toEmoji(customerCare.textContent);
    rows[7].appendChild(customerCare);

    //#######################################      stop  updating      #######################################


};

// ready