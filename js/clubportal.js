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
    var dat=document.getElementById("data").value;
    var link=document.getElementById("src").value;
    var link2=document.getElementById("src2").value;
    var link3=document.getElementById("src3").value;
    var link4=document.getElementById("src4").value;
    var link5=document.getElementById("src5").value;
    var parag1=document.getElementById("para1").value;
    var parag2=document.getElementById("para2").value;
    var parag3=document.getElementById("para3").value;
    var parag4=document.getElementById("para4").value;
    var annr=document.getElementById("announcer").value;
    var annt=document.getElementById("announcement").value;
    var webm=document.getElementById("webmaster").value;
    var head1=document.getElementById("heading").value;
    var head2=document.getElementById("heading2").value;
    var intr=document.getElementById("intro").value;
    var ann=(document.getElementById("announce").value=='yes')?true:false;
    var data = {
    announce:ann,
    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    existence:true
    };
    if(!(head2==null || head2==''))
        data.heading2=head2;
    if(!(intr==null || intr==''))
        data.intro=intr;
    if(!(webm==null || webm==''))
        data.webmaster=webm;  
    if(!(parag1==null || parag1==''))
        data.para1=parag1;  
    if(!(parag2==null || parag2==''))
        data.para2=parag2;  
    if(!(parag3==null || parag3==''))
        data.para3=parag3;  
    if(!(parag4==null || parag4==''))
        data.para4=parag4;
    if(!(link==null || link==''))
        data.src=link;
    if(!(link2==null || link2==''))
        data.src2=link2;
    if(!(link3==null || link3==''))
        data.src3=link3;
    if(!(link4==null || link4==''))
        data.src4=link4;
    if(!(link5==null || link5==''))
        data.src5=link5;
    if(!(dat==null || dat==''))
        data.data=dat;
    if(!(head1==null || head1==''))
        data.heading=head1;
    if(ann){
        if(!(annr==null || annr==''))
            data.announcer=annr;
        if(!(annt==null || annt==''))
            data.announcement=annt;
    }
    db.collection("thcclub").doc(cd).update(data);
    alert("Succesfully updated. Press F5 or Ctrl+R to make a new entry.");
}