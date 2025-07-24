/**
 * Global Configuration File
 * Import this file anywhere in your project to access global settings
 * Usage: import config from './config.js' or import { API_BASE_URL } from './config.js'
 */

const config = {
    // Company Information
    company: {
        name: "EZRA",
        fullName: "The Ezra Company",
        website: "https://theezraco.com",
        email: "contact@theezraco.com",
        phone: "",
    },

    // Environment Settings
    env: {
        isDevelopment: import.meta.env.DEV,
        isProduction: import.meta.env.PROD,
        mode: import.meta.env.MODE,
    },

    // UI/UX Settings
    ui: {
        // Animation durations (in milliseconds)
        animations: {
            fast: 150,
            normal: 300,
            slow: 500,
        },

        // Breakpoints (matching Tailwind CSS defaults)
        breakpoints: {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            "2xl": 1536,
        },

        // Z-index values
        zIndex: {
            modal: 1000,
            overlay: 999,
            dropdown: 50,
            navbar: 20,
            tooltip: 10,
        },
    },

    // Navigation Configuration
    navigation: {
        items: [
            { label: "News", href: "/news", external: false },
            { label: "Community", href: "/community", external: false },
            { label: "Research", href: "/research", external: false },
            { label: "Contact Us", href: "/contact", external: false },
        ],
    },

    // SEO/Meta Configuration
    seo: {
        defaultTitle: "EZRA - The Ezra Company",
        titleSeparator: " | ",
        defaultDescription: "Welcome to The Ezra Company",
        defaultKeywords: ["ezra", "company"],
        ogImage: "/icon.png",
    },

    // Feature Flags
    features: {
        enableAnalytics: false,
        enableChat: false,
        enableNotifications: false,
        enableDarkMode: false,
    },

    // External Services
    services: {
        social: {
            twitter: "",
            linkedin: "",
            github: "",
            facebook: "",
        },
    },

    // Development Settings
    dev: {
        enableDebugMode: import.meta.env.DEV,
        showGrid: false,
        logLevel: import.meta.env.DEV ? "debug" : "error",
    },
};

// Export individual config sections for convenience
export const { company, api, env, ui, navigation, seo, features, services, dev } = config;

// Export specific commonly used values
export const COMPANY_NAME = config.company.name;
export const IS_DEVELOPMENT = config.env.isDevelopment;
export const IS_PRODUCTION = config.env.isProduction;

// Default export
export default config;
