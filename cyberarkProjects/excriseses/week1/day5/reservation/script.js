const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  const NameReserve = document.getElementById("name")

  const checkReservation =function(){
    const value = NameReserve.value;
    console.log(value)
    if(reservations[value]){
        if(!reservations[value].claimed){
            alert("welcome!"+value)
        }else{
            alert("you alredy claim it ")
        }
    }else{
        alert("you didnt reservt  ")
    }
   
  }

  const reservation=document.getElementById("reservation")
  reservation.onclick=function () {
    checkReservation();
  }