
firebase.initializeApp(config);
var db = firebase.firestore();
function verifypass(){
  var pass=SHA256(document.getElementById("pass").value);
  db.collection("admin").doc("gallerypass").get().then(function(doc){
    var xpass=doc.data().hash;
    if(xpass != pass){
        window.alert("Wrong Password");
    }
    else{
        send();
    }
});        
}
function send(){
    var dat=document.getElementById("data").value;
    var lin=document.getElementById("line").value;
    var link=document.getElementById("src").value;
    var data = {
    data:dat,
    src:link,
    line:lin,
    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    existence:true
    };
    db.collection("gallery").doc().set(data);
    alert("Succesfully submitted, New entry created. Press F5 or Ctrl+R to make a new entry.");
}