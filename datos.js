// --- PANTALLAS (MARCAS Y DETALLES DE MARCO) ---
const PANTALLAS = [
    ["TITULO","--- IPHONE ---"],
    ["iPhone 6G","₡22,000"], ["iPhone 6G Plus","₡24,000"], ["iPhone 6S","₡23,000"], ["iPhone 6S Plus","₡26,000"],
    ["iPhone 7G","₡25,000"], ["iPhone 7 Plus","₡28,000"], ["iPhone 8G","₡26,000"], ["iPhone 8 Plus","₡30,000"],
    ["iPhone X OLED","₡45,000"], ["iPhone X Incel","₡35,000"], ["iPhone XS OLED","₡48,000"], ["iPhone XS Incel","₡38,000"],
    ["iPhone XR ORIG","₡45,000"], ["iPhone XR Incel","₡35,000"], ["iPhone XS Max OLED","₡55,000"], ["iPhone XS Max Incel","₡42,000"],
    ["iPhone 11 ORIG","₡48,000"], ["iPhone 11 Incel","₡35,000"], ["iPhone 11 Pro OLED","₡55,000"], ["iPhone 11 Pro Incel","₡42,000"],
    ["iPhone 11 Pro Max OLED","₡65,000"], ["iPhone 11 Pro Max Incel","₡48,000"], ["iPhone 12 OLED","₡65,000"],
    ["iPhone 12 / 12 Pro Incel","₡48,000"], ["iPhone 12 Pro Max ORIG","₡110,000"], ["iPhone 13 OLED","₡80,000"],
    ["iPhone 14 Pro Max OLED","₡185,000"], ["iPhone 15 Pro Max Incel","₡135,000"], ["iPhone 16 Pro Max SOFT","₡345,000"],
    ["TITULO","--- SAMSUNG ---"],
    ["Samsung A01","₡18,000"], ["Samsung A02 / M12","₡20,000"], ["Samsung A03S","₡20,000"], ["Samsung A05S","₡22,000"],
    ["Samsung A10 (Sin Marco)","₡19,000"], ["Samsung A10 (Con Marco)","₡23,000"], ["Samsung A11","₡20,000"], ["Samsung A12","₡20,000"],
    ["Samsung A13 / A23","₡22,000"], ["Samsung A14 4G","₡24,000"], ["Samsung A15 ORIG","₡45,000"], ["Samsung A20 OLED","₡26,000"],
    ["Samsung A24 ORIG","₡48,000"], ["Samsung A34 ORIG","₡55,000"], ["Samsung A54 ORIG","₡70,000"], ["Samsung S20 FE","₡45,000"],
    ["Samsung S23 Ultra ORIG","₡145,000"],
    ["TITULO","--- HONOR & HUAWEI ---"],
    ["Honor X5 Plus (Con Marco)","₡26,000"], ["Honor X6 / X6S","₡22,000"], ["Honor X7","₡24,000"], ["Honor X7B (Con Marco)","₡30,000"],
    ["Honor X8A / 90 Lite","₡26,000"], ["Honor X8B / 200 Lite","₡45,000"], ["Honor 70 OLED","₡55,000"], ["Honor 90 OLED","₡65,000"],
    ["Huawei P20 Lite","₡22,000"], ["Huawei P30 Lite","₡25,000"], ["Huawei Y7A","₡26,000"], ["Huawei Y9 Prime","₡26,000"],
    ["Huawei Nova 5T","₡28,000"],
    ["TITULO","--- XIAOMI & MOTOROLA ---"],
    ["Redmi A1 / A2","₡22,000"], ["Redmi 10C","₡24,000"], ["Redmi 12 / 13","₡26,000"], ["Redmi 13C","₡24,000"],
    ["Redmi Note 9","₡24,000"], ["Redmi Note 11 OLED","₡48,000"], ["Redmi Note 12 Pro","₡55,000"], ["Redmi Note 13 Pro 4G","₡55,000"],
    ["Poco X3 Pro","₡28,000"], ["Poco M3","₡24,000"], ["Moto G04 / G24","₡22,000"], ["Moto G22","₡24,000"], ["Moto G60","₡28,000"], ["Moto E20 / E40","₡22,000"]
];

// --- FLEX (SEPARADOS POR FUNCIÓN) ---
const FLEX = [
    ["TITULO","--- FLEX DE CARGA ---"],
    ["Flex Carga Samsung A10S","₡12,000"], ["Flex Carga Samsung A02S","₡12,000"], ["Flex Carga Moto G20","₡15,000"], 
    ["Flex Carga Poco X3","₡18,000"], ["Flex Carga Huawei P30 Lite","₡15,000"], ["Flex Carga Redmi Note 11","₡15,000"],
    ["TITULO","--- FLEX PRINCIPAL (MAIN) ---"],
    ["Flex Principal Samsung A20S","₡12,000"], ["Flex Principal Samsung A30 / A50","₡12,000"], ["Flex Principal A70","₡14,000"],
    ["TITULO","--- FLEX ENCENDIDO / VOLUMEN ---"],
    ["Flex Encendido Moto G8 Power","₡7,500"], ["Flex Encendido Huawei Y9 Prime","₡8,000"], ["Flex Encendido Samsung A10","₡7,000"],
    ["TITULO","--- FLEX AUDIO / AURICULAR ---"],
    ["Flex Audio iPhone X","₡15,000"], ["Flex Auricular iPhone 11","₡18,000"]
];

// --- AUDIO, TIMBRE Y ANTENAS ---
const AUDIO = [
    ["TITULO","--- COMPONENTES DE AUDIO ---"],
    ["TIMBRE: Samsung J7 Prime","₡6,000"], ["TIMBRE: Huawei Y6 2019","₡6,000"], ["MICRÓFONO: Universal","₡4,500"],
    ["AURICULAR: iPhone 11","₡12,000"], ["PARLANTE: Redmi Note 10","₡8,000"],
    ["TITULO","--- ANTENAS Y SEÑAL ---"],
    ["ANTENA: Cable Coaxial A10","₡5,000"], ["FLEX: Antena Wi-Fi iPhone 7","₡8,000"], ["ANTENA: Señal Redmi 9","₡8,000"]
];

// --- CARGADORES Y CABLES ---
const CARGADORES = [
    ["TITULO","--- CUBOS Y CARGA ---"],
    ["CUBO: 20W Carga Rápida","₡12,000"], ["CUBO: PD 30W Carga Super","₡18,000"], ["CUBO: Samsung 25W ORIG","₡22,000"],
    ["TITULO","--- CABLES ---"],
    ["CABLE: Tipo C a C 1M","₡6,000"], ["CABLE: Lightning iPhone","₡5,000"], ["CABLE: Micro USB Reforzado","₡4,000"],
    ["COMBO: Cubo + Cable 20W","₡15,000"]
];

// --- ESTÉTICA Y CÁMARAS ---
const ESTETICA = [
    ["TITULO","--- TAPAS TRASERAS ---"],
    ["TAPA: Samsung A30 (Azul)","₡12,000"], ["TAPA: Huawei P30 Lite","₡10,000"], ["TAPA: iPhone 11 (Vidrio)","₡15,000"],
    ["TAPA: Samsung S20 FE","₡15,000"], ["TAPA: Redmi Note 11","₡12,000"],
    ["TITULO","--- LENTES Y CÁMARAS ---"],
    ["LENTE CÁMARA: Redmi Note 11","₡5,000"], ["LENTE CÁMARA: S22 Ultra","₡8,000"], ["LENTE CÁMARA: iPhone 12","₡7,000"],
    ["CÁMARA: Principal A10S","₡15,000"], ["CÁMARA: Frontal iPhone 11","₡25,000"], ["CÁMARA: Gran Angular A32","₡18,000"]
];

// --- GADGETS Y RELOJES ---
const GADGETS = [
    ["TITULO","--- AUDÍFONOS ---"],
    ["AUDÍFONOS: Bluetooth Pro 6","₡18,000"], ["AUDÍFONOS: Manos Libres 3.5","₡5,000"], ["AUDÍFONOS: Tipo C Digital","₡8,000"],
    ["TITULO","--- RELOJES ---"],
    ["RELOJ: Smartwatch S8 Ultra","₡22,000"], ["RELOJ: Serie 9 Clon 1:1","₡35,000"], ["RELOJ: Huawei Band 8","₡28,000"]
];

// --- HERRAMIENTAS DE TALLER ---
const HERRAMIENTAS = [
    ["TITULO","--- CONSUMIBLES ---"],
    ["MALLA: Desoldar Goot Wick","₡4,000"], ["GOMA: T-7000 Negra 110ml","₡5,000"], ["ESTAÑO: Pasta Relife","₡8,000"],
    ["HILO: Puentes 0.02mm","₡3,500"], ["FLUX: Mechanic Amtech","₡6,000"],
    ["TITULO","--- HERRAMIENTAS ---"],
    ["PINZA: Antiestática ESD","₡4,000"], ["KIT: Destornilladores 115 en 1","₡15,000"], ["MANTA: Térmica Silicona","₡12,000"]
];

// --- OTROS Y REPUESTOS PEQUEÑOS ---
const OTROS = [
    ["TITULO","--- REPUESTOS VARIOS ---"],
    ["PORTASIM: Samsung A10","₡3,000"], ["PORTASIM: Huawei P30","₡3,500"], ["PORTASIM: iPhone 12","₡5,000"],
    ["MALLA: Polvo Auricular (Par)","₡2,000"], ["GOMAS: Soporte interno","₡1,500"],
    ["BATERÍA: iPhone 11 (Certificada)","₡25,000"], ["BATERÍA: Samsung A12 ORIG","₡22,000"]
];
