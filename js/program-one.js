

function standart() { 
    let width = document.getElementById('entry-width').value;
    let height = document.getElementById('entry-height').value;
    let klamka = document.getElementById('klamka').value;
    document.getElementById('typ-okucia').innerText = 'STANDART'

    
    if (height>2800){
        alert('UWAGA: NIEMA TAKICH WYMIARÓW -->WYSOKOŚĆ')
        document.getElementById('zas').innerText = '';
        document.getElementById('dol').innerText = '';
        document.getElementById('gora').innerText = '';
        document.getElementById('pl').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    
    else{
        select_plecy(height);
        select_zasuwnica(height, klamka);
        myfunc_std(width);
        myfunc_std1(width);
    }
}
function myfunc_std(width) {
    //dol 
    if (width >=801 && width <= 1200) {
        document.getElementById('dol').innerText = 400;
    }
    else if (width > 1200 && width <= 1400) {
        document.getElementById('dol').innerText = 600;
    }
    else if (width > 1400 && width <= 1600) {
        alert('UWAGA: DODATKOWA NOZYCA: Rysunek №4')
        document.getElementById('dol').innerText = '600   400';
    }
    else if (width > 1600) {
        alert('UWAGA: NIE MAMY TAKICH WYMIARÓW - SZEROKOŚĆ')
        document.getElementById('dol').innerText = '';
        document.getElementById('gora').innerText = '';
        document.getElementById('pl').innerText = '';
        document.getElementById('zas').innerText = '';
    }
    //gora
} 
function myfunc_std1(width){
    if (width < 801) {
        document.getElementById('gora').innerText = 'niema nic';
        document.getElementById('dol').innerText = 'niema nic';
    }
    else if (width >800 && width <= 1000) {
        document.getElementById('gora').innerText = 'AX-600';
    }
    else if (width > 1000 && width <= 1600) {
        document.getElementById('gora').innerText = 'AX-750';
    }
}   
     
// poziom zabiezpieczenia okucia ER 1

function erc_one() {
    let width = document.getElementById('entry-width').value;
    let height = document.getElementById('entry-height').value;
    let klamka = document.getElementById('klamka').value;
    document.getElementById('typ-okucia').innerText = 'ER 1';
    
    if (height>2800){
        alert('UWAGA: NIE MAMY TAKICH WYMIARÓW ---> wysokość')
        document.getElementById('zas').innerText = '';
        document.getElementById('dol').innerText = '';
        document.getElementById('gora').innerText = '';
        document.getElementById('pl').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    else{
        select_plecy(height)
        select_zasuwnica(height, klamka)
        myfuncer1(width);
        myfuncer_1(width);
    }
}
function myfuncer1(width){
    //dol
    if (width<400){
        document.getElementById('dol').innerText = 'niema nic';
    }
    if (width >= 400 && width <= 600) {
        document.getElementById('dol').innerText = 200;
    }
    else if (width > 600 && width <= 800) {
        document.getElementById('dol').innerText = 400;
    }
    else if (width > 800 && width <= 1000) {
        document.getElementById('dol').innerText = 600;
    }
    else if (width > 1000 && width <= 1200) {
        document.getElementById('dol').innerText = '600   200';     
    }
    else if (width > 1200 && width <= 1400) {    
        document.getElementById('dol').innerText = '600   400';
    }
    else if (width>1400){
        alert('UWAGA:  NIE MAMY TAKICH ZAKRESÓW ---> szerokość!!!')
        document.getElementById('dol').innerText = '';
        document.getElementById('gora').innerText = '';
        document.getElementById('pl').innerText = '';
        document.getElementById('zas').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
}
function myfuncer_1(width) {
    //gora
    if (width <= 800) {
        document.getElementById('gora').innerText = 'niema nic';
    }
    else if (width > 800 && width <= 1000) {
        document.getElementById('gora').innerText = 'AX-600';
    }
    else if (width > 1000 && width <= 1400) {
        document.getElementById('gora').innerText = 'AX-750';
    }  
}
    






// poziom zabezpieczenia ER 2

function erc_two() {
    let width = document.getElementById('entry-width').value;
    let height = document.getElementById('entry-height').value;
    let klamka = document.getElementById('klamka').value;
    document.getElementById('typ-okucia').innerText = 'ER-2';
    if (height>2600){
        alert('UWAGA: NIE MAMY TAKICH ZAKRESÓW --> WYSOKOŚĆ')
        document.getElementById('pl').innerText = '';
        document.getElementById('dol').innerText = '';
        document.getElementById('gora').innerText = '';
        document.getElementById('pl').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    else{
        myfuncEr2_1(height);
        myfuncEr2_2(height, klamka);
        myfuncEr2_3(width);
        myfuncEr2_4(width);
    }
}
function myfuncEr2_1(height) {
    document.getElementById('dol').style.color = 'yellow';
    document.getElementById('gora').style.color = 'blue';
    //plecy
    if (height<490){
        document.getElementById('pl').innerText = 'niema nic';
        document.getElementById('nsp').innerText = 'niema nic';
    }
    else if (height>=490 && height<=800){
        document.getElementById('pl').innerText = 200;
    }
    else if (height>800 && height<=1000){
        document.getElementById('pl').innerText = 400;
    }
    else if (height>1000 && height<=1200){
        document.getElementById('pl').innerText = 600;
    }
    else if (height>1200 && height<=1400){
        document.getElementById('pl').innerText = 600;
    }
    else if (height>1400 && height<=1600){
        document.getElementById('pl').innerText = '600 400';
    }
    else if (height>1600 && height<=1800){
        document.getElementById('pl').innerText = '600 600';
    }
    else if (height>1800 && height<=2000){
        document.getElementById('pl').innerText = '600 600 200';
    }
    else if (height>2000 && height<=2200){
        document.getElementById('pl').innerText = '600 600 400';
    }
    else if (height>2200 && height<=2400){
        document.getElementById('pl').innerText = '600 600 600';
    }
    else if (height>2401 && height<=2600){
        document.getElementById('pl1').innerText = '600 600 600 200';
    }
   
}
function myfuncEr2_2(height, klamka) {
    //zasuwnica
    if(height>600 && height<=800 && klamka == 263){
        document.getElementById('zas').innerText = 'niema nic';
        document.getElementById('nsp').innerText = 350;
    }
    else if(height>800 && height<=1000 && klamka == 413){
        document.getElementById('zas').innerText = '550';
        document.getElementById('nsp').innerText = '288';
    }
    else if(height>1000 && height<=1200 && klamka == 513){
        document.getElementById('zas').innerText = '700';
        document.getElementById('nsp').innerText = '388';
    }
    else if(height>1200 && height<=1400 && klamka == 583){
        document.getElementById('zas').innerText = '700';
        document.getElementById('nsp').innerText = '388';
    }
    else if(height>1400 && height<=1600 && klamka == 583){
        document.getElementById('zas').innerText = '700 1170';
        document.getElementById('nsp').innerText = '388';
    }
    else if(height>1600 && height<=1800 && klamka == 583){
        document.getElementById('zas').innerText = '700 1370';
        document.getElementById('nsp').innerText = '388';
    }
    else if(height>1600 && height<=1800 && klamka == 1000){
        document.getElementById('zas').innerText = '700 1370';
        document.getElementById('nsp').innerText = '1121';
    }
    else if(height>1800 && height<=2000 && klamka == 1000){
        document.getElementById('zas').innerText = '700 1370';
        document.getElementById('nsp').innerText = '1121';
    }
    else if(height>2000 && height<=2400 && klamka == 1000){
        document.getElementById('zas').innerText = '700 1370 1770';
        document.getElementById('nsp').innerText = '1121';
    }
    else if (height>2400 && height<=200 && klamka==1000){
        document.getElementById('zas').innerText = '???';
        document.getElementById('nsp').innerText = '???';
    }
    else{
        alert('UWAGA:NIESTANDART---> klamka albo zakres')
        document.getElementById('zas').innerText = '';
        document.getElementById('pl').innerText = '';
        document.getElementById('nsp').innerText = '';
        document.getElementById('dol').style.color = '#B7C0BD';
        document.getElementById('gora').style.color = '#B7C0BD';
    }
}
function myfuncEr2_3(width) {
    //dol
    if(width<490){
        document.getElementById('dol').innerText = 'niema nic';
    }
    if (width>=490 && width<=690){
        document.getElementById('dol').innerText = 200;
    }
    else if (width>690 && width<=890){
        document.getElementById('dol').innerText = 400;
    }
    else if (width>890 && width<=1090){
        document.getElementById('dol').innerText = 600;
    }
    else if (width>1090 && width<=1290){
        document.getElementById('dol').innerText = '600   200';
    }
    else if (width>1290 && width<=1400){
        document.getElementById('dol').innerText = '600   400';
    }
    else if (width>1400){
        alert('UWAGA: NIE MAMY TAKICH ZAKRESOW -->szerokosc');
        document.getElementById('dol').innerText = '';
        document.getElementById('gora').innerText = '';
        document.getElementById('pl').innerText = '';
        document.getElementById('zas').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
}
function myfuncEr2_4(width) {
    //gora
    if (width<=800){
        document.getElementById('gora').innerText = 'niema nic';
    }
    else if (width>800 && width<=1000){
        document.getElementById('gora').innerText = 'AX-600';
    }
    else if (width>1000 && width<=1400){
        document.getElementById('gora').innerText = 'AX-600';
    }
}

// #######################################
function select_plecy(height) {
    if (height<800){
        document.getElementById('pl').innerText = 'niema nic';
        
    }
    if (height > 800 && height <= 1200) {
        document.getElementById('pl').innerText = 400;
    }
    if (height > 1200 && height <= 1600) {
        document.getElementById('pl').innerText = 600;
    }
    if (height > 1600 && height <= 2000) {
        document.getElementById('pl').innerText = '600  400';
        
    }
    if (height > 2000 && height <= 2400) {
        document.getElementById('pl').innerText = '600  600';
    }
    if (height > 2400 && height <= 2600) {
        document.getElementById('pl').innerText = '600 600 400';
    }
    if (height > 2600 && height <= 2800) {
        document.getElementById('pl').innerText = '600 600 600';
    }
    

}
function select_zasuwnica(height, klamka) {
    document.getElementById('dol').style.color = 'yellow';
    document.getElementById('gora').style.color = 'blue';
    
    if (height < 280 && klamka != '') {
        document.getElementById('zas').innerText = 'niema nic';
        document.getElementById('nsp').innerText = 'niema nic';
    }
    else if (height>=280 && height<=570 && klamka==120) {
        document.getElementById('zas').innerText = 'niema nic';
        document.getElementById('nsp').innerText = 'niema nic';
    }
    else if (height>=511 && height<=600 && klamka==170) {
        document.getElementById('zas').innerText = 'niema nic';
        document.getElementById('nsp').innerText = 262;
    }
    else if (height>600 && height<=800 && klamka==263) {
        document.getElementById('zas').innerText = 'niema nic';
        document.getElementById('nsp').innerText = '350';
    }
    else if (height>800 && height<=1000 && klamka==413) {
        document.getElementById('zas').innerText = '550';
        document.getElementById('nsp').innerText = '288';
    }
    else if (height>1000 && height <=1200 && klamka==513) {
        document.getElementById('zas').innerText = '700';
        document.getElementById('nsp').innerText = '388';
    }
    else if (height>1200 && height<=1400 && klamka==563) {
        document.getElementById('zas').innerText = '700';
        document.getElementById('nsp').innerText = '388';
    }
    else if (height>1400 && height<=1600 && klamka==563) {
        document.getElementById('zas').innerText = '700 1170';
        document.getElementById('nsp').innerText = '388';
    }
    else if (height > 1600 && height <=1800 && klamka==563) {
        document.getElementById('zas').innerText = '700 1370';
        document.getElementById('nsp').innerText = '388';
    }
    else if (height>1600 && height<=1800 && klamka==1000) {
        document.getElementById('zas').innerText = '700 1370';
        document.getElementById('nsp').innerText = '1121';
    }
    else if (height>1800 && height<=2000 && klamka==1000) {
        document.getElementById('zas').innerText = '700 1370';
        document.getElementById('nsp').innerText = '1121';
    }
    else if (height>2000 && height<=2600 && klamka==1000) {
        document.getElementById('zas').innerText = '700 1370 1770';
        document.getElementById('nsp').innerText = '1121';
    }
    else if (height>2600 && height<=2800 && klamka == 1000) {
        document.getElementById('zas').innerText = '+MV??';
        document.getElementById('nsp').innerText = '???';
    }
    else {
        alert('UWAGA: NIESTANDART!!! --> klamka albo zakres')
        document.getElementById('dol').style.color = '#B7C0BD';
        document.getElementById('gora').style.color = '#B7C0BD';
        document.getElementById('pl').innerText = '';
        document.getElementById('zas').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    
}