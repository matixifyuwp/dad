"use client";

import { useEffect, useState } from "react";

type ServerStatus = "checking" | "online" | "offline";

export function StatusChip() {
  const [status, setStatus] = useState<ServerStatus>("checking");
  const [players, setPlayers] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      try {
        const res = await fetch(
          "https://api.mcsrvstat.us/3/69.197.176.168",
          { cache: "no-store" }
        );
        const data = await res.json();
        if (cancelled) return;
        if (data.online) {
          setStatus("online");
          setPlayers(data.players?.online ?? 0);
        } else {
          setStatus("offline");
        }
      } catch {
        if (!cancelled) setStatus("offline");
      }
    };

    check();
    const id = setInterval(check, 60000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const dot =
    status === "online"
      ? "bg-[#3DDC84]"
      : status === "checking"
        ? "bg-[#A69C8E]"
        : "bg-[#E8481A]";

  const text =
    status === "online"
      ? players !== null
        ? `online — ${players} playing`
        : "online"
      : status === "checking"
        ? "checking status..."
        : "offline right now";

  return (
    <div className="pixel-corner-sm inline-flex items-center gap-2 border border-[#2A231C] bg-[#171310]/90 px-3 py-1.5 font-mono text-xs tracking-wide text-[#A69C8E]">
      <span className={`h-2 w-2 ${dot} ${status === "online" ? "pin-pulse" : ""}`} />
      {text}
    </div>
  );
}
