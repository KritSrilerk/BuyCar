let car = document.getElementsByName('car');
let costcar = document.getElementsByName('costcar');
let down = document.getElementsByName('down');
let costdown = document.getElementsByName('costdown');
let chkmac = document.getElementsByName('chkmac');
let chkglass = document.getElementsByName('chkglass');
let chksnim = document.getElementsByName('chksnim');
let selmonth = document.getElementsByName('selmonth');
let btncal = document.getElementsByName('btncal');
let btncancel = document.getElementsByName('btncancel');
let showtypecar = document.getElementsByName('showtypecar');
let showcost = document.getElementsByName('showcost');
let showdown = document.getElementsByName('showdown');
let showyodjad = document.getElementsByName('showyodjad');
let showdokbia = document.getElementsByName('showdokbia');
let showpon = document.getElementsByName('showpon');
let showcostpon = document.getElementsByName('showcostpon');

let Calculate = () => {
    let downcar = 0; let option = 0; let yodjad = 0; let years = 0; dokbia = 0; ponmonth = 0; month = 0;
    if (car[0].checked) {
        showtypecar[0].innerHTML = 'Honda'
    } else if (car[1].checked) {
        showtypecar[0].innerHTML = 'Toyota'
    } else if (car[2].checked) {
        showtypecar[0].innerHTML = 'BMW'
    } else if (car[3].checked) {
        showtypecar[0].innerHTML = 'Volvo'
    } else if (car[4].checked) {
        showtypecar[0].innerHTML = 'Mazda'
    } else {
        showtypecar[0].innerHTML = 'MG'
    }

    if (costcar[0].value.trim().length == 0) {
        alert('โปรดป้อนราคารถยนต์ด้วย');
        showtypecar[0].innerHTML = 'XXXX'
    } else if (isNaN(costcar[0].value)) {
        alert('โปรดป้อนจำนวนราคารถยนต์ที่ถูกต้อง');
        showtypecar[0].innerHTML = 'XXXX'
        costcar[0].value = ''
    } else {
        showcost[0].innerHTML = costcar[0].value
        if (down[0].checked) {
            showdown[0].innerHTML = '0'
        } else {
            if (costdown[0].value.trim().length == 0) {
                alert('โปรดป้อนจำนวนเงินดาวน์ด้วย');
                costdown[0].value = ''
            } else if (isNaN(costdown[0].value)) {
                alert('โปรดป้อนจำนวนเงินดาวน์ที่ถูกต้อง');
                costdown[0].value = ''
            } else {
                showdown[0].innerHTML = costdown[0].value
            }
        }
        if (chkmac[0].checked) {
            option += 20000;
        }if (chkglass[0].checked) {
            option += 5000;
        }if (chksnim[0].checked) {
            option += 500;
        }else {
            option = 0;
        }
        if (selmonth[0].value == 1) {
            showpon[0].innerHTML = '12'
            month = 12;
        } else if (selmonth[0].value == 2) {
            showpon[0].innerHTML = '24'
            month = 24;
        } else if (selmonth[0].value == 3) {
            showpon[0].innerHTML = '36'
            month = 36;
        } else if (selmonth[0].value == 4) {
            showpon[0].innerHTML = '48'
            month = 48;
        } else if (selmonth[0].value == 5) {
            showpon[0].innerHTML = '60'
            month = 60;
        } else {
            showpon[0].innerHTML = '72'
            month = 72;
        }
        yodjad = (Number(costcar[0].value) + option) - Number(costdown[0].value)
        showyodjad[0].innerHTML = yodjad
        dokbia = (yodjad * 3.7 / 100) * selmonth[0].value
        showdokbia[0].innerHTML = dokbia.toFixed(2);
        ponmonth = (yodjad + dokbia) / month
        showcostpon[0].innerHTML = ponmonth.toFixed(2);
    }
}

let Disable1 = () => {
    
        costdown[0].disabled = true;
   
        costdown[0].value = '';
    
}

let Disable2 = () => {
    
        costdown[0].disabled = false;
 
}

let Cancel = () => {
    car[0].checked = 'ture';

    costcar[0].value = ''

    down[0].checked = 'ture'

    costdown[0].value = ''
    costdown[0].disabled = 'true'

    chkmac[0].checked = ''
    chkglass[0].checked = ''
    chksnim[0].checked = ''

    selmonth[0].selectedIndex = 0;

    showtypecar[0].innerHTML = 'XXXX'
    showcost[0].innerHTML = 'XXXX'
    showdown[0].innerHTML = 'XXXX'
    showyodjad[0].innerHTML = 'XXXX'
    showdokbia[0].innerHTML = 'XXXX'
    showpon[0].innerHTML = 'XXXX'
    showcostpon[0].innerHTML = 'XXXX'
}

btncal[0].addEventListener('click', Calculate);
down[1].addEventListener('click', Disable2);
down[0].addEventListener('click', Disable1);
btncancel[0].addEventListener('click', Cancel);