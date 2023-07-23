/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "31.25em", // 500px
      md: "43.75em", // 700px
      lg: "56.25em", // 900px
      xl: "75em", // 1200px
      "2x": "112.5em", // 1800px
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      headings: ["Audiowide", "serif"],
    },

    extend: {
      padding: {
        "3to5": "clamp(0.75rem, 0.59rem + 0.89vw, 1.25rem)", // 12px at 300vw to 20px at 1200vw // used for padding-x // for general components
        "3to9": "clamp(0.75rem, 0.25rem + 2.67vw, 2.25rem)", // 12px at 300vw to 36px at 1200vw // used for padding-x // for section-container
        "5to15": "clamp(1.25rem, 0.42rem + 4.44vw, 3.75rem)", // 20px at 300vw to 60px at 1200vw // used for padding-y // for small sections
        "8to24": "clamp(2rem, 0.67rem + 7.11vw, 6rem)", // 32px at 300vw to 96px at 1200vw // used for padding-y // for large sections
        "12to36": "clamp(3rem, 1rem + 10.67vw, 9rem)", // 48px at 300vw to 144px at 1200vw // used for padding-y // for x-large sections
      },
      margin: {
        "5to15": "clamp(1.25rem, 0.42rem + 4.44vw, 3.75rem)", // 20px at 300vw to 60px at 1200vw // used for margin-bottom // for section-subtitle
        "8to20": "clamp(2rem, 1.44rem + 3vw, 5rem)", // 32px at 300vw to 80px at 1200vw // used for margin-bottom // for section-subtitle
      },
      borderWidth: {
        12: "12px",
      },
      fontSize: {
        "12to14": "clamp(0.75rem, 0.71rem + 0.22vw,0.875rem)", // 12px at 300vw to 14px at 1200vw // used for small text
        "14to16": "clamp(0.875rem, 0.84rem + 0.22vw,1rem)", // 14px at 300vw to 16px at 1200vw // used for main text (used on body)
        "16to18": "clamp(1rem, 0.92rem + 0.44vw,1.25rem)", // 16px at 300vw to 20px at 1200vw // used for larger text
        "16to24": "clamp(1rem, 0.84rem + 0.89vw,1.5rem)", // 16px at 300vw to 24px at 1200vw // used for larger text
        "24to48": "clamp(1.5rem, 1rem + 2.67vw, 3rem)", // 24px at 300vw to 48px at 1200vw // used for section-wide paragraphs
        "32to48": "clamp(2rem, 1.67rem + 1.78vw, 3rem)", // 32px at 300vw to 48px at 1200vw // used for section-titles
        "32to56": "clamp(2rem, 1.5rem + 2.67vw, 3.5rem)", // 32px at 300vw to 56px at 1200vw // used for main-title (hero title)
      },
      animation: {
        "move-up": "move-up 0.5s ease-in-out",
        "ping-sm": "ping-sm 0.7s ease-in-out infinite",
      },
      keyframes: {
        "move-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "ping-sm": {
          "100%": {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
