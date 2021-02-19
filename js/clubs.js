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
function clubmaker(code){
    var dt=[];
    var hu = new Vue({
        el: '#club',
        data () {
          return {
          clubdata: {},
          cordilist: [],
          time:''
          }
        },
        mounted () {
        db.collection("thcclub").doc(code).get().then((doc) => {
            this.clubdata=(doc.data());
            this.time= new Date(doc.data().timeStamp.seconds*1000);
            dt=[];
            dt.push(doc.data().src);
            dt.push(doc.data().src2);
            dt.push(doc.data().src3);
            dt.push(doc.data().src4);
            dt.push(doc.data().src5);
            execute(dt);
        });
        db.collection("thcclub").doc(code).collection("cordis").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.cordilist.push(doc.data());
            });
        });
    }
});
}

function execute(x1){
    jQuery(document).ready(function($){
    'use strict';
    jQuery('body').backstretch(x1, {duration: 5000, fade: 500});
    });
}