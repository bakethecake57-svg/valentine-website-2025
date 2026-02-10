// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Oli my sweet boy",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine?(˶ᵔ ᵕ ᵔ˶)",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🌷', '👩🏻‍❤️‍👨🏻', '🍋‍🟩', '🎧', '🎆'],  // Heart emojis
        bears: ['🎥', '🐱']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "Nope",                                               // Text for "No" button
            secretAnswer: "Te emo 🤘👩🏻‍❤️‍💋‍👨🏻"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "as much as our universe (neverending):3",                                   // Text before the percentage
            nextBtn: "Next "                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? (˶ᵔ ᵕ ᵔ˶)<𝟹", // The big question!
            yesBtn: " SIIIII!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW I LOVE YOU MORE THAN THATT LIMEY",  // Shows when they go past 5000%
        high: "Beyond our galaxies and more 🛸",              // Shows when they go past 1000%
        normal: "Beyond the world 🗺️"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "I love you endlessly and im forever lucky and grateful, for your love.",
        message: "Now come over and let me... hug and kiss YOU MWAHHH!!!!",
        emojis: "♥︎"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#80ef80",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#5ea792",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#add8e6",     // Button color (should stand out against the background)
        buttonHover: "#ffb6c1",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://music.apple.com/us/album/cari%C3%B1o/1436703562?i=1436703569"// Music streaming URL
        startText: "🎶 Play the tune",        // Button text to start music
        stopText: "🔇 No musica",         // Button text to stop music
        volume: 0.8                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 