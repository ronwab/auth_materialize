$(document).ready(function () {


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCQUPXI0N7-b4bOpNlb6n8ML1p6YW5VJ48",
        authDomain: "ronwab-8dbcd.firebaseapp.com",
        databaseURL: "https://ronwab-8dbcd.firebaseio.com",
        projectId: "ronwab-8dbcd",
        storageBucket: "ronwab-8dbcd.appspot.com",
        messagingSenderId: "148535054528"
    };
    firebase.initializeApp(config);
    const auth = firebase.auth()
    const db = firebase.firestore()

    // db.settings({
    // timestampsInSnapshots: true
    // })



    var modals = document.querySelectorAll(".modal")
    M.Modal.init(modals)

    var items = document.querySelectorAll(".collapsible")
    M.Collapsible.init(items)

    //signup

    $("#submit").on("click", (e) => {

        e.preventDefault()
        console.log("hello");

        const email = $("#signup-email").val().trim()
        const password = $("#signup-password").val().trim()

        console.log("hello2");

        console.log(email), password;

        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            console.log(cred);
            const modal = $("#modal-signup")
            M.Modal.getInstance(modal).close()

            // Not sure why reset is not working ?
            // $("#signup-Form").reset()
            $("#login-email").val('')
            $("#login-password").val('')

        })

    })

    //logout
    $("#logout").on("click", (e) => {
        e.preventDefault()
        auth.signOut().then(() => {
            console.log("logged out");

        })

    })

    //login

    $("#login-button").on("click", (e) => {
        e.preventDefault()
        const email = $("#login-email").val().trim()
        const password = $("#login-password").val().trim()


        auth.signInWithEmailAndPassword(email, password).then(cred => {
            console.log(cred);
            const modal = $("#modal-login")
            M.Modal.getInstance(modal).close()

            // $("#login-form").reset()
            $("#login-email").val('')
            $("#login-password").val('')
        })

    })

})