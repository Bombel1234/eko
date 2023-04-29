function func_standart(params) {

    let width = document.getElementById('xx-input-width').value;
    let height = document.getElementById('xx-input-height').value;
    document.getElementById('my-dot').style.color = 'black';
    document.getElementById('free-poziom').innerText = 'Poziom zabezpieczenia okucia: Standart >>> Schemat okucia na rysunku 1';
    
    if (height>2800){
        alert('UWAGA: NIEMA TAKICH ZAKRESÓW -->WYSOKOŚĆ') 
        document.getElementById('my-gora').innerText = '';
        document.getElementById('my-plecy').innerText = '';
        document.getElementById('my-dot').innerText = '';
        document.getElementById('my-dol').innerText = '';
    }
    else{
        xx_plecy(height);
        select_docisk(height);
        myfunk_st1(width);
        myfunk_st12(width);
    }
}

function myfunk_st1(width){
    //dol
    if (width < 801) {
        document.getElementById('my-dol').innerText = 'niema nic';
        document.getElementById('my-gora').innerText = 'niema nic';
    }
    if (width >= 801 && width <= 1200) {
        document.getElementById('my-dol').innerText = 400;
    }
    if (width > 1200 && width <= 1400) {
        document.getElementById('my-dol').innerText = 600;
    }
    if (width > 1400 && width <= 1600) {
        alert('UWAGA: DODATKOWA NOZYCA: Rysunek №4')
        document.getElementById('my-dol').innerText = '600   400';
    }
    else if (width > 1600) {
        alert('UWAGA: NIE MAMY TAKICH ZAKRESOW - SZEROKOŚĆ')
        document.getElementById('my-dol').innerText = '';
        document.getElementById('my-gora').innerText = '';
        document.getElementById('my-dot').innerText = '';
        document.getElementById('my-plecy').innerText = '';
    }
}
    //gora
function myfunk_st12(width){
    if (width > 800 && width <= 1000) {
        document.getElementById('my-gora').innerText = 'AX-600';
    }
    else if (width > 1000 && width <= 1600) {
        document.getElementById('my-gora').innerText = 'AX-750';
    }
}


// poziom zabezpieczenia ER1
function func_er1() {
    let width = document.getElementById('xx-input-width').value;
    let height = document.getElementById('xx-input-height').value;
    
    document.getElementById('my-dot').style.color = 'red';
    document.getElementById('free-poziom').innerText = 'Poziom zabezpieczenia okucia: ER 2 >>> Schemat okucia na rysunku 2';
    
    if (height>2800){
        alert('UWAGA: NIE MAMY TAKICH WYMIARÓW ---> wysokość!!!');
        document.getElementById('my-gora').innerText = '';
        document.getElementById('my-dol').innerText = '';
        document.getElementById('my-plecy').innerText = '';
        document.getElementById('my-dot').innerText = '';
    }
    else{
        myfunc1(height);
        myfunc2(width);
        myfunc3(width);
    }
}
function myfunc1(height){
    if (height<800){
        document.getElementById('my-dot').innerText = 'niema nic';
        document.getElementById('my-plecy').innerText = 'niema nic';
    }
    else if (height > 800 && height <= 1200) {
        document.getElementById('my-dot').innerText = 400;
        document.getElementById('my-plecy').innerText = 400;
    }
    else if (height > 1200 && height <= 1600) {
        document.getElementById('my-dot').innerText = 600;
        document.getElementById('my-plecy').innerText = 600;
    }
    else if (height > 1600 && height <= 2000) {
        document.getElementById('my-dot').innerText = '600  400';
        document.getElementById('my-plecy').innerText = '600  400';
    }
    else if (height > 2000 && height <= 2400) {
        document.getElementById('my-dot').innerText = '600  600';
        document.getElementById('my-plecy').innerText = '600  600';
    }
    else if (height > 2400 && height <= 2600) {
        document.getElementById('my-dot').innerText = '600  600  400';
        document.getElementById('my-plecy').innerText = '600  600  400';
    }
    else if (height > 2600 && height <= 2800) { 
        document.getElementById('my-dot').innerText = '600  600  600';
        document.getElementById('my-plecy').innerText = '600  600  600';
    }
}
    
    // dol
function myfunc2(width) {
    if (width<400){
        document.getElementById('my-dol').innerText = 'niema nic'; 
        document.getElementById('my-gora').innerText = 'niema nic';    
    }
    else if (width >= 400 && width <= 600) {
        document.getElementById('my-dol').innerText = 200;
        document.getElementById('my-gora').innerText = 'niema nic'; 
    }
    else if (width > 600 && width <= 800) {
        document.getElementById('my-dol').innerText = 400;
        document.getElementById('my-gora').innerText = 'niema nic';
    }
    else if (width > 800 && width <= 1000) {
        document.getElementById('my-dol').innerText = 600;
    }
    else if (width > 1000 && width <= 1200) {
        document.getElementById('my-dol').innerText = '600   200';
    }
    else if (width > 1200 && width <= 1400) {
        document.getElementById('my-dol').innerText = '600   400';
    } 
}
    
    
    //gora
function myfunc3(width) {
    if (width<801){
        document.getElementById('my-gora').innerText = 'niema nic';
    }

    else if (width>=801 && width<=1000){
        document.getElementById('my-gora').innerText = 'AX-600';
    }
     else if (width>=1001 && width<=1400){
        document.getElementById('my-gora').innerText = 'AX-750';
    }
    else if(width>1400){
        alert('UWAGA: NIE MAMY TAKICH WYMIAROW ---> szerokość!!!');
        document.getElementById('my-gora').innerText = '';
        document.getElementById('my-dol').innerText = '';
        document.getElementById('my-plecy').innerText = '';
        document.getElementById('my-dot').innerText = '';
    }
}
 


//poziom zabezpeczenia ER 2

function func_er2() {
    let width = document.getElementById('xx-input-width').value;
    let height = document.getElementById('xx-input-height').value;
    document.getElementById('my-dot').style.color = 'red';
    document.getElementById('free-poziom').innerText = 'Poziom zabezpieczenia okucia: ER 2 >>> Schemat okucia na rysunku 3';

    if (height>2600){
        alert('UWAGA: NIE MAMY TAKICH ZAKRESÓW ---> WYSOKOŚĆ');
        document.getElementById('my-plecy').innerText = '';
        document.getElementById('my-dot').innerText = ''; 
        document.getElementById('my-ora').innerText = '';
        document.getElementById('my-dol').innerText = '';   
    }
    else{
        myfunc_a(height);
        myfunc_b(width);
        myfunc_c(width);
    }
}
function myfunc_a(height) {
    //plecy
    if (height<490){
        document.getElementById('my-plecy').innerText = 'niema nic';
        document.getElementById('my-dot').innerText = 'niema nic';
    }
    else if (height>=490 && height<=800){
        document.getElementById('my-plecy').innerText = 200;
        document.getElementById('my-dot').innerText = 200;
    }
    else if (height>800 && height<=1000){
        document.getElementById('my-plecy').innerText = 400;
        document.getElementById('my-dot').innerText = 400;
    }
    else if (height>1000 && height<=1200){
        document.getElementById('my-plecy').innerText = 600;
        document.getElementById('my-dot').innerText = 600;
    }
    else if (height>1200 && height<=1400){
        document.getElementById('my-plecy').innerText = '600   200';
        document.getElementById('my-dot').innerText = '600   200';
    }
    else if (height>1400 && height<=1600){
        document.getElementById('my-plecy').innerText = '600   400';
        document.getElementById('my-dot').innerText = '600   400';
    }
    else if (height>1600 && height<=1800){
        document.getElementById('my-plecy').innerText = '600   600';
        document.getElementById('my-dot').innerText = '600   600';
    }
    else if (height>1800 && height<=2000){
        document.getElementById('my-plecy').innerText = '600   600   200';
        document.getElementById('my-dot').innerText = '600   600   200';
    }
    else if (height>2000 && height<=2200){
        document.getElementById('my-plecy').innerText = '600   600   400';
        document.getElementById('my-dot').innerText = '600   600   400';
    }
    else if (height>2200 && height<=2400){
        document.getElementById('my-plecy').innerText = '600   600   600';
        document.getElementById('my-dot').innerText = '600   600   600';
    }
    else if (height>2401 && height<=2600){
        document.getElementById('my-plecy').innerText = '600   600   600  200';
        document.getElementById('my-dot').innerText = '600   600   600  200';
    }
} 
function myfunc_b(width) { 
    //dol
    if(width<490){
        document.getElementById('my-dol').innerText = 'niema nic';
    }
    if (width>=490 && width<=690){
        document.getElementById('my-dol').innerText = 200;
    }
    else if (width>690 && width<=890){
        document.getElementById('my-dol').innerText = 400;
    }
    else if (width>890 && width<=1090){
        document.getElementById('my-dol').innerText = 600;
    }
    else if (width>1090 && width<=1290){
        document.getElementById('my-dol').innerText = '600   200';
    }
    else if (width>1290 && width<=1400){
        document.getElementById('my-dol').innerText = '600   400';
    }
    else if (width>1400){
        alert('UWAGA: NIE MAMY TAKICH ZAKRESOW -->szerokosc');
        document.getElementById('my-dol').innerText = '';
        document.getElementById('my-gora').innerText = '';
        document.getElementById('my-plecy').innerText = '';
        document.getElementById('my-dot').innerText = '';
    }
}
function myfunc_c(width) {
    //gora
    if (width<=800){
        document.getElementById('my-gora').innerText = 'niema nic';
    }
    else if (width>800 && width<=1400){
        document.getElementById('my-gora').innerText = 'AX-600';
    } 
}    






function xx_plecy(height) {
    if (height<800){
        document.getElementById('my-plecy').innerText = 'niema nic';
        
    }
    else if (height > 800 && height <= 1200) {
        document.getElementById('my-plecy').innerText = 400;
    }
    else if (height > 1200 && height <= 1600) {
        document.getElementById('my-plecy').innerText = 600;
    }
    else if (height > 1600 && height <= 2000) {
        document.getElementById('my-plecy').innerText = '600  400';
        
    }
    else if (height > 2000 && height <= 2400) {
        document.getElementById('my-plecy').innerText = '600  600';
    }
    else if (height > 2400 && height <= 2600) {
        document.getElementById('my-plecy').innerText = '600 600 400';
    }
    else if (height > 2600 && height <= 2800) {
        document.getElementById('my-plecy').innerText = '600 600 600';
    }
}
function select_docisk(height){
    if (height<801){
        document.getElementById('my-dot').innerText = 'Brak docisków';
    }
    else if (height>800 && height<=1600){
        document.getElementById('my-dot').innerText = '1  docisk';
    }
    else if (height>1600 && height<=2800){
        document.getElementById('my-dot').innerText = '2  dociski';
    }
}
