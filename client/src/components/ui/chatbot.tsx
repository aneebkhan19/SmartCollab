import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { apiRequest } from '@/lib/queryClient';
import { X, Send, ChevronDown, Loader2, Bot, Sparkles, Robot, BrainCircuit, MessageCircle } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi there! I\'m the AI assistant for Aivora Labs. I can answer questions about our services, technologies, and company. How can I help you today?'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Toggle greeting message visibility
  useEffect(() => {
    // Show greeting 2 seconds after component mounts
    const timer = setTimeout(() => {
      setShowGreeting(true);
    }, 3000);
    
    // Hide greeting after it's been shown for 7 seconds
    const hideTimer = setTimeout(() => {
      setShowGreeting(false);
    }, 10000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessageMutation = useMutation({
    mutationFn: async (userMessage: string) => {
      const response = await apiRequest('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          message: userMessage,
          history: messages
        })
      });
      return response as { answer: string };
    },
    onMutate: (userMessage) => {
      const newUserMessage: Message = {
        role: 'user',
        content: userMessage
      };
      setMessages(prev => [...prev, newUserMessage]);
      setMessage('');
    },
    onSuccess: (data) => {
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.answer
      };
      setMessages(prev => [...prev, assistantMessage]);
    },
    onError: () => {
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error processing your request. Please try again later.'
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  });

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    sendMessageMutation.mutate(message);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Animation variants for the robot icon
  const robotIconVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  // Animation variants for typing dots
  const typingDotsVariants = {
    animate: {
      opacity: [0.2, 1, 0.2],
      transition: {
        duration: 1,
        repeat: Infinity
      }
    }
  };

  // Animation variants for greeting bubble
  const greetingBubbleVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.7, 
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Greeting Bubble - Shown above the chat button */}
      <AnimatePresence>
        {!isOpen && showGreeting && (
          <motion.div
            className="absolute bottom-20 right-0 mb-2"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={greetingBubbleVariants}
          >
            <div className="bg-white p-3 pr-4 rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-lg border border-indigo-100 max-w-[200px] relative">
              <p className="text-sm font-medium text-gray-800">How may I help you today?</p>
              <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white border-r border-b border-indigo-100 transform rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      {!isOpen && (
        <motion.div
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={() => setIsOpen(true)} 
            className="w-16 h-16 rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 flex items-center justify-center overflow-hidden group"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Background animation light effects */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                <div className="absolute top-1 left-1 w-5 h-5 rounded-full bg-blue-300 blur-sm animate-pulse"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-purple-300 blur-sm animate-pulse delay-150"></div>
              </div>
              
              {/* Robot icon with animation */}
              <motion.div
                variants={robotIconVariants}
                className="relative z-10"
              >
                <BrainCircuit className="w-7 h-7 text-white" />
              </motion.div>
            </div>
          </Button>
        </motion.div>
      )}

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
          >
            {/* Chat Header with gradient animation */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 animate-gradient-x"></div>
              <div className="relative flex items-center justify-between p-4 text-white z-10">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-1.5 rounded-lg">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Aivora AI Assistant</h3>
                    <div className="flex items-center gap-1.5 text-xs text-white/80">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span>Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-white hover:text-white hover:bg-white/20 rounded-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-white hover:text-white hover:bg-white/20 rounded-full"
                    onClick={() => {
                      setMessages([{
                        role: 'assistant',
                        content: 'Hi there! I\'m the AI assistant for Aivora Labs. I can answer questions about our services, technologies, and company. How can I help you today?'
                      }]);
                      setIsOpen(false);
                    }}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Chat Messages with improved styling */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50/80 backdrop-blur-sm">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-2 shrink-0">
                        <BrainCircuit className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div 
                      className={`max-w-[80%] rounded-2xl p-3 shadow-sm ${
                        msg.role === 'user' 
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-tr-none' 
                          : 'bg-white border border-gray-200 rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                    {msg.role === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center ml-2 shrink-0">
                        <MessageCircle className="w-4 h-4 text-indigo-600" />
                      </div>
                    )}
                  </motion.div>
                ))}
                {sendMessageMutation.isPending && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-2 shrink-0">
                      <BrainCircuit className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-3 shadow-sm">
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="flex gap-1"
                          variants={typingDotsVariants}
                          animate="animate"
                        >
                          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                          <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                          <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                        </motion.div>
                        <p className="text-sm text-gray-500">Thinking...</p>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Chat Input with improved styling */}
            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <Textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="min-h-[50px] resize-none shadow-sm focus-visible:ring-indigo-500"
                  disabled={sendMessageMutation.isPending}
                />
                <Button 
                  variant="default"
                  size="icon"
                  className="h-[50px] w-[50px] shrink-0 rounded-lg shadow-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                  onClick={handleSendMessage}
                  disabled={message.trim() === '' || sendMessageMutation.isPending}
                >
                  {sendMessageMutation.isPending ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </Button>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400">Powered by Aivora AI Technology</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}