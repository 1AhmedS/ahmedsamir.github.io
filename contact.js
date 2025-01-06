document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const formMessages = document.getElementById("form-messages");

  contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      // Webhook URL
      const webhookURL = "https://discord.com/api/webhooks/1325846128251502693/ZcgEGkimuMTuENcoTPem7lVpxAbq8sCKzO0QmD-zOxWfUCzDY7l7yUhGcanitxYEj0UZ";

      // Prepare payload for Discord Webhook
      const discordPayload = {
          username: "Contact From Website",
          avatar_url: "https://i.ibb.co/B2YFCvT/8faeb7f593a8a1c5a90086b8700390bc.jpg", // يمكنك إضافة صورة رمزية
          embeds: [
              {
                  title: "New Contact Form Submission",
                  color: 3447003,
                  fields: [
                      { name: "Name", value: name || "N/A", inline: true },
                      { name: "Email", value: email || "N/A", inline: true },
                      { name: "Message", value: message || "N/A", inline: false },
                  ],
                  timestamp: new Date(),
              },
          ],
      };

      // Send data to Webhook
      fetch(webhookURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(discordPayload),
      })
          .then((response) => {
              if (response.ok) {
                  formMessages.innerHTML = `<p class="success-message">Your message has been sent successfully!</p>`;
                  contactForm.reset();
              } else {
                  formMessages.innerHTML = `<p class="error-message">Failed to send your message. Please try again later.</p>`;
              }
          })
          .catch((error) => {
              console.error("Error:", error);
              formMessages.innerHTML = `<p class="error-message">An error occurred while sending the message.</p>`;
          });
  });
});

  
  /* ---- particles.js config ---- */
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-1";
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

function createStars() {
    stars = [];
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.2,
        });
    }
}

function updateStars() {
    stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

function animate() {
    updateStars();
    drawStars();
    requestAnimationFrame(animate);
}

createStars();
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createStars();
});