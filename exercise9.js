var songContainer = document.getElementById('song_container');
console.log(songContainer);

var song = document.getElementsByClassName('song')
console.log(song);

for(var i=0; i < song.length; i++) {
    console.log(song[i].children[0].innerText);
    console.log(song[i].children[1].innerText);
};

var btnDelete1 = document.getElementById('btn-del1');
btnDelete1.addEventListener('click', Delete_div1)
function Delete_div1() {
    song[0].innerHTML = ''
};

var btnEdit1 = document.getElementById('btn-edit1');
btnEdit1.addEventListener('click', Edit_div1);
function Edit_div1() {
    console.log(song[0].attributes[1].value);
}

var btnMore1 = document.getElementById('btn-more1');
btnMore1.addEventListener('click', More_div1);
function More_div1() {
    console.log(song[0]);
    console.log(song[0].children[1].innerText);
    console.log(song[0].attributes[1].value);
};

var btnDelete2 = document.getElementById('btn-del2');
btnDelete2.addEventListener('click', Delete_div2)
function Delete_div2() {
    song[1].innerHTML = ''
}

var btnMore2 = document.getElementById('btn-more2');
btnMore2.addEventListener('click', More_div2);
function More_div2() {
    console.log(song[1]);
    console.log(song[1].children[1].innerText);
    console.log(song[1].attributes[1].value);
};


var btnEdit2 = document.getElementById('btn-edit2');
btnEdit2.addEventListener('click', Edit_div2);
function Edit_div2() {
    console.log(song[1].attributes[1].value);
}

var btnDelete3 = document.getElementById('btn-del3');
btnDelete3.addEventListener('click', Delete_div3)
function Delete_div3() {
    song[2].innerHTML = ''
}

var btnEdit3 = document.getElementById('btn-edit3');
btnEdit3.addEventListener('click', Edit_div3);
function Edit_div3() {
    console.log(song[2].attributes[1].value);
}

var btnMore3 = document.getElementById('btn-more3');
btnMore3.addEventListener('click', More_div3);
function More_div3  () {
    console.log(song[2]);
    console.log(song[2].children[1].innerText);
    console.log(song[2].attributes[1].value);
};

var btnAdd = document.getElementById('btn-add')
btnAdd.addEventListener('click', function(event) {
    var addContainer = document.getElementById('container_add');
    var addHTML = `
        <div class='song'>
            <h4>Title</h4>
            <h5>Artist</h5>
            <button>Delete</button>
            <button>Edit</button>
            <button>More</button>
        </div>
    `;
    addContainer.insertAdjacentHTML('beforeend', addHTML)
})