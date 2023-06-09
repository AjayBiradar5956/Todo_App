
//Color the Cateogory box's according to the category
var catbox = document.querySelectorAll(".categorybox");
for (let i = 0; i < catbox.length; i++) {
    if (catbox[i].innerHTML.includes("Personal")) {
        catbox[i].style.backgroundColor = "blue";
    }
    else if (catbox[i].innerHTML.includes("School")) {
        catbox[i].style.backgroundColor = "orange";
    }
    else if (catbox[i].innerHTML.includes("Work")) {
        catbox[i].style.backgroundColor = "Purple";
    }
    else if (catbox[i].innerHTML.includes("Cleaning")) {
        catbox[i].style.backgroundColor = "green";
    }
    else if (catbox[i].innerHTML.includes("Others")) {
        catbox[i].style.backgroundColor = "red";
    }
}

//Handle when category field is empty
for (let k = 0; k < catbox.length; k++) {
    if (catbox[k].innerText == '') {
        catbox[k].classList.remove("categorybox");
    }
}

//To make MM/DD/YYY to Month Day, Year
var date = document.querySelectorAll(".date");
var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
for (let j = 0; j < date.length; j++) {
    var now = new Date(date[j].innerHTML.trim());
    var result = (months[now.getMonth()] + ' ' + now.getDate() + ',' + now.getFullYear());
    date[j].innerHTML = result;
}

//To handle Delete Operation
var checkboxes = document.querySelectorAll(".checkboxs");
var checkedList = [];
for (var checkbox of checkboxes) {
    checkbox.addEventListener('click', function () {
        if (this.checked == true) {
            checkedList.push(this.value)
            console.log(checkedList);
        }
    })
};
$(document).ready(function () {
    $('.delete').click(function () {
        $.post("/delete-list",
            {
                description: checkedList,
                success: function (data) {
                    window.location.href = "http://localhost:8000"
                }
            }
        )
    });
});







