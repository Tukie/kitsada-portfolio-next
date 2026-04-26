"use client";

import { useState } from "react";
import { X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dayjs from "dayjs";
import { useLocale } from "next-intl";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const getInitialMessage = (locale: string) => {
  if (locale === "th") {
    return "สวัสดี! ผมเป็นผู้ช่วย AI ของคุณ มีอะไรให้ช่วยไหม?";
  }
  return "Hi! I'm your AI assistant. How can I help you today?";
};

export default function AIChat() {
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: getInitialMessage(locale),
      sender: "ai",
      timestamp: dayjs().toDate(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: dayjs().valueOf().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: dayjs().toDate(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    scrollChatToBottom();
    setIsTyping(true);

    // Call AI API
    const aiResponse = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: inputMessage }),
    });

    const data = await aiResponse.json();
    const aiResponseText = data?.data || "";
    console.log("AI Response:", aiResponseText);

    const aiMessage: Message = {
      id: dayjs().valueOf().toString(),
      text: aiResponseText,
      sender: "ai",
      timestamp: dayjs().toDate(),
    };
    setMessages((prev) => [...prev, aiMessage]);
    scrollChatToBottom();

    setIsTyping(false);
    focusInput();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const focusInput = () => {
    setTimeout(() => {
      const input = document.getElementById("chat-input");
      if (input) {
        input.focus();
      }
    }, 100);
  };

  const scrollChatToBottom = () => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      setTimeout(() => {
        chatContainer.scrollTo({
          top: chatContainer.scrollHeight + 100000,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center w-14 h-14 justify-center text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 bg-linear-to-r from-blue-500 via-primary-500 to-primary-500",
        )}
      >
        <Bot className="w-6! h-6!" />
      </Button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-90 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs text-white!">Always here to help</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages Container */}
          <div
            id="chat-container"
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3 max-w-[80%]",
                  message.sender === "user" ? "ml-auto flex-row-reverse" : "",
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    message.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-600",
                  )}
                >
                  {message.sender === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm",
                    message.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-white text-gray-800 border border-gray-200",
                  )}
                >
                  <p className="warp-break">{message.text}</p>
                  <p
                    className={cn(
                      "text-[10px] mt-1",
                      message.sender === "user"
                        ? "text-white"
                        : "text-gray-500",
                    )}
                  >
                    {dayjs(message.timestamp).format("HH:mm")}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white text-gray-800 border border-gray-200 px-3 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                id="chat-input"
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isTyping}
                className="bg-white! text-black!"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className={cn(
                  "px-3 py-2 rounded-lg transition-colors flex items-center justify-center",
                  inputMessage.trim() && !isTyping
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed",
                )}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
