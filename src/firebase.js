import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
 
      
      const firebaseConfig = {
        apiKey: "AIzaSyD_jXiGj8WKQw_y6VOWDmkTyz8hLSnH8-g",
        authDomain: "courses-platform-ec208.firebaseapp.com",
        projectId: "courses-platform-ec208",
        storageBucket: "courses-platform-ec208.appspot.com",
        messagingSenderId: "513858245840",
        appId: "1:513858245840:web:446c90bdb7773e8198bad5",
        measurementId: "G-J5M73XBTJK"
      };
      function someFunctionFromTheScript() {
        console.log('This function is from the script.');
      }
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      export default firebase;