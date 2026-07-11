export const libraryData = [
    {
        id: "class-1",
        className: "১ম শ্রেণি",
        themeColor: "#ff4081",
        icon: "fa-gamepad",
        subjects: [
            {
                id: "c1-bangla",
                subjectName: "আমার বাংলা বই",
                icon: "fa-paint-brush",
                btnClass: "sub-bangla",
                chapters: [
                    { title: "অধ্যায় ১: পাঠ সূচনা 🌟", url: "/books/c1/bangla/ch1.pdf" },
                    { title: "অধ্যায় ২: আমাদের দেশ 🇧🇩", url: "/books/c1/bangla/ch2.pdf" },
                    { title: "অধ্যায় ৩: আমাদের নদী 🇧🇩", url: "/books/c1/bangla/ch2.pdf" }
                ]
            },
            {
                id: "c1-english",
                subjectName: "English for Today",
                icon: "fa-rocket",
                btnClass: "sub-english",
                chapters: [
                    { title: "Unit 1: Greetings 👋", url: "/books/c1/english/unit1.pdf" }
                ]
            }
        ]
    },
    {
        id: "class-2",
        className: "২য় শ্রেণি",
        themeColor: "#00e676",
        icon: "fa-ice-cream",
        subjects: [
            {
                id: "c2-math",
                subjectName: "প্রাথমিক গণিত",
                icon: "fa-calculator",
                btnClass: "sub-math",
                chapters: [
                    { title: "অধ্যায় ১: সংখ্যা গণনা 🔢", url: "/books/c2/math/ch1.pdf" }
                ]
            }
        ]
    }
    // ৩য়, ৪থ ও ৫ শ্রেণির ডাটা এখানে এভাবেই সহজে যুক্ত করা যাবে
];
