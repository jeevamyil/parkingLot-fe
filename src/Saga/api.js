export function InitAPI(){
    return fetch(`http://localhost:8088/parkingLotAPI/init`);
}

export function checkinAPI({ data }) {

    console.log(data);
    return fetch(`http://localhost:8088/parkingLotAPI/checkin`, {
        method: 'POST',
        //headers:{"Content-type":"application/x-www-form-urlencoded: charset= UTF-8"},
        body: new URLSearchParams("input=" + data)
    });
}

export function checkoutAPI({ data }) {

    console.log(data);
     return  fetch(`http://localhost:8088/parkingLotAPI/checkout`, {
        method: 'POST',
        //headers:{"Content-type":"application/x-www-form-urlencoded: charset= UTF-8"},
        body: new URLSearchParams("input=" + data)
    });
   
}

export function findAPI({ data }) {

    console.log(data);
    return  fetch(`http://localhost:8088/parkingLotAPI/find`, {
        method: 'POST',
        //headers:{"Content-type":"application/x-www-form-urlencoded: charset= UTF-8"},
        body: new URLSearchParams("input=" + data)
    });
  

}


export function showLotsAPI() {
    return fetch(`http://localhost:8088/parkingLotAPI/showlots`);
}