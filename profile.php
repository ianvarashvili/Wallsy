<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="img/logo2.png" />
    <link rel="stylesheet" href="styles/style.css" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wallsy Profile</title>
</head>
<body class="bodyfavs">
    
  <header>
      <div class="nav">
        <a href="index.html"  class="nav-link">Home</a>
        <a href="posters.html"  class="nav-link">Posters</a>
        <a href="about.html"  class="nav-link">About</a>
        <a href="signup.html"  class="nav-link">Sign Up</a>
        <a class="icon" href="profile.php"  
          ><img src="img/user.png" alt=""
        /></a>
        <a class="icon" href="cart.html" 
          ><img src="img/cart_off.png" alt=""
        /></a>
      </div>
    </header>

 <main>

 
  <h2 class="profTitle">Your Account</h2>
  <div class="profile">

<?php
$targetDir = "uploads/";
$filename = basename($_FILES["pfp"]["name"]);
$targetFile = $targetDir . $filename;
$imageUploaded = false;

if (move_uploaded_file($_FILES["pfp"]["tmp_name"], $targetFile)) {
    $imageUploaded = true;
}
?>

    <img src="<?php echo $targetFile; ?>" alt="Profile Picture" >


        <p> <strong>First Name:</strong> <?php echo $_POST["firstname"] ?></p>
        <p><strong>Last Name:</strong> <?php echo $_POST["lastname"] ?></p>
        <p><strong>Email:</strong> <?php echo $_POST["email"] ?> </p>
        

</div>
        <?php

            $userfile = fopen("users.txt", "a");
            fwrite($userfile, $_POST["firstname"]);
            fwrite($userfile, " ");
            fwrite($userfile, $_POST["lastname"]);
            fwrite($userfile, ", ");
            fwrite($userfile, $_POST["email"]);
        ?>
     </main>

   <footer>
  <p>&copy; 2025 Wallsy Posters. All rights reserved.</p>
</footer>

</body>
</html>