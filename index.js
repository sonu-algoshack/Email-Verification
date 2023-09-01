

//Please Subscribe Ash_is_Coding. 
// officialsonu85728@gmail.com

function sendOTP(){
    console.log("hy")
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    let otp_val = Math.floor(Math.random()*10000);

    let emailbody = `
        <h1>Welcome,</h1> <br>
        <h2 id="otp">Your OTP is ${otp_val}</h2>
    `;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sonupoonia85728@gmail.com",
        Password : "906986001D7FEB378DB6FB45ED458581875B",
        To : email.value,
        From : "sonupoonia85728@gmail.com",
        Subject : "This is the from Ash_is_Coding, Please Subscribe",
        Body : emailbody
    }).then(
      message => {
        if(message === "OK"){
            alert("OTP sent to your email "+email.value);

            // now making otp input visible
            otpverify.style.display = "block";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click',()=>{
                // now check whether sent email is valid
                if(otp_inp.value == otp_val){
                    alert("Email address verified...");
                }
                else{
                    alert("Invalid OTP");
                }
            })
        }
        else{
            console.log("not working!")
        }
      }
    );

    // Email.send({
    //     SecureToken : "add your code here",
    //     To : email.value,
    //     From : "sonupoonia85728@gmail.com",
    //     Subject : "This is the from Ash_is_Coding, Please Subscribe",
    //     Body : emailbody
    // }).then(
    //     //if success it returns "OK";
    //   message => {
    //     if(message === "OK"){
    //         alert("OTP sent to your email "+email.value);

    //         // now making otp input visible
    //         otpverify.style.display = "block";
    //         const otp_inp = document.getElementById('otp_inp');
    //         const otp_btn = document.getElementById('otp-btn');

    //         otp_btn.addEventListener('click',()=>{
    //             // now check whether sent email is valid
    //             if(otp_inp.value == otp_val){
    //                 alert("Email address verified...");
    //             }
    //             else{
    //                 alert("Invalid OTP");
    //             }
    //         })
    //     }
    //   }
    // );

}