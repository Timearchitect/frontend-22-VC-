import { ref, remove } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

export async function deleteMessageById(db, messageId, sound = null) {
  if (!confirm("Radera detta meddelande?")) return;

  try {
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(e => console.log("Ljud kunde inte spelas"));
    }

    await remove(ref(db, `/${messageId}`));
  } catch (error) {
    console.error("Fel vid borttagning:", error);
  }
}