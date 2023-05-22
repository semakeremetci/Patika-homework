const list = document.getElementById("list");
const task = document.getElementById("task");
const localData = localStorage.getItem("items");
const listArr = localData? localData.split(",") : ["3 Litre Su İç", "Ödevleri Yap", "En Az 3 Saat Kodlama Yap", "Yemek Yap", "50 Sayfa Kitap Oku", ]
console.log(listArr)


// Listedeki elemanlar döngüye girerek ekrana yazıldı.
listArr.forEach(addItem);

// Ekrana liste elemanı yazmak için kullanılan fonksiyon.
function addItem(item){
    let li = document.createElement("li");
    let x = document.createElement("span");
    li.innerText = item;
    x.innerText = "x";
    x.className = "close"
    li.appendChild(x);
    list.appendChild(li);

    // Listedeki seçili elemanı görünmez yapmak.
    x.addEventListener("click", function() {
        this.parentElement.style.display = "none"

        // Görünmez olan elemanı listArr'den silmek.
        // console.log(this.parentElement.firstChild.textContent)
        let index =listArr.indexOf(this.parentElement.firstChild.textContent)
        let spliced = listArr.splice(index,1)
        // console.log(listArr)
        localStorage.setItem("items", listArr)
    })
}

// Listenin içinden li tagname e sahip elemanın classını değiştirmek.
list.addEventListener("click", function(item) {
    if(item.target.tagName == "LI") {
        item.target.classList.toggle("checked")
    }
})

// ekle butonuna basılınca listeye yeni eleman ekler
function newElement() {
    if(task.value != 0) {
        addItem(task.value)
        $("#liveToast").toast("show") 
        listArr.push(task.value)
        localStorage.setItem("items", listArr)
        console.log(listArr)
        task.value = ""
    } else {
        $("#liveToastError").toast("show") 
    }
}

