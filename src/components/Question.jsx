import { useState, useEffect } from "react";

const Question = ({ onYes }) => {
  const [noClicks, setNoClicks] = useState(0);
  const [pos, setPos] = useState({ top: "50%", left: "60%" });

  // Load Tenor embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleNoClick = () => {
    const next = noClicks + 1;
    setNoClicks(next);

    if (next <= 3) {
      const top = Math.random() * 60 + 20;
      const left = Math.random() * 60 + 20;

      setPos({
        top: `${top}%`,
        left: `${left}%`,
      });
    }
  };

  const getNoText = () => {
    if (noClicks === 0) return "No 😤";
    if (noClicks === 1) return "Still hurt… 💔";
    if (noClicks === 2) return "You really hurt me 🥺";
    if (noClicks === 3) return "I need time…";
    return "Okay… I see your effort 🤍";
  };

  return (
    <div className="flex-1 flex items-center justify-center relative px-10 py-20">
      <div className="relative bg-white/90 backdrop-blur-xl rounded-[3rem] p-14 shadow-2xl text-center max-w-xl w-full">

        {/* Tenor GIF */}
        <div className="flex justify-center mb-8">
          <div
            className="tenor-gif-embed"
            data-postid="1297658326973185745"
            data-share-method="host"
            data-aspect-ratio="1.05263"
            data-width="100%"
          >
            <a href="https://tenor.com/view/forgive-me-bubu-bubu-angry-bubu-mad-bubu-i%27m-sorry-bubu-sorry-gif-1297658326973185745">
              Forgive Me Bubu
            </a>
          </div>
        </div>

        <h2 className="text-4xl font-semibold text-gray-700 mb-14">
          Kya ab aapki narazgi kam hui hai? 🥺
        </h2>

        <div className="relative h-40 flex items-center justify-center gap-10">

          {/* YES BUTTON */}
          <button
            onClick={onYes}
            className="px-12 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-2xl font-medium shadow-lg hover:scale-105 transition-all duration-300"
          >
            Yes ❤️
          </button>

          {/* NO BUTTON */}
          {noClicks < 4 ? (
            <button
              onClick={handleNoClick}
              style={{
                position: noClicks > 0 ? "absolute" : "relative",
                top: noClicks > 0 ? pos.top : "auto",
                left: noClicks > 0 ? pos.left : "auto",
                transform: noClicks > 0 ? "translate(-50%, -50%)" : "none",
              }}
              className="px-12 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-medium shadow-lg transition-all duration-300"
            >
              {getNoText()}
            </button>
          ) : (
            <div className="mt-6 text-lg text-gray-500 italic">
              I understand… I will keep proving it with actions, not just words. 🤍
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
