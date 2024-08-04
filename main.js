const tabsBtns = document.querySelectorAll("div.tabs_nav button");
const tabsItem = document.querySelectorAll(".tabs_item");
// ф-я скрывает табы и убирает acnive у кнопок
function hideTabs(){
    tabsItem.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}
// ф-я показывает переданный номер таба и делает соответствующий ему номер активный
function showTabs(index){
    tabsItem[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}
hideTabs(); 
showTabs(1);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTabs(index);
}))

// anchors перемещение по с транице через ссылки

