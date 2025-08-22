import { redirect } from "next/navigation";

import { addMessage } from "@/lib/messages";
// import { revalidatePath, revalidateTag } from "next/cache";

export default function NewMessagePage() {
  async function createMessage(formData) {
    "use server";

    const message = formData.get("message");
    addMessage(message);

    // Revalidate the messages layout to update the message count
    // revalidatePath("/messages", "layout");

    // Revalidate the messages page to show the new message in the list
    // revalidatePath("/messages");

    // Revalidate any route that uses the 'msg' tag
    // revalidateTag("msg");

    redirect("/messages");
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
