


const inputUser = document.getElementById('name');
const inputKm = document.getElementById('km');
const selectEta = document.getElementById('fasciaEta');


const btnGenera = document.getElementById('genera');
const btnAnnulla = document.getElementById('annulla');


btnGenera.addEventListener('click', function(){

  let validForm = true;
  const nameUser = inputUser.value;
  const km = parseInt(inputKm.value);
  const fasciaEta = selectEta.value;
  const prezzoKm = 0.21;
  const carrozza = Math.ceil(Math.random() * 3);
  const codiceCP = Math.floor(Math.random() * (99000 - 10000 + 1) ) + 10000;

  let offerta = 'Prezzo Standard',
      sconto = 0,
      prezzo;

  if(fasciaEta === 'minorenne'){
    sconto = 20;
    offerta = 'Sconto Minorenni';
  }else if(fasciaEta === 'senior'){
     sconto = 40;  
     offerta = 'Sconto Silver';
  }

  prezzo = (km * prezzoKm) * (1 - sconto/100);

  if(nameUser.length < 3) validForm = false;

  if(isNaN(km)) validForm = false;
  

  if(fasciaEta === '') validForm = false;

  const outputName =      document.getElementById('outputName');
  const outputOfferta =   document.getElementById('outputOfferta');
  const outputCarrozza =  document.getElementById('outputCarrozza');
  const outputCp =        document.getElementById('outputCp');
  const outputPrezzo =    document.getElementById('outputPrezzo');


  if(validForm){
    outputName.innerHTML =      nameUser;
    outputOfferta.innerHTML =   offerta;
    outputCarrozza.innerHTML =  carrozza;
    outputCp.innerHTML =        codiceCP;
    outputPrezzo.innerHTML = `
    &euro; ${prezzo.toFixed(2)}
    `;
    document.querySelector('.ticket-area').classList.remove('hide');
  }else{
    alert('Inserire tutti i campi')
  }
});




btnAnnulla.addEventListener('click', function(){
  inputUser.value = '';
  inputKm.value = '';
  selectEta.value = '';
  document.querySelector('.ticket-area').classList.add('hide');
})