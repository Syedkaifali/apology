import { useEffect, useState } from "react";

const FinalScreen = ({ onReplay }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);

    // Load Tenor embed script
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      clearTimeout(t);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center relative px-10 py-20">
      
      {/* Floating Bubu Dudu Animation */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-pink-400 text-lg font-medium float-soft">
        Bubu ❤️ Dudu
      </div>

      <div
        className={`bg-white/90 backdrop-blur-xl rounded-[3rem] p-14 shadow-2xl text-center max-w-2xl w-full transition-all duration-700 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >

        {/* Bubududu Tenor GIF */}
        <div className="flex justify-center mb-10">
          <div
            className="tenor-gif-embed"
            data-postid="24910613"
            data-share-method="host"
            data-aspect-ratio="1"
            data-width="100%"
          >
            <a href="https://tenor.com/view/tkthao219-bubududu-gif-24910613">
              Bubududu Sticker
            </a>
          </div>
        </div>

        {/* Final Message */}
        <h1 className="text-4xl font-semibold text-gray-700 mb-6">
          Thank you for giving me another chance to understand you 🤍
        </h1>

        <p className="text-2xl text-rose-600 mb-6">
          I don’t take your feelings lightly. I take you seriously.
        </p>

        <p className="text-lg text-gray-500 mb-10 italic">
          I will keep choosing understanding over ego. Every time.
        </p>

        {/* Cute Gift Section */}
        <div className="mt-8 bg-rose-50 rounded-3xl p-6 shadow-inner">
          <p className="text-xl text-rose-500 mb-2">
            🌸 Flowers for youuu, meri bubu
          </p>
          <p className="text-lg text-gray-600">
            Aur ek golgappa date pending… sirf aapke liye 😌💖
          </p>
        </div>

        {/* Replay */}
        <button
          onClick={onReplay}
          className="mt-8 px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xl font-medium shadow-lg hover:scale-105 transition-all duration-300"
        >
          Replay 🔁
        </button>
      </div>
    </div>
  );
};

export default FinalScreen;
