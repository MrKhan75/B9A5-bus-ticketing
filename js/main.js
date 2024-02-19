// Select Seat Area  =========================================================

let remain = 40;
let addSeatInfo = 0;
let count = 0;

const seatSelect = document.querySelectorAll('.selectedBtn');


for(let selectBtn of seatSelect){
    
    selectBtn.addEventListener('click', function(e){
        // Simple Style 
        
        selectBtn.style.backgroundColor = "#1DD100";
        selectBtn.style.border = "none";
        selectBtn.style.color = "white";
        this.disabled = true; 


        // Added increment Decrement
        remain = remain - 1;
        document.getElementById('remainingSeat').innerText = remain;

        addSeatInfo = addSeatInfo + 1;
        document.getElementById('addSeats').innerText = addSeatInfo;
        
        

        // Added Table
        const myTable = document.getElementById('showTable');

        const myTR = document.createElement('tr');
        
        const tableValue = e.target.innerText;

        let newtd1 = document.createElement('td');
        newtd1.innerText = tableValue;
        let newtd2 = document.createElement('td');
        newtd2.innerText = 'Economy';
        newtd2.style.textAlign = 'center';
        let newtd3 = document.createElement('td');
        newtd3.innerText = 550;
        newtd3.style.textAlign = 'right';

        myTR.appendChild(newtd1);
        myTR.appendChild(newtd2);
        myTR.appendChild(newtd3);

        
        myTable.appendChild(myTR);
        


        // Add Total Seat Fare 
        totalSeatPrice = addSeatInfo * 550;
        document.getElementById('totalFare').innerText = totalSeatPrice;

        granTotal = totalSeatPrice;
        document.getElementById('grandTotal').innerText = granTotal; 

    })

}






// if Select More Then 4  ================================================================

const getButton = document.querySelectorAll('.selectedBtn');
let selectCount = 0;

for(let selectBtn of getButton){
    selectBtn.addEventListener('click', function(){
        if(selectBtn.classList.contains('selected')){
            selectBtn.classList.remove('selected');
            selectCount--;
        }else{
            if(selectCount < 4) {
                selectBtn.classList.add('selected'); 
                selectCount++;
            }else{
                alert("Sorry ! you can selected only 4 Seat");
                selectBtn.setAttribute("disabled", "");
                return 0;
            }
        }
    })
}






// Cupon Code  ======================================================

const applyButton = document.getElementById('applyBtn');
applyButton.addEventListener("click", function(){
    
    const couponContainer = document.getElementById('couponContainer');
    const inputField = document.getElementById('cuponInput').value;
    
    if(inputField === "NEW15" || inputField === "Couple 20"){
        couponContainer.classList.add("hidden")
    }else{
        alert("Invalid Coupon Code");
    }

})







// Modal Open 

const nextButton = document.getElementById('FinalSubmit');
nextButton.addEventListener("click", function(){
    my_modal_5.showModal()
})