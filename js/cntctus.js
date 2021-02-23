
firebase.initializeApp(config);
var db = firebase.firestore();

function namecheck(name){
  var x='!@#$%^&*()_+-={}[];:"?><,./~`|'
  var len=x.length;
  for(var i=0; i<10; i++){
    if(name.indexOf(i)!=-1){
      return -1;
    }
  }
  for(var i=0; i<len; i++){
    if(name.indexOf(x.charAt(i))!=-1){
      return 1;
    }
  }
  return 0;
}

function phnchk(phoneno){
  var x='!@#$%^&*()_+-={}[];:"?><,./~`|abcdefghijklmnoprstuvwxyz'
  var len=x.length;
  for(var i=0; i<len; i++){
    if(phoneno.indexOf(x.charAt(i))!=-1){
      return -1;
    }
  }
  return 0;
}

function updater()
{
  var f=1;
  var em=document.getElementById("email").value;
  if(em.indexOf('@')==-1){
    n2('Invalid E-mail address, missing "@".');f=0;
  }
  if(em.indexOf('.')==-1){
    n2('Invalid E-mail address, missing ".".');f=0;
  }
  var name=document.getElementById("name").value;
  if(name==''||name==null){
    n1('Empty Name field.');f=0;
  }
  if(namecheck(name)==-1){
    n1('Invalid Name, contains numbers.');f=0;
  }
  if(namecheck(name)==1){
    n1('Invalid Name, contains invalid characters.');f=0;
  }
  var phoneno=document.getElementById("website").value;
  if(phoneno==''||phoneno==null){
    n3('Empty Phone Number field.');f=0;
  }
  if(phnchk(phoneno)==-1){
    n3('Invalid Phone Number.');f=0;
  }
  var msg=document.getElementById("comments").value;
  if(msg=='' || msg==null){
    n4('Empty message!!!');f=0;
  }
  var data = {
  message:msg,
  phoneno:phoneno,
  em:em,
  name:name,
  timeStamp: firebase.firestore.FieldValue.serverTimestamp()
  };
  if(f==1){
    db.collection("formsubmissions").doc().set(data);
    alert("Thanks for Your Feedback!");
  }
}
