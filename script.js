control = 0;
store = 0;

function setPixelColour(pixel) {
  if (control === 1) {
    if (pixel.id - store === -1) {
      if (pixel.style.backgroundColor === "white") {
        if (document.getElementById(store).style.backgroundColor === "red") {
          document.getElementById(pixel.id).style.backgroundColor = "red";
          document.getElementById(store).style.backgroundColor = "white";
        }
      }
    } else if (pixel.id - store === 1) {
      if (pixel.style.backgroundColor === "white") {
        if (document.getElementById(store).style.backgroundColor === "green") {
          document.getElementById(pixel.id).style.backgroundColor = "green";
          document.getElementById(store).style.backgroundColor = "white";
        }
      }
    } else if (pixel.id - store === 2) {
      if (pixel.style.backgroundColor === "white") {
        if (document.getElementById(store).style.backgroundColor === "green") {
          document.getElementById(pixel.id).style.backgroundColor = "green";
          document.getElementById(store).style.backgroundColor = "white";
        }
      }
    } else if (pixel.id - store === -2) {
      if (pixel.style.backgroundColor === "white") {
        if (document.getElementById(store).style.backgroundColor === "red") {
          document.getElementById(pixel.id).style.backgroundColor = "red";
          document.getElementById(store).style.backgroundColor = "white";
        }
      }
    } else {
    }
    control = 0;
  } else {
    control = 1;
    store = pixel.id;
  }
}

if (document.getElementById(1).style.backgroundColor === "red") {
  alert("1");
  if (document.getElementById(2).style.backgroundColor === "red") {
    alert("2");
    if (document.getElementById(3).style.backgroundColor === "red") {
      alert("3");
      if (document.getElementById(4).style.backgroundColor === "white") {
        alert("4");
        if (document.getElementById(5).style.backgroundColor === "green") {
          alert("5");
          if (document.getElementById(6).style.backgroundColor === "green") {
            if (document.getElementById(7).style.backgroundColor === "green") {
              document.getElementById("p1").innerHTML = "You did it!";
            }
          }
        }
      }
    }
  }
}
