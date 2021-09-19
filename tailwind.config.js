module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["Inter", "sans-serif"],
      },
      spacing: {
        "42px": "42px",
        "53px": "53px",
        "56px": "56px",
        62: "62px",
        70: "70px",
        "80px": "80px",
        83: "83px",
        "88px": "88px",
        104: "104px",
        103: "103px",
        106: "106px",
        111: "111px",
        115: "115px",
        118: "118.7px",
        141: "141.7px",
        128: "128px",
        "103px": "103px",
        "106px": "106px",
      },
      colors: {
        "diagon-gray-100": "#777E90",
        "diagon-gray-200": "#B1B5C4",
        "diagon-gray-300": "#e6e8ec",
        "diagon-pink": "#ffebee",
        "diagon-pink-200": "#D48A8A",
        "diagon-red": "#E10101",
        "diagon-black": "#23262F",
      },
      lineHeight: {
        "12px": "12px",
        120: "120%",
        124: "124%",
        160: "160%",
        "76px": "76px",
        "27px": "27px",
        "30px": "30px",
        "38px": "38px",
        "48px": "48px",
        "56px": "56px",
        "65px": "65px",
        "71px": "71px",
        "80px": "80px",
      },
      letterSpacing: {
        "0.02em": "0.02em",
        "0.04em": "0.04em",
        0.3: "0.381522px",
        0.09: "-0.9px",
      },
      fontSize: {
        "12px": "12px",
        "17px": "17.7857px",
        "26px": "26px",
        "40px": "40px",
        "42px": "42px",
        "54px": "54px",
        "56px": "56px",
        "64px": "64px",
        "76px": "76px",
        "288px": "28.8px",
      },
      maxWidth: {
        "100px": "100px",

      },
      boxShadow: {
        whitebutton:
            "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
      },
      borderRadius: {
        "30px": "30px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
