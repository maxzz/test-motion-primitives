/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {

        },
    },
    plugins: [
        require("./tailwind/tailwind-plugin-debug-screens"),
        require("./tailwind/tailwind-plugin-debug-styles"),
        require("./tailwind/tailwindcss-animate"), // This is local copy to resolve conflict with delay, duration, and ease. It adds suffix -ani. Also use !important to override shadcn's.
        require('./tailwind/tailwind-plugin-shadcn.mts'),
        require('./tailwind/tailwind-plugin-shadcn-feedback.mts'),
        require('./tailwind/tailwind-plugin-shadcn-mani'),
        require("./tailwind/tailwind-plugin-overflow-overlay"),
        require("@tailwindcss/container-queries"),
        require("tailwind-scrollbar"),
        require('@tailwindcss/forms')({ strategy: 'class' }),
    ],
}
