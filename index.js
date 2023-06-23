var close = document.getElementsByClassName("delete");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove();
  }
}

function add(){
    let item=document.getElementById('input').value;
    // check if the input is valid or not
    if(item==''||item==null){
        return false;
    }
    let li=document.createElement('p');
    li.className = "space";
    let btn=document.createElement('button');
    btn.className = "btn btn-outline-danger delete";
    let tn=document.createTextNode(item);
    let tn2=document.createTextNode('delete');
    btn.appendChild(tn2);
    li.appendChild(tn);
    li.appendChild(btn);
    document.getElementById("list").appendChild(li);
    document.getElementById('input').value="";

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.remove();
        }
      }
}





