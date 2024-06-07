function sendEmail (){

    let prams = {

          name:document.getElementById('name').value,
          email:document.getElementById('email').value,
          subject:document.getElementById('name').value,
          message:document.getElementById('name').value,
          phone:document.getElementById('phone').value,

    }

     emailjs.send("service_gv51xnf","template_tmd4ypv",prams).then(alert("Email sent successfully :)"))
 }