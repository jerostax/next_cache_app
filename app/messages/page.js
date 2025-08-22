import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// Cache the page for 5 seconds
//export const revalidate = 5;

// Force the page to be dynamic (no caching)
// export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  // Prevent caching for this fetch request
  // unstable_noStore();
  // const response = await fetch("http://localhost:8080/messages", {
  //   next: { tags: ["msg"] },
  // });
  // const messages = await response.json();

  const messages = getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
