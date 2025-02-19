const target = document.querySelector(".block");

class Cursor {
  constructor(el) {
    this.el = el;
    this.bind();
  }

  bind() {
    document.addEventListener("mousemove", this.move.bind(this), false);
  }

  move(e) {
    const cursorPosition = {
      left: e.clientX,
      top: e.clientY,
    };

    document.querySelectorAll(".block").forEach((single) => {
      const rect = single.getBoundingClientRect();

      // Calculate the dynamic trigger distance based on both width and height
      const triggerDistanceX = rect.width / 2; // Horizontal radius based on width
      const triggerDistanceY = rect.height / 2; // Vertical radius based on height

      const targetPosition = {
        left: rect.left + rect.width / 2,
        top: rect.top + rect.height / 2,
      };

      const distance = {
        x: targetPosition.left - cursorPosition.left,
        y: targetPosition.top - cursorPosition.top,
      };

      const angle = Math.atan2(distance.x, distance.y);

      const hypotenuse = Math.sqrt(
        distance.x * distance.x + distance.y * distance.y
      );

      // Check if the cursor is within the dynamic trigger distance based on both dimensions
      if (
        Math.abs(distance.x) < triggerDistanceX &&
        Math.abs(distance.y) < triggerDistanceY
      ) {
        TweenMax.killTweensOf(single.querySelector(".ball-wrapper"));
        TweenMax.to(single.querySelector(".ball-wrapper"), 0.3, {
          x: -((Math.sin(angle) * hypotenuse) / 1.3),
          y: -((Math.cos(angle) * hypotenuse) / 1.3),
        });
      } else {
        TweenMax.killTweensOf(single.querySelector(".ball-wrapper"));
        TweenMax.to(single.querySelector(".ball-wrapper"), 1, {
          x: 0,
          y: 0,
        });
      }
    });
  }
}

const cursor = new Cursor(target);

function setResponsiveCursor(size) {
  // update SVG with dynamic width and height
  const svg = `<svg width="${size}" height="${size}" viewBox="-5.52 -5.52 35.04 35.04" fill="#dcdcdc" xmlns="http://www.w3.org/2000/svg" transform="rotate(270)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.6943 3H11C6.02943 3 2 7.02944 2 12C2 16.9706 6.02944 21 11 21H13.6943V16.5H10.9444C8.45916 16.5 6.44444 14.4853 6.44444 12C6.44444 9.51472 8.45916 7.5 10.9444 7.5H13.6943V3Z" fill="#dcdcdc"></path> <path d="M15.1943 7.5H16.5C17.3284 7.5 18 6.82843 18 6V4.5C18 3.67157 17.3284 3 16.5 3H15.1943V7.5Z" fill="#dcdcdc"></path> <path d="M15.1943 16.5V21H16.5C17.3284 21 18 20.3284 18 19.5V18C18 17.1716 17.3284 16.5 16.5 16.5H15.1943Z" fill="#dcdcdc"></path> <path d="M20.1556 8.63577C19.9545 8.27368 19.4979 8.14322 19.1358 8.34438C18.7768 8.54383 18.6455 8.99441 18.8393 9.35499L18.8443 9.36522C18.8512 9.37962 18.8643 9.40834 18.8818 9.45198C18.9167 9.53919 18.9691 9.6865 19.0235 9.89878C19.1322 10.3228 19.25 11.0101 19.25 12C19.25 12.9899 19.1322 13.6772 19.0235 14.1012C18.9691 14.3135 18.9167 14.4608 18.8818 14.548C18.8643 14.5917 18.8512 14.6204 18.8443 14.6348L18.8393 14.645C18.6455 15.0056 18.7768 15.4562 19.1358 15.6556C19.4979 15.8568 19.9545 15.7263 20.1556 15.3642L19.5 15C20.1556 15.3642 20.1556 15.3642 20.1556 15.3642L20.1563 15.3629L20.1571 15.3615L20.1588 15.3585L20.1626 15.3514L20.1723 15.333C20.1795 15.3189 20.1884 15.3012 20.1986 15.2797C20.2191 15.2367 20.2451 15.1787 20.2745 15.1051C20.3333 14.9579 20.4059 14.749 20.4765 14.4738C20.6178 13.9228 20.75 13.1101 20.75 12C20.75 10.8899 20.6178 10.0772 20.4765 9.52622C20.4059 9.251 20.3333 9.04206 20.2745 8.89489C20.2451 8.82135 20.2191 8.76335 20.1986 8.72032C20.1884 8.69881 20.1795 8.68106 20.1723 8.66699L20.1626 8.64864L20.1588 8.64152L20.1571 8.63847L20.1563 8.63708C20.1563 8.63708 20.1556 8.63577 19.5 9L20.1556 8.63577Z" fill="#dcdcdc"></path> <path d="M23.5031 14.846C23.3541 15.6504 23.1541 16.3136 22.95 16.8443C22.7463 17.3741 22.5394 17.7692 22.3775 18.0391C22.2966 18.1739 22.227 18.2773 22.1748 18.3504C22.1487 18.387 22.1269 18.416 22.1102 18.4376C22.1019 18.4484 22.0948 18.4573 22.0891 18.4644L22.0816 18.4737L22.0786 18.4773L22.0773 18.4788L22.0762 18.4802C21.811 18.7984 21.3381 18.8414 21.0199 18.5762C20.7032 18.3123 20.6591 17.8427 20.92 17.5245L20.9235 17.52C20.9288 17.5132 20.9393 17.4994 20.9542 17.4785C20.984 17.4368 21.0316 17.3668 21.0913 17.2673C21.2106 17.0683 21.3788 16.751 21.55 16.3058C21.7115 15.8859 21.8767 15.3499 22.006 14.6894C22.1332 14.0394 22.2258 13.2688 22.2459 12.3696C22.2486 12.2487 22.25 12.1255 22.25 12C22.25 11.4979 22.2276 11.0333 22.1887 10.6049C22.0719 9.31976 21.8063 8.36076 21.55 7.69429C21.3788 7.24907 21.2106 6.93174 21.0913 6.7328C21.0316 6.63328 20.984 6.56324 20.9542 6.52153C20.9393 6.50068 20.9288 6.4869 20.9235 6.48006L20.92 6.47558C20.6591 6.15743 20.7032 5.68775 21.0199 5.42385C21.3381 5.15868 21.811 5.20167 22.0762 5.51988L22.0773 5.52126L22.0786 5.5228L22.0816 5.52641L22.0891 5.53568C22.0948 5.54278 22.1019 5.55171 22.1102 5.5625C22.1269 5.58408 22.1487 5.61307 22.1748 5.64964C22.227 5.72277 22.2966 5.82617 22.3775 5.96102C22.5394 6.23084 22.7463 6.626 22.95 7.15578C23.2513 7.93896 23.5435 9.01067 23.676 10.3992C23.7231 10.8924 23.75 11.4256 23.75 12C23.75 12 23.75 12 23.75 12" fill="#dcdcdc"></path> <path d="M23.75 12C23.75 13.0958 23.6521 14.0415 23.5031 14.846L23.75 12Z" fill="#dcdcdc"></path> </g></svg>`;

  // Convert the SVG into a Base64 data URL
  const dataUrl = `data:image/svg+xml;base64,${btoa(svg)}`;

  // Set the cursor dynamically
  document.body.style.cursor = `url(${dataUrl}) ${size / 2} ${size / 2}, auto`;
}

window.addEventListener("mousemove", () => {
  const newSize = Math.min(100, Math.max(60, window.innerWidth / 1)); // Scale the size based on screen width
  setResponsiveCursor(newSize);
});
