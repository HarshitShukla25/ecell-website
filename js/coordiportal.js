var config = {
    apiKey: "AIzaSyDKfbSL1CzA6Xsoz-r22Nz1iQ9LLjol0mI",
    authDomain: "snt-website.firebaseapp.com",
    databaseURL: "https://snt-website.firebaseio.com",
    projectId: "snt-website",
    storageBucket: "snt-website.appspot.com",
    messagingSenderId: "906105933125"
};
firebase.initializeApp(config);
var db = firebase.firestore();
function verifypass(){
  var cd=document.getElementById("code").value;
  var pass=SHA256(document.getElementById("pass").value);
  db.collection("admin").doc('cordipass').get().then(function(doc){
    var xpass=doc.data().hash;
    if(xpass != pass){
        window.alert("Wrong Password");
    }
    else{
        send(cd);
    }
});        
}
function send(cd){
    var na=document.getElementById("name").value;
    var link=document.getElementById("src").value;
    var facebook=document.getElementById("facebook").value;
    var linkedin=document.getElementById("linkedin").value;
    var twitter=document.getElementById("twitter").value;
    var quote=document.getElementById("quote").value;
    var data = {
    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    existence:true
    };
    if(!(na==null || na==''))
        data.name=na;
    if(!(facebook==null || facebook==''))
        data.fb=facebook;
    if(!(linkedin==null || linkedin==''))
        data.lnkd=linkedin;  
    if(!(twitter==null || twitter==''))
        data.twit=twitter;
    if(!(link==null || link==''))
        data.src=link;
    if(!(quote==null || quote==''))
        data.quote=quote;
    db.collection("thcclub").doc(cd).collection("cordis").doc().set(data);
    alert("Succesfully updated. Press F5 or Ctrl+R to make a new entry.");
}