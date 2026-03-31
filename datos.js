// --- PANTALLAS (CARGA PESADA) ---
const PANTALLAS = [
    ["TITULO","--- IPHONE ---"],
    ["iPhone 6G","₡22,000"], ["iPhone 6G Plus","₡24,000"], ["iPhone 6S","₡23,000"], ["iPhone 6S Plus","₡26,000"],
    ["iPhone 7G","₡25,000"], ["iPhone 7 Plus","₡28,000"], ["iPhone 8G","₡26,000"], ["iPhone 8 Plus","₡30,000"],
    ["iPhone X OLED","₡45,000"], ["iPhone X Incel","₡35,000"], ["iPhone XS OLED","₡48,000"], ["iPhone XS Incel","₡38,000"],
    ["iPhone XR ORIG","₡45,000"], ["iPhone XR Incel","₡35,000"], ["iPhone XS Max OLED","₡55,000"], ["iPhone XS Max Incel","₡42,000"],
    ["iPhone 11 ORIG","₡48,000"], ["iPhone 11 Incel","₡35,000"], ["iPhone 11 Pro OLED","₡55,000"], ["iPhone 11 Pro Incel","₡42,000"],
    ["iPhone 11 Pro Max OLED","₡65,000"], ["iPhone 11 Pro Max Incel","₡48,000"], ["iPhone 12 OLED","₡65,000"],
    ["iPhone 13 OLED","₡80,000"], ["iPhone 14 Pro Max OLED","₡185,000"], ["iPhone 15 Pro Max","₡245,000"],
    
    ["TITULO","--- SAMSUNG (SIN MARCO) ---"],
    ["Samsung A01","₡18,000"], ["Samsung A02 / M12","₡20,000"], ["Samsung A02S / 03S","₡20,000"], ["Samsung A03 Core","₡19,000"],
    ["Samsung A04S","₡21,000"], ["Samsung A05S","₡22,000"], ["Samsung A10 / A10S","₡19,000"], ["Samsung A11","₡20,000"],
    ["Samsung A12","₡20,000"], ["Samsung A13 / A23","₡22,000"], ["Samsung A14 4G","₡24,000"], ["Samsung A20 OLED","₡26,000"],
    ["Samsung A21S","₡23,000"], ["Samsung A30 / A50 OLED","₡26,000"], ["Samsung A31 OLED","₡32,000"], ["Samsung A32 4G OLED","₡35,000"],
    ["Samsung A51 OLED","₡38,000"], ["Samsung A70 OLED","₡42,000"], ["Samsung J2 Prime","₡16,000"], ["Samsung J4 Plus","₡23,000"],
    ["Samsung J7 Prime / Pro","₡25,000"], ["Samsung S20 FE","₡45,000"],
    
    ["TITULO","--- SAMSUNG (CON MARCO / ORIG) ---"],
    ["Samsung A10 (Con Marco)","₡23,000"], ["Samsung A12 (Con Marco)","₡25,000"], ["Samsung A15 ORIG (Marco)","₡45,000"], 
    ["Samsung A24 ORIG (Marco)","₡48,000"], ["Samsung A34 ORIG (Marco)","₡55,000"], ["Samsung A54 ORIG (Marco)","₡70,000"],
    ["Samsung A55 ORIG (Marco)","₡75,000"], ["Samsung S21 ORIG","₡55,000"], ["Samsung S22 ORIG","₡65,000"],
    ["Samsung S23 Ultra ORIG","₡145,000"], ["Samsung S24 Ultra ORIG","₡185,000"],
    
    ["TITULO","--- HONOR, HUAWEI & OTROS ---"],
    ["Honor X5 Plus (Con Marco)","₡26,000"], ["Honor X6 / X6S","₡22,000"], ["Honor X6B / X6C","₡24,000"], 
    ["Honor X7 / X7A","₡24,000"], ["Honor X7B (Con Marco)","₡30,000"], ["Honor X8 / X8A","₡24,000"],
    ["Honor X8B / 200 Lite","₡45,000"], ["Honor X9A / X9B","₡55,000"], ["Honor 70 / 90 OLED","₡65,000"],
    ["Huawei P20 Lite","₡22,000"], ["Huawei P30 Lite","₡25,000"], ["Huawei Y7A / Y9 Prime","₡26,000"],
    ["Redmi 10C / 12C","₡24,000"], ["Redmi 13C / 14C","₡24,000"], ["Redmi Note 11 OLED","₡48,000"], 
    ["Redmi Note 13 Pro 4G","₡55,000"], ["Moto G60 / G22","₡28,000"], ["Moto E20 / E40","₡22,000"]
];

// --- FLEX (CON MÁS MODELOS) ---
const FLEX = [
    ["TITULO","--- FLEX DE CARGA ---"],
    ["Flex Carga Samsung A10S","₡12,000"], ["Flex Carga A02S / A03S","₡12,000"], ["Flex Carga A12 / A13","₡13,000"],
    ["Flex Carga Moto G20 / G30","₡15,000"], ["Flex Carga Poco X3 / X4","₡18,000"], ["Flex Carga Huawei P30 Lite","₡15,000"],
    ["Flex Carga Redmi Note 11","₡15,000"], ["Flex Carga iPhone 11","₡18,000"],
    ["TITULO","--- FLEX PRINCIPAL (MAIN) ---"],
    ["Flex Principal Samsung A20S","₡12,000"], ["Flex Principal A30 / A50","₡12,000"], ["Flex Principal A70 / A80","₡14,000"],
    ["TITULO","--- FLEX ENCENDIDO Y AUDIO ---"],
    ["Flex Encendido Moto G8","₡7,500"], ["Flex Encendido Huawei Y9","₡8,000"], ["Flex Audio iPhone X","₡15,000"]
];

const AUDIO = [
    ["TIMBRE: Samsung J7 Prime","₡6,000"], ["TIMBRE: Moto G9 Play","₡8,000"], ["MICRÓFONO: Universal","₡4,500"],
    ["AURICULAR: iPhone 11","₡12,000"], ["PARLANTE: Redmi Note 10","₡8,000"], ["ANTENA: Coaxial A10","₡5,000"]
];

const CARGADORES = [
    ["CUBO: 20W Carga Rápida","₡12,000"], ["CUBO: PD 30W Super","₡18,000"], ["CUBO: Samsung 25W ORIG","₡22,000"],
    ["CABLE: Tipo C 1M","₡6,000"], ["CABLE: Lightning 1M","₡5,000"], ["COMBO: Cubo+Cable 20W","₡15,000"]
];

const ESTETICA = [
    ["TAPA: Samsung A30 / A50","₡12,000"], ["TAPA: Huawei P30 Lite","₡10,000"], ["TAPA: iPhone 11 Vidrio","₡15,000"],
    ["LENTE CÁMARA: Note 11","₡5,000"], ["LENTE CÁMARA: S22 Ultra","₡8,000"], ["CÁMARA: Frontal iPhone 11","₡25,000"]
];

const GADGETS = [
    ["AUDÍFONOS: Bluetooth Pro 6","₡18,000"], ["AUDÍFONOS: Alámbricos 3.5","₡5,000"],
    ["RELOJ: Smartwatch S8 Ultra","₡22,000"], ["RELOJ: Huawei Band 8","₡28,000"]
];

const HERRAMIENTAS = [
    ["MALLA: Desoldar Goot Wick","₡4,000"], ["GOMA: T-7000 Negra 110ml","₡5,000"], ["ESTAÑO: Pasta Relife","₡8,000"],
    ["HILO: Puentes 0.02mm","₡3,500"], ["KIT: Destornilladores","₡15,000"]
];

const OTROS = [
    ["PORTASIM: Samsung A10","₡3,000"], ["PORTASIM: iPhone 12","₡5,000"], ["BATERÍA: iPhone 11 Certif.","₡25,000"]
];
