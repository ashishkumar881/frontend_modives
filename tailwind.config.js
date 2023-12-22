module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        renter_bg_image: "url('/assets/Home-page-hero-bg-1.svg')",
      },
      colors: {
        primary: {
          0: "var(--color-primary-0)",
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
        },
        secondary: {
          0: "var(--color-secondary-0)",
          50: "var(--color-secondary-50)",
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
        },
        success: {
          100: "var(--color-success-100)",
          200: "var(--color-success-200)",
          300: "var(--color-success-300)",
          400: "var(--color-success-400)",
        },
        warning: {
          100: "var(--color-warning-100)",
          200: "var(--color-warning-200)",
          300: "var(--color-warning-300)",
          400: "var(--color-warning-400)",
        },
        error: {
          100: "var(--color-error-100)",
          200: "var(--color-error-200)",
          300: "var(--color-error-300)",
          400: "var(--color-error-400)",
        },
        gradients: {
          gray1: "var(--gradient-gray1)",
          gray2: "var(--gradient-gray2)",
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          disabled: "var(--border-disabled)",
        },
        card: "var(--color-card)",
        backdrop: "var(--color-backdrop)",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
      },
      ringWidth: {
        1: "1px",
        3: "3px",
      },
      boxShadow: {
        primary: "var(--box-shadow-primary)",
        destructive: "var(--box-shadow-destructive)",
        destructiveOutlined: "var(--box-shadow-destructiveOutlined)",
        input: "var(--box-shadow-input)",
        toggle: "var(--box-shadow-toggle)",
        inputError: "var(--box-shadow-inputError)",
      },
      fontFamily: {
        regular: ["Inter Regular"],
        medium: ["Inter Medium"],
        semibold: ["Inter Semibold"],
        geologica: ["Geologica"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
