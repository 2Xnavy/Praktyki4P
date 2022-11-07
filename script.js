function showAlert(){
    
    let i = document.getElementById("imie").value;
    let n = document.getElementById("nazwisko").value;
    let w = document.getElementById("wiek").value;
    let e = document.getElementById("email").value;
    let g = document.getElementById("gender").value;
    let s = document.querySelector('input[name="skinColor"]:checked').value;

    let hasNumber = /\d/;

    if (w >= 1 && w <= 100 && hasNumber.test(i)==false && hasNumber.test(n)==false && i!="" && n!="" && w!="" && e!="" && g=="Kobieta" || g=="Mężczyzna" && s=="white" || s=="yellow" || s=="brown" || s=="black" || s=="red"){
        alert("FORMULARZ WYPEŁNIONY POPRAWNIE. ZGŁOSZENIE PRZYJĘTE.");
    }
    else{
        alert("FORMULARZ WYPEŁNIONY NIEPOPRAWNIE. ZGŁOSZENIE ODRZUCONE.");
    }
}