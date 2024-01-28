import React from "react";


function Footer() {
    return (
       
<footer class="text-center text-white" style="background-color: #21081a;">  
  <div class="container p-4"></div>  
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    {getFullYear()}
    <a class="text-white" href="https://github.com/sebswit/">Sebastian Switakowski</a>
  </div>
  
</footer>

    );
}

export default Footer;