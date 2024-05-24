console.log("--------------Welcome to My Portfolo -------------");
// Default FUNCTIONS for BG BELOW ↡↡↡↡↡↡↡↡↡↡↡↡↡

// Default Setting of BG of Header,Skill and Hero Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
var header_hero_bg = document.getElementsByClassName("header_hero_bg");
for (var i = 0; i < header_hero_bg.length; i++) {
  header_hero_bg[i].style.backgroundColor = "#030712";
}

// Default Setting of BG of About  and XP Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
var about_xp_bg = document.getElementsByClassName("about_xp_bg");
for (var i = 0; i < about_xp_bg.length; i++) {
  about_xp_bg[i].style.backgroundColor = "#111827";
}
// Default BG of Testimonaila boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
var testiminial_box_bg = document.getElementsByClassName("testiminial_box_bg");
for (var i = 0; i < testiminial_box_bg.length; i++) {
  testiminial_box_bg[i].style.backgroundColor = "#1F2937";
}
// Default XP_Boxes boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
var expereience_boxes = document.getElementsByClassName("expereience_boxes");
for (var i = 0; i < expereience_boxes.length; i++) {
  expereience_boxes[i].style.backgroundColor = "#1F2937";
}
// Default work_single_box boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
var work_single_box = document.getElementsByClassName("work_single_box");
for (var i = 0; i < work_single_box.length; i++) {
  work_single_box[i].style.backgroundColor = "#374151";
}
// Default work_box_content boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
var work_box_content = document.getElementsByClassName("work_box_content");
for (var i = 0; i < work_box_content.length; i++) {
  work_box_content[i].style.backgroundColor = "#1F2937";
}
// Default work_box_img boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
var work_box_img = document.getElementsByClassName("work_box_img");
for (var i = 0; i < work_box_img.length; i++) {
  work_box_img[i].style.backgroundColor = "#374151";
}

// Default Setting of COLOR of Header,  and Hero Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
var elements = document.getElementsByClassName("toogle_black_to_whote");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color = "#F9FAFB";
}

// Default Settings of all the header_heading
var header_heading = document.getElementsByClassName("header_heading");
for (var i = 0; i < header_heading.length; i++) {
  header_heading[i].style.color = "#D1D5DB";
  header_heading[i].style.backgroundColor = "#374151";
}
var dark_theme = true;

// Toogle FUNCTION BELOW ↡↡↡↡↡↡↡↡↡↡↡↡↡

document.getElementById("img_mode2").onclick = () => {
  console.log("Toogle Cliked");
  if (dark_theme) {
    dark_theme = false;
    //Changing Logo Src
    document.getElementById("logo").src = "Images/Dark_logo.png";
    //Changing Toogle Image Src
    document.getElementById("main_toogle").src = "Images/Light Mode icon.svg";
    //Changing location_icon Image Src
    document.getElementById("location_icon").src =
      "public/images/location_light.svg";

    //Changing github_light Image Src
    document.getElementById("github_img").src =
      "public/images/github_light.svg";

    //Changing twitter_img Image Src
    document.getElementById("twitter_img").src =
      "public/images/twitter_light.svg";
    //Changing figma_light Image Src
    document.getElementById("figma_light").src =
      "public/images/figma_light.svg";
    //Changing express_js Image Src
    document.getElementById("express_js").src =
      "public/images/express_light.svg";

    //Changing Cypress_light Image Src
    document.getElementById("Cypress_light").src =
      "public/images/crypress_light.svg";

    //Changing git_img_footer Image Src
    document.getElementById("git_img_footer").src =
      "public/images/github_light.svg";

    //Changing twitter_fotter Image Src
    document.getElementById("twitter_fotter").src =
      "public/images/twitter_light.svg";
    //Changing figma_footer Image Src
    document.getElementById("figma_footer").src =
      "public/images/figma_light.svg";

    // Changing COLOR of Header and Hero Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var elements = document.getElementsByClassName("toogle_black_to_whote");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "black";
    }

    // Changing BG of Header,Skill and Hero Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var header_hero_bg = document.getElementsByClassName("header_hero_bg");
    for (var i = 0; i < header_hero_bg.length; i++) {
      header_hero_bg[i].style.backgroundColor = "white";
    }

    // Changing Setting of BG of About  and XP Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var about_xp_bg = document.getElementsByClassName("about_xp_bg");
    for (var i = 0; i < about_xp_bg.length; i++) {
      about_xp_bg[i].style.backgroundColor = "#F9FAFB";
    }

    // Change BG of Testimonaila boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var testiminial_box_bg =
      document.getElementsByClassName("testiminial_box_bg");
    for (var i = 0; i < testiminial_box_bg.length; i++) {
      testiminial_box_bg[i].style.backgroundColor = "#FFFFFF";
    }

    // Changing  XP_Boxes boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var expereience_boxes =
      document.getElementsByClassName("expereience_boxes");
    for (var i = 0; i < expereience_boxes.length; i++) {
      expereience_boxes[i].style.backgroundColor = "#FFFFFF";
    }

    // Changing  Settings of all the header_heading
    var header_heading = document.getElementsByClassName("header_heading");
    for (var i = 0; i < header_heading.length; i++) {
      header_heading[i].style.color = "#4B5563";
      header_heading[i].style.backgroundColor = "#E5E7EB";
    }

    // Changing work_single_box boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var work_single_box = document.getElementsByClassName("work_single_box");
    for (var i = 0; i < work_single_box.length; i++) {
      work_single_box[i].style.backgroundColor = "#F9FAFB";
    }
    // changing work_box_content boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var work_box_content = document.getElementsByClassName("work_box_content");
    for (var i = 0; i < work_box_content.length; i++) {
      work_box_content[i].style.backgroundColor = "#ffff";
    }
    // Default work_box_img boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var work_box_img = document.getElementsByClassName("work_box_img");
    for (var i = 0; i < work_box_img.length; i++) {
      work_box_img[i].style.backgroundColor = "#F9FAFB";
    }
    // Default work_box_img boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var toogle_just_black =
      document.getElementsByClassName("toogle_just_black");
    for (var i = 0; i < toogle_just_black.length; i++) {
      toogle_just_black[i].style.color = "black";
    }
  } else {
    // Default Setting of BG of Header,Skill and Hero Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var header_hero_bg = document.getElementsByClassName("header_hero_bg");
    for (var i = 0; i < header_hero_bg.length; i++) {
      header_hero_bg[i].style.backgroundColor = "#030712";
    }

    //Changing main_toogle Image Src
    document.getElementById("main_toogle").src = "Images/Dark Mode Icon.svg";
    // Default Setting of BG of About  and XP Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var about_xp_bg = document.getElementsByClassName("about_xp_bg");
    for (var i = 0; i < about_xp_bg.length; i++) {
      about_xp_bg[i].style.backgroundColor = "#111827";
    }
    // Default BG of Testimonaila boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var testiminial_box_bg =
      document.getElementsByClassName("testiminial_box_bg");
    for (var i = 0; i < testiminial_box_bg.length; i++) {
      testiminial_box_bg[i].style.backgroundColor = "#1F2937";
    }
    // Default XP_Boxes boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var expereience_boxes =
      document.getElementsByClassName("expereience_boxes");
    for (var i = 0; i < expereience_boxes.length; i++) {
      expereience_boxes[i].style.backgroundColor = "#1F2937";
    }
    // Default work_single_box boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var work_single_box = document.getElementsByClassName("work_single_box");
    for (var i = 0; i < work_single_box.length; i++) {
      work_single_box[i].style.backgroundColor = "#374151";
    }
    // Default work_box_content boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var work_box_content = document.getElementsByClassName("work_box_content");
    for (var i = 0; i < work_box_content.length; i++) {
      work_box_content[i].style.backgroundColor = "#1F2937";
    }
    // Default work_box_img boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var work_box_img = document.getElementsByClassName("work_box_img");
    for (var i = 0; i < work_box_img.length; i++) {
      work_box_img[i].style.backgroundColor = "#374151";
    }

    //Changing Logo Src
    document.getElementById("logo").src = "Images/Hamza_Logo.png";

    // Default Setting of COLOR of Header,  and Hero Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var elements = document.getElementsByClassName("toogle_black_to_whote");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "#F9FAFB";
    }

    // Default Settings of all the header_heading
    var header_heading = document.getElementsByClassName("header_heading");
    for (var i = 0; i < header_heading.length; i++) {
      header_heading[i].style.color = "#D1D5DB";
      header_heading[i].style.backgroundColor = "#374151";
    }
    // Default Settings of all the change_heading_to_dark_theme
    var change_heading_to_dark_theme = document.getElementsByClassName(
      "change_heading_to_dark_theme"
    );
    for (var i = 0; i < change_heading_to_dark_theme.length; i++) {
      change_heading_to_dark_theme[i].style.color = "#ffff";
    }
    dark_theme = true;
  }
};
document.getElementById("img_mode").onclick = () => {
  console.log("Toogle Cliked");
  if (dark_theme) {
    dark_theme = false;
    //Changing Logo Src
    document.getElementById("logo").src = "Images/Dark_logo.png";
    //Changing Toogle Image Src
    document.getElementById("main_toogle").src = "Images/Light Mode icon.svg";
    //Changing location_icon Image Src
    document.getElementById("location_icon").src =
      "public/images/location_light.svg";

    //Changing github_light Image Src
    document.getElementById("github_img").src =
      "public/images/github_light.svg";

    //Changing twitter_img Image Src
    document.getElementById("twitter_img").src =
      "public/images/twitter_light.svg";
    //Changing figma_light Image Src
    document.getElementById("figma_light").src =
      "public/images/figma_light.svg";
    //Changing express_js Image Src
    document.getElementById("express_js").src =
      "public/images/express_light.svg";

    //Changing Cypress_light Image Src
    document.getElementById("Cypress_light").src =
      "public/images/crypress_light.svg";

    //Changing git_img_footer Image Src
    document.getElementById("git_img_footer").src =
      "public/images/github_light.svg";

    //Changing twitter_fotter Image Src
    document.getElementById("twitter_fotter").src =
      "public/images/twitter_light.svg";
    //Changing figma_footer Image Src
    document.getElementById("figma_footer").src =
      "public/images/figma_light.svg";

    // Changing COLOR of Header and Hero Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var elements = document.getElementsByClassName("toogle_black_to_whote");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "black";
    }

    // Changing BG of Header,Skill and Hero Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var header_hero_bg = document.getElementsByClassName("header_hero_bg");
    for (var i = 0; i < header_hero_bg.length; i++) {
      header_hero_bg[i].style.backgroundColor = "white";
    }

    // Changing Setting of BG of About  and XP Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var about_xp_bg = document.getElementsByClassName("about_xp_bg");
    for (var i = 0; i < about_xp_bg.length; i++) {
      about_xp_bg[i].style.backgroundColor = "#F9FAFB";
    }

    // Change BG of Testimonaila boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var testiminial_box_bg =
      document.getElementsByClassName("testiminial_box_bg");
    for (var i = 0; i < testiminial_box_bg.length; i++) {
      testiminial_box_bg[i].style.backgroundColor = "#FFFFFF";
    }

    // Changing  XP_Boxes boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var expereience_boxes =
      document.getElementsByClassName("expereience_boxes");
    for (var i = 0; i < expereience_boxes.length; i++) {
      expereience_boxes[i].style.backgroundColor = "#FFFFFF";
    }

    // Changing  Settings of all the header_heading
    var header_heading = document.getElementsByClassName("header_heading");
    for (var i = 0; i < header_heading.length; i++) {
      header_heading[i].style.color = "#4B5563";
      header_heading[i].style.backgroundColor = "#E5E7EB";
    }

    // Changing work_single_box boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var work_single_box = document.getElementsByClassName("work_single_box");
    for (var i = 0; i < work_single_box.length; i++) {
      work_single_box[i].style.backgroundColor = "#F9FAFB";
    }
    // changing work_box_content boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var work_box_content = document.getElementsByClassName("work_box_content");
    for (var i = 0; i < work_box_content.length; i++) {
      work_box_content[i].style.backgroundColor = "#ffff";
    }
    // Default work_box_img boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var work_box_img = document.getElementsByClassName("work_box_img");
    for (var i = 0; i < work_box_img.length; i++) {
      work_box_img[i].style.backgroundColor = "#F9FAFB";
    }
    // Default work_box_img boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var toogle_just_black =
      document.getElementsByClassName("toogle_just_black");
    for (var i = 0; i < toogle_just_black.length; i++) {
      toogle_just_black[i].style.color = "black";
    }
  } else {
    // Default Setting of BG of Header,Skill and Hero Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var header_hero_bg = document.getElementsByClassName("header_hero_bg");
    for (var i = 0; i < header_hero_bg.length; i++) {
      header_hero_bg[i].style.backgroundColor = "#030712";
    }

    //Changing main_toogle Image Src
    document.getElementById("main_toogle").src = "Images/Dark Mode Icon.svg";
    // Default Setting of BG of About  and XP Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var about_xp_bg = document.getElementsByClassName("about_xp_bg");
    for (var i = 0; i < about_xp_bg.length; i++) {
      about_xp_bg[i].style.backgroundColor = "#111827";
    }
    // Default BG of Testimonaila boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var testiminial_box_bg =
      document.getElementsByClassName("testiminial_box_bg");
    for (var i = 0; i < testiminial_box_bg.length; i++) {
      testiminial_box_bg[i].style.backgroundColor = "#1F2937";
    }
    // Default XP_Boxes boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var expereience_boxes =
      document.getElementsByClassName("expereience_boxes");
    for (var i = 0; i < expereience_boxes.length; i++) {
      expereience_boxes[i].style.backgroundColor = "#1F2937";
    }
    // Default work_single_box boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var work_single_box = document.getElementsByClassName("work_single_box");
    for (var i = 0; i < work_single_box.length; i++) {
      work_single_box[i].style.backgroundColor = "#374151";
    }
    // Default work_box_content boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var work_box_content = document.getElementsByClassName("work_box_content");
    for (var i = 0; i < work_box_content.length; i++) {
      work_box_content[i].style.backgroundColor = "#1F2937";
    }
    // Default work_box_img boxes Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var work_box_img = document.getElementsByClassName("work_box_img");
    for (var i = 0; i < work_box_img.length; i++) {
      work_box_img[i].style.backgroundColor = "#374151";
    }

    //Changing Logo Src
    document.getElementById("logo").src = "Images/Hamza_Logo.png";

    // Default Setting of COLOR of Header,  and Hero Section 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
    var elements = document.getElementsByClassName("toogle_black_to_whote");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "#F9FAFB";
    }

    // Default Settings of all the header_heading
    var header_heading = document.getElementsByClassName("header_heading");
    for (var i = 0; i < header_heading.length; i++) {
      header_heading[i].style.color = "#D1D5DB";
      header_heading[i].style.backgroundColor = "#374151";
    }
    // Default Settings of all the change_heading_to_dark_theme
    var change_heading_to_dark_theme = document.getElementsByClassName(
      "change_heading_to_dark_theme"
    );
    for (var i = 0; i < change_heading_to_dark_theme.length; i++) {
      change_heading_to_dark_theme[i].style.color = "#ffff";
    }
    dark_theme = true;
  }
};
let hidemenu = document.getElementById("hidebar");
let ham = document.getElementById("hm")
let cross = document.getElementById("cross");


hidemenu.classList.add("hidden");

ham.addEventListener('click', () => {
    ham.style.display = "none";
    hidemenu.classList.remove("hidden");
})
cross.addEventListener('click', () => {
    ham.style.display = "flex";
    hidemenu.classList.add("hidden");
})
