
firebase.initializeApp(config);
var db = firebase.firestore();
function verifypass(){
  var cd=document.getElementById("code").value;
  if(cd=='gensec'){
    var pass=SHA256(document.getElementById("pass").value);
    db.collection("admin").doc('blogpass').get().then(function(doc){
    var xpass=doc.data().hash;
    if(xpass != pass){
        window.alert("Wrong Password");
    }
    else{
        send2(cd);return;
    }
});
  }
  var pass=SHA256(document.getElementById("pass").value);
  db.collection("thcclub").doc(cd).get().then(function(doc){
    var xpass=doc.data().pass;
    if(xpass != pass){
        window.alert("Wrong Password");
    }
    else{
        send(cd);
    }
});        
}
function send(cd){
    var lnk=document.getElementById("link").value;
    var parag1=document.getElementById("para1").value;
    var parag2=document.getElementById("para2").value;
    var parag3=document.getElementById("para3").value;
    var up=document.getElementById("uploader").value;
    var head1=document.getElementById("heading").value;
    var data = {
    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    existence:true
    };
    if(!(up==null || up==''))
        data.uploader=up;  
    if(!(parag1==null || parag1==''))
        data.para1=parag1;  
    if(!(parag2==null || parag2==''))
        data.para2=parag2;  
    if(!(parag3==null || parag3==''))
        data.para3=parag3;
    if(!(lnk==null || lnk==''))
        data.img=lnk;
    if(!(head1==null || head1==''))
        data.heading=head1;
    db.collection("thcclub").doc(cd).collection('blogs').doc().set(data);
    alert("Succesfully updated. Press F5 or Ctrl+R to make a new entry.");
}
function send2(cd){
    var lnk=document.getElementById("link").value;
    var parag1=document.getElementById("para1").value;
    var parag2=document.getElementById("para2").value;
    var parag3=document.getElementById("para3").value;
    var up=document.getElementById("uploader").value;
    var head1=document.getElementById("heading").value;
    var data = {
    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    existence:true
    };
    if(!(up==null || up==''))
        data.uploader=up;  
    if(!(parag1==null || parag1==''))
        data.para1=parag1;  
    if(!(parag2==null || parag2==''))
        data.para2=parag2;  
    if(!(parag3==null || parag3==''))
        data.para3=parag3;
    if(!(lnk==null || lnk==''))
        data.img=lnk;
    if(!(head1==null || head1==''))
        data.heading=head1;
    db.collection("gensec-blogs").doc().set(data);
    alert("Succesfully updated. Press F5 or Ctrl+R to make a new entry.");
}