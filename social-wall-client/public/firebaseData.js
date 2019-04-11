// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAeY8ATyLe6CjlihGOcfQvPSAKLAVnJ86A",
    authDomain: "react-social-card.firebaseapp.com",
    databaseURL: "https://react-social-card.firebaseio.com",
    projectId: "react-social-card",
    storageBucket: "react-social-card.appspot.com",
    messagingSenderId: "801380574072"
  };
  
  // Initialize your Firebase app
  firebase.initializeApp(config);
  
  // Reference to your entire Firebase database
  var myFirebase = firebase.database().ref();
  
  // Get a reference to the recommendations object of your Firebase.
  // Note: this doesn't exist yet. But when we write to our Firebase using
  // this reference, it will create this object for us!
  var recommendations = myFirebase.child("messages");
  
  // Push our first recommendation to the end of the list and assign it a
  // unique ID automatically.
  recommendations.push({
      "title": "The danger of a single story",
      "presenter": "Chimamanda Ngozi Adichie",
      "link": "https://www.ted.com/talks/chimamanda_adichie_the_danger_of_a_single_story"
  });