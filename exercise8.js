var btnRemove = document.getElementsByClassName('remove_button');

btnRemove[0].addEventListener("click", getItems)
btnRemove[1].addEventListener('click', getItems2)

function getItems() {
    var itemDiv = document.getElementsByClassName('item');
    console.log('hi');
    
    itemDiv[0].innerHTML =  ''
}

function getItems2() {
    var itemDiv = document.getElementsByClassName('item');
    console.log('hi');
    
    itemDiv[1].innerHTML =  ''
}