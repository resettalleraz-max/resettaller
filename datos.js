const PANTALLAS = [
    ["TITULO","--- IPHONE (INSTALADA) ---"],
    ["iPhone 6G / 6S","₡22,000"], ["iPhone 6G Plus / 6S Plus","₡25,000"], ["iPhone 7G / 8G","₡25,000"], ["iPhone 7 Plus / 8 Plus","₡28,000"], ["iPhone X Incell","₡35,000"], ["iPhone XS Incell","₡35,000"], ["iPhone XR","₡35,000"], ["iPhone 11 Incell","₡35,000"], ["iPhone 11 Pro Incell","₡38,000"], ["iPhone 11 Pro Max Incell","₡43,000"], ["iPhone 12 / 12 Pro","₡45,000"], ["iPhone 12 Pro Max","₡50,000"], ["iPhone 13","₡50,000"], ["iPhone 14","₡55,000"], ["iPhone 15","₡65,000"], ["iPhone 16 Pro Max","₡85,000"],
    
    ["TITULO","--- IPHONE OLED/ORIG (INSTALADA) ---"],
    ["<span style='color:#eab308'>iPhone X / XS OLED</span>","₡45,000"], ["<span style='color:#eab308'>iPhone XS Max OLED</span>","₡52,000"], ["<span style='color:#eab308'>iPhone 11 ORIGINAL</span>","₡48,000"], ["<span style='color:#eab308'>iPhone 11 Pro Max OLED</span>","₡55,000"], ["<span style='color:#eab308'>iPhone 12 / 12 Pro OLED</span>","₡60,000"], ["<span style='color:#eab308'>iPhone 13 OLED Soft</span>","₡70,000"], ["<span style='color:#eab308'>iPhone 13 Pro ORIGINAL</span>","₡135,000"], ["<span style='color:#eab308'>iPhone 15 Pro Max ORIGINAL</span>","₡145,000"],

    ["TITULO","--- HONOR (INSTALADA) ---"],
    ["Honor X6 / X6S / X6 Pro","₡28,000"], ["Honor X7 / X7A","₡28,000"], ["Honor X7B","₡32,000"], ["Honor X8 / X8A","₡28,000"], ["Honor X8B","₡35,000"], ["Honor X9 / X9 5G","₡30,000"], ["<span style='color:#eab308'>Honor X9A ORIGINAL</span>","₡55,000"], ["Honor 90 Lite","₡30,000"], ["Honor Magic 5 Lite","₡55,000"],

    ["TITULO","--- HUAWEI (INSTALADA) ---"],
    ["Huawei Y9 (2019)","₡28,000"], ["Huawei Y9 Prime / Y9S","₡30,000"], ["Huawei P30 Lite","₡28,000"], ["Huawei P40 Lite","₡32,000"], ["Huawei Nova 5T","₡32,000"], ["Huawei Nova 8i / 9 SE","₡35,000"], ["<span style='color:#eab308'>Huawei Nova 9 OLED</span>","₡55,000"],

    ["TITULO","--- SAMSUNG SERIE A / J (INSTALADA) ---"],
    ["Samsung J1 Ace / J2 Prime","₡20,000"], ["Samsung J4 Plus / J6 Plus","₡25,000"], ["Samsung J5 Prime / J7 Prime","₡22,000"], ["Samsung J7 Neo / J7 Pro","₡23,000"], ["Samsung A10 / A10S / A11","₡25,000"], ["Samsung A12 / A13 / A14","₡28,000"], ["Samsung A20 / A21S / A22","₡30,000"], ["Samsung A30 / A31 / A32","₡32,000"], ["Samsung A50 / A51 / A52","₡35,000"], ["Samsung A70 / A71","₡38,000"], ["Samsung A03 / A04 / A04S","₡28,000"], ["<span style='color:#eab308'>Samsung A15 ORIGINAL</span>","₡55,000"], ["<span style='color:#eab308'>Samsung A34 ORIGINAL</span>","₡65,000"], ["<span style='color:#eab308'>Samsung A54 ORIGINAL</span>","₡75,000"], ["<span style='color:#eab308'>Samsung A55 ORIGINAL</span>","₡80,000"]
];

const FLEX = [];
const HERRAMIENTAS = [];const PANTALLAS = [
    ["TITULO","--- IPHONE (INSTALADA) ---"],
    ["iPhone 6G / 6S","₡22,000"], ["iPhone 6G Plus / 6S Plus","₡25,000"], ["iPhone 7G / 8G","₡25,000"], ["iPhone 7 Plus / 8 Plus","₡28,000"], ["iPhone X Incell","₡35,000"], ["iPhone XS Incell","₡35,000"], ["iPhone XR","₡35,000"], ["iPhone 11 Incell","₡35,000"], ["iPhone 11 Pro Incell","₡38,000"], ["iPhone 11 Pro Max Incell","₡43,000"], ["iPhone 12 / 12 Pro","₡45,000"], ["iPhone 12 Pro Max","₡50,000"], ["iPhone 13","₡50,000"], ["iPhone 14","₡55,000"], ["iPhone 15","₡65,000"], ["iPhone 16 Pro Max","₡85,000"],
    
    ["TITULO","--- IPHONE OLED/ORIG (INSTALADA) ---"],
    ["<span style='color:#eab308'>iPhone X / XS OLED</span>","₡45,000"], ["<span style='color:#eab308'>iPhone XS Max OLED</span>","₡52,000"], ["<span style='color:#eab308'>iPhone 11 ORIGINAL</span>","₡48,000"], ["<span style='color:#eab308'>iPhone 11 Pro Max OLED</span>","₡55,000"], ["<span style='color:#eab308'>iPhone 12 / 12 Pro OLED</span>","₡60,000"], ["<span style='color:#eab308'>iPhone 13 OLED Soft</span>","₡70,000"], ["<span style='color:#eab308'>iPhone 13 Pro ORIGINAL</span>","₡135,000"], ["<span style='color:#eab308'>iPhone 15 Pro Max ORIGINAL</span>","₡145,000"],

    ["TITULO","--- HONOR (INSTALADA) ---"],
    ["Honor X6 / X6S / X6 Pro","₡28,000"], ["Honor X7 / X7A","₡28,000"], ["Honor X7B","₡32,000"], ["Honor X8 / X8A","₡28,000"], ["Honor X8B","₡35,000"], ["Honor X9 / X9 5G","₡30,000"], ["<span style='color:#eab308'>Honor X9A ORIGINAL</span>","₡55,000"], ["Honor 90 Lite","₡30,000"], ["Honor Magic 5 Lite","₡55,000"],

    ["TITULO","--- HUAWEI (INSTALADA) ---"],
    ["Huawei Y9 (2019)","₡28,000"], ["Huawei Y9 Prime / Y9S","₡30,000"], ["Huawei P30 Lite","₡28,000"], ["Huawei P40 Lite","₡32,000"], ["Huawei Nova 5T","₡32,000"], ["Huawei Nova 8i / 9 SE","₡35,000"], ["<span style='color:#eab308'>Huawei Nova 9 OLED</span>","₡55,000"],

    ["TITULO","--- SAMSUNG SERIE A / J (INSTALADA) ---"],
    ["Samsung J1 Ace / J2 Prime","₡20,000"], ["Samsung J4 Plus / J6 Plus","₡25,000"], ["Samsung J5 Prime / J7 Prime","₡22,000"], ["Samsung J7 Neo / J7 Pro","₡23,000"], ["Samsung A10 / A10S / A11","₡25,000"], ["Samsung A12 / A13 / A14","₡28,000"], ["Samsung A20 / A21S / A22","₡30,000"], ["Samsung A30 / A31 / A32","₡32,000"], ["Samsung A50 / A51 / A52","₡35,000"], ["Samsung A70 / A71","₡38,000"], ["Samsung A03 / A04 / A04S","₡28,000"], ["<span style='color:#eab308'>Samsung A15 ORIGINAL</span>","₡55,000"], ["<span style='color:#eab308'>Samsung A34 ORIGINAL</span>","₡65,000"], ["<span style='color:#eab308'>Samsung A54 ORIGINAL</span>","₡75,000"], ["<span style='color:#eab308'>Samsung A55 ORIGINAL</span>","₡80,000"]
];

const FLEX = [];
const HERRAMIENTAS = [];const PANTALLAS = [
    ["TITULO","--- IPHONE (INSTALADA) ---"],
    ["iPhone 6G / 6S","₡22,000"], ["iPhone 6G Plus / 6S Plus","₡25,000"], ["iPhone 7G / 8G","₡25,000"], ["iPhone 7 Plus / 8 Plus","₡28,000"], ["iPhone X Incell","₡35,000"], ["iPhone XS Incell","₡35,000"], ["iPhone XR","₡35,000"], ["iPhone 11 Incell","₡35,000"], ["iPhone 11 Pro Incell","₡38,000"], ["iPhone 11 Pro Max Incell","₡43,000"], ["iPhone 12 / 12 Pro","₡45,000"], ["iPhone 12 Pro Max","₡50,000"], ["iPhone 13","₡50,000"], ["iPhone 14","₡55,000"], ["iPhone 15","₡65,000"], ["iPhone 16 Pro Max","₡85,000"],
    
    ["TITULO","--- IPHONE OLED/ORIG (INSTALADA) ---"],
    ["<span style='color:#eab308'>iPhone X / XS OLED</span>","₡45,000"], ["<span style='color:#eab308'>iPhone XS Max OLED</span>","₡52,000"], ["<span style='color:#eab308'>iPhone 11 ORIGINAL</span>","₡48,000"], ["<span style='color:#eab308'>iPhone 11 Pro Max OLED</span>","₡55,000"], ["<span style='color:#eab308'>iPhone 12 / 12 Pro OLED</span>","₡60,000"], ["<span style='color:#eab308'>iPhone 13 OLED Soft</span>","₡70,000"], ["<span style='color:#eab308'>iPhone 13 Pro ORIGINAL</span>","₡135,000"], ["<span style='color:#eab308'>iPhone 15 Pro Max ORIGINAL</span>","₡145,000"],

    ["TITULO","--- HONOR (INSTALADA) ---"],
    ["Honor X6 / X6S / X6 Pro","₡28,000"], ["Honor X7 / X7A","₡28,000"], ["Honor X7B","₡32,000"], ["Honor X8 / X8A","₡28,000"], ["Honor X8B","₡35,000"], ["Honor X9 / X9 5G","₡30,000"], ["<span style='color:#eab308'>Honor X9A ORIGINAL</span>","₡55,000"], ["Honor 90 Lite","₡30,000"], ["Honor Magic 5 Lite","₡55,000"],

    ["TITULO","--- HUAWEI (INSTALADA) ---"],
    ["Huawei Y9 (2019)","₡28,000"], ["Huawei Y9 Prime / Y9S","₡30,000"], ["Huawei P30 Lite","₡28,000"], ["Huawei P40 Lite","₡32,000"], ["Huawei Nova 5T","₡32,000"], ["Huawei Nova 8i / 9 SE","₡35,000"], ["<span style='color:#eab308'>Huawei Nova 9 OLED</span>","₡55,000"],

    ["TITULO","--- SAMSUNG SERIE A / J (INSTALADA) ---"],
    ["Samsung J1 Ace / J2 Prime","₡20,000"], ["Samsung J4 Plus / J6 Plus","₡25,000"], ["Samsung J5 Prime / J7 Prime","₡22,000"], ["Samsung J7 Neo / J7 Pro","₡23,000"], ["Samsung A10 / A10S / A11","₡25,000"], ["Samsung A12 / A13 / A14","₡28,000"], ["Samsung A20 / A21S / A22","₡30,000"], ["Samsung A30 / A31 / A32","₡32,000"], ["Samsung A50 / A51 / A52","₡35,000"], ["Samsung A70 / A71","₡38,000"], ["Samsung A03 / A04 / A04S","₡28,000"], ["<span style='color:#eab308'>Samsung A15 ORIGINAL</span>","₡55,000"], ["<span style='color:#eab308'>Samsung A34 ORIGINAL</span>","₡65,000"], ["<span style='color:#eab308'>Samsung A54 ORIGINAL</span>","₡75,000"], ["<span style='color:#eab308'>Samsung A55 ORIGINAL</span>","₡80,000"]
];

const FLEX = [];
const HERRAMIENTAS = [];const PANTALLAS = [
    ["TITULO","--- IPHONE (INSTALADA) ---"],
    ["iPhone 6G / 6S","₡22,000"], ["iPhone 6G Plus / 6S Plus","₡25,000"], ["iPhone 7G / 8G","₡25,000"], ["iPhone 7 Plus / 8 Plus","₡28,000"], ["iPhone X Incell","₡35,000"], ["iPhone XS Incell","₡35,000"], ["iPhone XR","₡35,000"], ["iPhone 11 Incell","₡35,000"], ["iPhone 11 Pro Incell","₡38,000"], ["iPhone 11 Pro Max Incell","₡43,000"], ["iPhone 12 / 12 Pro","₡45,000"], ["iPhone 12 Pro Max","₡50,000"], ["iPhone 13","₡50,000"], ["iPhone 14","₡55,000"], ["iPhone 15","₡65,000"], ["iPhone 16 Pro Max","₡85,000"],
    
    ["TITULO","--- IPHONE OLED/ORIG (INSTALADA) ---"],
    ["<span style='color:#eab308'>iPhone X / XS OLED</span>","₡45,000"], ["<span style='color:#eab308'>iPhone XS Max OLED</span>","₡52,000"], ["<span style='color:#eab308'>iPhone 11 ORIGINAL</span>","₡48,000"], ["<span style='color:#eab308'>iPhone 11 Pro Max OLED</span>","₡55,000"], ["<span style='color:#eab308'>iPhone 12 / 12 Pro OLED</span>","₡60,000"], ["<span style='color:#eab308'>iPhone 13 OLED Soft</span>","₡70,000"], ["<span style='color:#eab308'>iPhone 13 Pro ORIGINAL</span>","₡135,000"], ["<span style='color:#eab308'>iPhone 15 Pro Max ORIGINAL</span>","₡145,000"],

    ["TITULO","--- HONOR (INSTALADA) ---"],
    ["Honor X6 / X6S / X6 Pro","₡28,000"], ["Honor X7 / X7A","₡28,000"], ["Honor X7B","₡32,000"], ["Honor X8 / X8A","₡28,000"], ["Honor X8B","₡35,000"], ["Honor X9 / X9 5G","₡30,000"], ["<span style='color:#eab308'>Honor X9A ORIGINAL</span>","₡55,000"], ["Honor 90 Lite","₡30,000"], ["Honor Magic 5 Lite","₡55,000"],

    ["TITULO","--- HUAWEI (INSTALADA) ---"],
    ["Huawei Y9 (2019)","₡28,000"], ["Huawei Y9 Prime / Y9S","₡30,000"], ["Huawei P30 Lite","₡28,000"], ["Huawei P40 Lite","₡32,000"], ["Huawei Nova 5T","₡32,000"], ["Huawei Nova 8i / 9 SE","₡35,000"], ["<span style='color:#eab308'>Huawei Nova 9 OLED</span>","₡55,000"],

    ["TITULO","--- SAMSUNG SERIE A / J (INSTALADA) ---"],
    ["Samsung J1 Ace / J2 Prime","₡20,000"], ["Samsung J4 Plus / J6 Plus","₡25,000"], ["Samsung J5 Prime / J7 Prime","₡22,000"], ["Samsung J7 Neo / J7 Pro","₡23,000"], ["Samsung A10 / A10S / A11","₡25,000"], ["Samsung A12 / A13 / A14","₡28,000"], ["Samsung A20 / A21S / A22","₡30,000"], ["Samsung A30 / A31 / A32","₡32,000"], ["Samsung A50 / A51 / A52","₡35,000"], ["Samsung A70 / A71","₡38,000"], ["Samsung A03 / A04 / A04S","₡28,000"], ["<span style='color:#eab308'>Samsung A15 ORIGINAL</span>","₡55,000"], ["<span style='color:#eab308'>Samsung A34 ORIGINAL</span>","₡65,000"], ["<span style='color:#eab308'>Samsung A54 ORIGINAL</span>","₡75,000"], ["<span style='color:#eab308'>Samsung A55 ORIGINAL</span>","₡80,000"]
];

const FLEX = [];
const HERRAMIENTAS = [];const PANTALLAS = [
    ["TITULO","--- IPHONE (INSTALADA) ---"],
    ["iPhone 6G / 6S","₡22,000"], ["iPhone 6G Plus / 6S Plus","₡25,000"], ["iPhone 7G / 8G","₡25,000"], ["iPhone 7 Plus / 8 Plus","₡28,000"], ["iPhone X Incell","₡35,000"], ["iPhone XS Incell","₡35,000"], ["iPhone XR","₡35,000"], ["iPhone 11 Incell","₡35,000"], ["iPhone 11 Pro Incell","₡38,000"], ["iPhone 11 Pro Max Incell","₡43,000"], ["iPhone 12 / 12 Pro","₡45,000"], ["iPhone 12 Pro Max","₡50,000"], ["iPhone 13","₡50,000"], ["iPhone 14","₡55,000"], ["iPhone 15","₡65,000"], ["iPhone 16 Pro Max","₡85,000"],
    
    ["TITULO","--- IPHONE OLED/ORIG (INSTALADA) ---"],
    ["<span style='color:#eab308'>iPhone X / XS OLED</span>","₡45,000"], ["<span style='color:#eab308'>iPhone XS Max OLED</span>","₡52,000"], ["<span style='color:#eab308'>iPhone 11 ORIGINAL</span>","₡48,000"], ["<span style='color:#eab308'>iPhone 11 Pro Max OLED</span>","₡55,000"], ["<span style='color:#eab308'>iPhone 12 / 12 Pro OLED</span>","₡60,000"], ["<span style='color:#eab308'>iPhone 13 OLED Soft</span>","₡70,000"], ["<span style='color:#eab308'>iPhone 13 Pro ORIGINAL</span>","₡135,000"], ["<span style='color:#eab308'>iPhone 15 Pro Max ORIGINAL</span>","₡145,000"],

    ["TITULO","--- HONOR (INSTALADA) ---"],
    ["Honor X6 / X6S / X6 Pro","₡28,000"], ["Honor X7 / X7A","₡28,000"], ["Honor X7B","₡32,000"], ["Honor X8 / X8A","₡28,000"], ["Honor X8B","₡35,000"], ["Honor X9 / X9 5G","₡30,000"], ["<span style='color:#eab308'>Honor X9A ORIGINAL</span>","₡55,000"], ["Honor 90 Lite","₡30,000"], ["Honor Magic 5 Lite","₡55,000"],

    ["TITULO","--- HUAWEI (INSTALADA) ---"],
    ["Huawei Y9 (2019)","₡28,000"], ["Huawei Y9 Prime / Y9S","₡30,000"], ["Huawei P30 Lite","₡28,000"], ["Huawei P40 Lite","₡32,000"], ["Huawei Nova 5T","₡32,000"], ["Huawei Nova 8i / 9 SE","₡35,000"], ["<span style='color:#eab308'>Huawei Nova 9 OLED</span>","₡55,000"],

    ["TITULO","--- SAMSUNG SERIE A / J (INSTALADA) ---"],
    ["Samsung J1 Ace / J2 Prime","₡20,000"], ["Samsung J4 Plus / J6 Plus","₡25,000"], ["Samsung J5 Prime / J7 Prime","₡22,000"], ["Samsung J7 Neo / J7 Pro","₡23,000"], ["Samsung A10 / A10S / A11","₡25,000"], ["Samsung A12 / A13 / A14","₡28,000"], ["Samsung A20 / A21S / A22","₡30,000"], ["Samsung A30 / A31 / A32","₡32,000"], ["Samsung A50 / A51 / A52","₡35,000"], ["Samsung A70 / A71","₡38,000"], ["Samsung A03 / A04 / A04S","₡28,000"], ["<span style='color:#eab308'>Samsung A15 ORIGINAL</span>","₡55,000"], ["<span style='color:#eab308'>Samsung A34 ORIGINAL</span>","₡65,000"], ["<span style='color:#eab308'>Samsung A54 ORIGINAL</span>","₡75,000"], ["<span style='color:#eab308'>Samsung A55 ORIGINAL</span>","₡80,000"]
];

const FLEX = [];
const HERRAMIENTAS = [];
