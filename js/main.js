$(document).ready(function () {
    // Call default season view on page load
    changeSeason("default");
  
    // Click event for navigation
    $(".seasons a").click(function (e) {
      e.preventDefault();
      let season = $(this).text().toLowerCase();
      changeSeason(season);
    });
  });
  
  // Function to change the season's content
  function changeSeason(season) {
    switch (season) {
      case "spring":
        $("html").css("background-color", "#2B7129");
        $("#logo").attr("src", "images/spring.gif").attr("alt", "Spring Logo");
        $("#wear").attr("src", "images/spring-wear.jpg").attr("alt", "Spring Wear");
        $("#season-text").text("Fresh fits for your freshest season 🌷");
        $("#season-description").html("Spring is in the air, and so are these looks! From breezy hoodies to pastel tees, we're blooming with fresh fashion. Shake off winter and step out in style. 🌸🐣");
        $(".colors li").hide();
        $(".color-spring").show();
        break;
  
      case "summer":
        $("html").css("background-color", "#EBA52B");
        $("#logo").attr("src", "images/summer.gif").attr("alt", "Summer Logo");
        $("#wear").attr("src", "images/summer-wear.jpg").attr("alt", "Summer Wear");
        $("#season-text").text("Stay cool while lookin' hot ☀️😎");
        $("#season-description").html("Suns out, style's out. Dive into tank tops, board shorts, and breezy vibes. Whether it's beach days or BBQ nights, we’ve got you covered — literally. 🏖️🍉");
        $(".colors li").hide();
        $(".color-summer").show();
        break;
  
      case "fall":
        $("html").css("background-color", "#A81124");
        $("#logo").attr("src", "images/fall.gif").attr("alt", "Fall Logo");
        $("#wear").attr("src", "images/fall-wear.jpg").attr("alt", "Fall Wear");
        $("#season-text").text("Leaves aren’t the only thing dropping — peep these fits 🍂");
        $("#season-description").html("Crisp air, warm vibes. Layer up in cozy flannels, chunky sweaters, and boots made for leaf-crunching. Fall fashion is here to turn heads. 🍁🧣");
        $(".colors li").hide();
        $(".color-fall").show();
        break;
  
      case "winter":
        $("html").css("background-color", "#005393");
        $("#logo").attr("src", "images/winter.gif").attr("alt", "Winter Logo");
        $("#wear").attr("src", "images/winter-wear.jpg").attr("alt", "Winter Wear");
        $("#season-text").text("Cold? Not with these hot looks ❄️🔥");
        $("#season-description").html("Snow problem! Stay warm and wow in puffers, scarves, and toasty threads. Perfect for sledding, sipping cocoa, or snowball showdowns. 🧤⛄");
        $(".colors li").hide();
        $(".color-winter").show();
        break;
  
      default:
        $("html").css("background-color", "#ccc");
        $("#logo").attr("src", "images/four-seasons.gif").attr("alt", "Seasonal Logo");
        $("#wear").attr("src", "images/300x400.png").attr("alt", "Season Wear");
        $("#season-text").text("Outfitter for All Seasons!");
        $("#season-description").html("Whatever the weather, we’ve got your style covered. Eddie Browser brings seasonal looks that fit every forecast. Tap into fashion that flows with the calendar. 🌦️👕");
        $(".colors li").show(); // Show all colors on default
    }
  }
  