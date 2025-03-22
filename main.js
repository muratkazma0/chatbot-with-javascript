const message_List = document.querySelector(".chat-box");
const input = document.querySelector(".chat-input input");
const send_Button = document.querySelector(".chat-input button");

const responses = {
  Greeting: ["Merhaba!", "Merhaba! Nasıl yardımcı olabilirim?"],
  Farewell: [
    "Görüşmek üzere!",
    "Görüşmek üzere! Herhangi bir konuda yardıma ihtiyacın olursa, her zaman buradayım. İyi günler!",
  ],
  Default: [
    "Ne yazık ki buna verecek bir cevabım yok. Başka bir şey sormayı deneyebilir misiniz?",
  ],
};

send_Button.addEventListener("click", () => {
  if (input.value !== "") {
    const message = document.createElement("div");
    message.classList.add("chat-message", "user-message");
    message.innerHTML = `<div class="chat-message-text"> ${input.value}</div>`;
    message_List.appendChild(message);

    const inputText = input.value.toLowerCase();
    let intent = "Default"; 

    if (inputText.includes("merhaba") || inputText.includes("selam")) {
      intent = "Greeting";
    } else if (
      inputText.includes("görüşmek üzere") ||
      inputText.includes("görüşürüz")
    ) {
      intent = "Farewell";
    }

    input.value = "";

    setTimeout(() => {
      const random_Index = Math.floor(Math.random() * responses[intent].length);
      const response_Text = responses[intent][random_Index];
      const bot_Message = document.createElement("div");
      bot_Message.classList.add("chat-message", "bot-message");
      bot_Message.innerHTML = `<div class="chat-message-text">${response_Text}</div>`;
      message_List.appendChild(bot_Message);

      message_List.scrollTop = message_List.scrollHeight;
    }, 1000);
  }
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    send_Button.click();
  }
});
