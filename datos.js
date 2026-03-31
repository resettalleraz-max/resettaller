// ==========================================
//   RESET TALLER - INVENTARIO TOTAL REAL
// ==========================================

const PANTALLAS = [
    ["TITULO","--- IPHONE ---"],
    ["iPhone 6G","₡22,000"], ["iPhone 6G Plus","₡24,000"], ["iPhone 6S","₡23,000"], ["iPhone 6S Plus","₡26,000"], ["iPhone 7G","₡25,000"], ["iPhone 7 Plus","₡28,000"], ["iPhone 8G","₡26,000"], ["iPhone 8 Plus","₡30,000"], ["iPhone X OLED","₡45,000"], ["iPhone X Incel","₡35,000"], ["iPhone XS OLED","₡48,000"], ["iPhone XS Incel","₡38,000"], ["iPhone XR ORIG","₡45,000"], ["iPhone XR Incel","₡35,000"], ["iPhone XS Max OLED","₡55,000"], ["iPhone XS Max Incel","₡42,000"], ["iPhone 11 ORIG","₡48,000"], ["iPhone 11 Incel","₡35,000"], ["iPhone 11 Pro OLED","₡55,000"], ["iPhone 11 Pro Incel","₡42,000"], ["iPhone 11 Pro Max OLED","₡65,000"], ["iPhone 11 Pro Max Incel","₡48,000"], ["iPhone 12 OLED","₡65,000"], ["iPhone 12 Incel","₡48,000"], ["iPhone 12 Pro Max OLED","₡110,000"], ["iPhone 13 OLED","₡80,000"], ["iPhone 13 Pro Max OLED","₡135,000"], ["iPhone 14 Pro Max OLED","₡185,000"], ["iPhone 15 Pro Max OLED","₡245,000"],

    ["TITULO","--- SAMSUNG (SIN MARCO) ---"],
    ["Samsung A01","₡18,000"], ["Samsung A01 Core","₡17,000"], ["Samsung A02 / M12","₡20,000"], ["Samsung A02S / 03S","₡20,000"], ["Samsung A03 Core","₡19,000"], ["Samsung A04 / A04E","₡20,000"], ["Samsung A04S","₡21,000"], ["Samsung A05","₡22,000"], ["Samsung A05S","₡22,000"], ["Samsung A10 / A10S","₡19,000"], ["Samsung A11","₡20,000"], ["Samsung A12","₡20,000"], ["Samsung A13 4G","₡22,000"], ["Samsung A14 4G","₡24,000"], ["Samsung A20 / A30 / A50 OLED","₡26,000"], ["Samsung A21S","₡23,000"], ["Samsung A22 4G OLED","₡32,000"], ["Samsung A23 4G","₡22,000"], ["Samsung A31 OLED","₡32,000"], ["Samsung A32 4G OLED","₡35,000"], ["Samsung A51 OLED","₡38,000"], ["Samsung A52 OLED","₡45,000"], ["Samsung A70 OLED","₡42,000"], ["Samsung J2 Prime","₡16,000"], ["Samsung J4 Plus","₡23,000"], ["Samsung J5 Prime","₡18,000"], ["Samsung J6 Plus","₡23,000"], ["Samsung J7 Prime","₡25,000"], ["Samsung J8G","₡26,000"], ["Samsung S20 FE OLED","₡45,000"],

    ["TITULO","--- SAMSUNG (CON MARCO / ORIG) ---"],
    ["Samsung A10 (Marco)","₡23,000"], ["Samsung A11 (Marco)","₡24,000"], ["Samsung A12 (Marco)","₡25,000"], ["Samsung A13 (Marco)","₡26,000"], ["Samsung A14 (Marco)","₡28,000"], ["Samsung A15 ORIG (Marco)","₡45,000"], ["Samsung A22 (Marco)","₡35,000"], ["Samsung A24 ORIG (Marco)","₡48,000"], ["Samsung A34 ORIG (Marco)","₡55,000"], ["Samsung A54 ORIG (Marco)","₡70,000"], ["Samsung A55 ORIG (Marco)","₡75,000"], ["Samsung S21 ORIG","₡55,000"], ["Samsung S22 ORIG","₡65,000"], ["Samsung S23 Ultra ORIG","₡145,000"], ["Samsung S24 Ultra ORIG","₡185,000"],

    ["TITULO","--- HONOR / HUAWEI ---"],
    ["Honor X5 Plus (Marco)","₡26,000"], ["Honor X6 / X6S","₡22,000"], ["Honor X6A","₡22,000"], ["Honor X6B","₡24,000"], ["Honor X7 / X7A","₡24,000"], ["Honor X7B (Marco)","₡30,000"], ["Honor X8 / X8A","₡24,000"], ["Honor X8B ORIG","₡45,000"], ["Honor X9A OLED","₡55,000"], ["Honor 70 OLED","₡65,000"], ["Honor 90 OLED","₡65,000"], ["Huawei P30 Lite","₡25,000"], ["Huawei Y7A","₡26,000"], ["Huawei Y9 Prime","₡26,000"], ["Huawei Nova 5T","₡28,000"],

    ["TITULO","--- XIAOMI / MOTOROLA ---"],
    ["Redmi A1 / A2","₡22,000"], ["Redmi 10C / 12C","₡24,000"], ["Redmi 12 / 13","₡26,000"], ["Redmi 13C / 14C","₡24,000"], ["Redmi Note 11 OLED","₡48,000"], ["Redmi Note 12 Pro","₡55,000"], ["Redmi Note 13 Pro 4G","₡55,000"], ["Poco X3 Pro","₡28,000"], ["Poco M3","₡24,000"], ["Moto G22","₡24,000"], ["Moto G60","₡28,000"], ["Moto G04 / G24","₡22,000"], ["Moto E20 / E40","₡22,000"]
];

const FLEX = [
    ["TITULO","--- FLEX DE CARGA ---"],
    ["Flex Carga Samsung A10S","₡12,000"], ["Flex Carga A02S / A03S","₡12,000"], ["Flex Carga A12 / A13","₡13,000"], ["Flex Carga A22 / A32","₡14,000"], ["Flex Carga Moto G20","₡15,000"], ["Flex Carga Poco X3","₡18,000"], ["Flex Carga iPhone 11","₡18,000"], ["Flex Carga Huawei P30 Lite","₡15,000"], ["Flex Carga Redmi Note 11","₡15,000"],
    ["TITULO","--- FLEX PRINCIPAL ---"],
    ["Flex Principal A10S","₡12,000"], ["Flex Principal A20S","₡12,000"], ["Flex Principal A30 / A50","₡12,000"], ["Flex Principal A70","₡14,000"], ["Flex Principal Redmi 9","₡12,000"],
    ["TITULO","--- ENCENDIDO / AUDIO ---"],
    ["Flex Encendido Moto G8","₡7,500"], ["Flex Encendido Huawei Y9","₡8,000"], ["Flex Encendido Samsung A10","₡7,500"], ["Flex Audio iPhone X","₡15,000"], ["Flex Auricular iPhone 11","₡18,000"]
];

const AUDIO = [
    ["TITULO","--- AUDIO Y ANTENA ---"],
    ["TIMBRE: Samsung J7 Prime","₡6,000"], ["TIMBRE: Huawei Y6 2019","₡6,500"], ["MICRÓFONO: Universal","₡4,500"], ["AURICULAR: iPhone 11","₡12,000"], ["ANTENA: Coaxial A10","₡5,000"], ["ANTENA: Wi-Fi iPhone 7","₡8,000"], ["PARLANTE: Redmi Note 10","₡8,000"]
];

const CARGADORES = [
    ["TITULO","--- CUBOS Y CABLES ---"],
    ["CUBO: 20W Carga Rápida","₡12,000"], ["CUBO: PD 30W Super","₡18,000"], ["CUBO: Samsung 25W ORIG","₡22,000"], ["CABLE: Tipo C 1M","₡6,000"], ["CABLE: Lightning 1M","₡5,000"], ["CABLE: Micro USB","₡4,500"], ["COMBO: Cubo+Cable 20W","₡15,000"]
];

const ESTETICA = [
    ["TITULO","--- TAPAS Y LENTES ---"],
    ["TAPA: Samsung A10S / A20S","₡10,000"], ["TAPA: Samsung A30 / A50","₡12,000"], ["TAPA: Huawei P30 Lite","₡10,000"], ["TAPA: iPhone 11 Vidrio","₡15,000"], ["LENTE CÁMARA: Note 11","₡5,000"], ["LENTE CÁMARA: S22 Ultra","₡8,000"], ["CÁMARA: Principal A10S","₡15,000"], ["CÁMARA: Frontal iPhone 11","₡25,000"]
];

const GADGETS = [
    ["TITULO","--- ACCESORIOS ---"],
    ["AUDÍFONOS: Bluetooth Pro 6","₡18,000"], ["AUDÍFONOS: Manos Libres 3.5","₡5,000"], ["RELOJ: Smartwatch S8 Ultra","₡22,000"], ["RELOJ: Huawei Band 8","₡28,000"]
];

const HERRAMIENTAS = [
    ["TITULO","--- TALLER ---"],
    ["MALLA: Desoldar Goot Wick","₡4,000"], ["GOMA: T-7000 Negra 110ml","₡5,000"], ["ESTAÑO: Pasta Relife","₡8,000"], ["ESTAÑO: Alambre 0.5mm","₡6,000"], ["KIT: Destornilladores 115 en 1","₡15,000"], ["PINZA: ESD Antiestática","₡4,500"]
];

const OTROS = [
    ["TITULO","--- VARIOS ---"],
    ["PORTASIM: Samsung A10","₡3,000"], ["PORTASIM: Huawei P30","₡3,500"], ["PORTASIM: iPhone 12","₡5,000"], ["BATERÍA: iPhone 11 Certif.","₡25,000"], ["BATERÍA: Samsung A12","₡22,000"], ["MALLA: Polvo Auricular","₡2,000"]
