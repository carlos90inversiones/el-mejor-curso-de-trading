"use client";

import { useState } from "react";

type BrokerType = "Forex" | "Multi-asset" | "Crypto" | "CFD";

interface Broker {
  name: string;
  type: BrokerType;
  regulated: boolean;
  regulators: string;
  minDeposit: number;
  spread: string;
  leverage: string;
  platforms: string;
  propFirmFriendly: boolean;
  rating: number;
  pros: string[];
  cons: string[];
}

const brokers: Broker[] = [
  {
    name: "Interactive Brokers",
    type: "Multi-asset",
    regulated: true,
    regulators: "SEC, FINRA, FCA, ASIC",
    minDeposit: 0,
    spread: "Desde 0.1 pips",
    leverage: "1:20 EU / 1:50 Intl",
    platforms: "TWS, IBKR Mobile, API",
    propFirmFriendly: false,
    rating: 4.7,
    pros: [
      "Acceso a más de 150 mercados globales",
      "Comisiones muy bajas para profesionales",
      "Herramientas avanzadas de análisis",
    ],
    cons: [
      "Plataforma compleja para principiantes",
      "Servicio al cliente lento en español",
    ],
  },
  {
    name: "IC Markets",
    type: "Forex",
    regulated: true,
    regulators: "ASIC, CySEC, FSA",
    minDeposit: 200,
    spread: "Desde 0.0 pips",
    leverage: "1:30 EU / 1:500 Intl",
    platforms: "MT4, MT5, cTrader",
    propFirmFriendly: true,
    rating: 4.6,
    pros: [
      "Spreads ultra-bajos desde 0.0 pips",
      "Ejecución ECN de alta velocidad",
      "Compatible con trading algorítmico",
    ],
    cons: [
      "Sin oficina en España",
      "Depósito mínimo algo elevado",
    ],
  },
  {
    name: "Pepperstone",
    type: "Forex",
    regulated: true,
    regulators: "FCA, ASIC, CySEC, DFSA",
    minDeposit: 200,
    spread: "Desde 0.0 pips",
    leverage: "1:30 EU / 1:500 Intl",
    platforms: "MT4, MT5, cTrader, TradingView",
    propFirmFriendly: true,
    rating: 4.5,
    pros: [
      "Spreads muy competitivos en Razor",
      "Soporte al cliente 24/5 en español",
      "Integración con TradingView",
    ],
    cons: [
      "Sin cuenta de inversión tradicional",
      "Cuentas de swap-free limitadas",
    ],
  },
  {
    name: "XM",
    type: "Multi-asset",
    regulated: true,
    regulators: "CySEC, ASIC, IFSC",
    minDeposit: 5,
    spread: "Desde 0.6 pips",
    leverage: "1:30 EU / 1:888 Intl",
    platforms: "MT4, MT5",
    propFirmFriendly: false,
    rating: 4.1,
    pros: [
      "Depósito mínimo muy bajo (5 USD)",
      "Bonos de bienvenida disponibles",
      "Amplia formación educativa en español",
    ],
    cons: [
      "Spreads más altos que la competencia",
      "Plataforma menos moderna",
    ],
  },
  {
    name: "Exness",
    type: "Forex",
    regulated: true,
    regulators: "FCA, CySEC, FSA, CBCS",
    minDeposit: 1,
    spread: "Desde 0.0 pips",
    leverage: "1:30 EU / 1:Ilimitado Intl",
    platforms: "MT4, MT5, Exness Terminal",
    propFirmFriendly: true,
    rating: 4.3,
    pros: [
      "Apalancamiento ilimitado en ciertas cuentas",
      "Retiros instantáneos disponibles",
      "Depósito mínimo de solo 1 USD",
    ],
    cons: [
      "Apalancamiento extremo puede ser peligroso",
      "Regulación menos sólida en algunos países",
    ],
  },
  {
    name: "OANDA",
    type: "Forex",
    regulated: true,
    regulators: "FCA, NFA, CFTC, ASIC, MAS",
    minDeposit: 0,
    spread: "Desde 0.6 pips",
    leverage: "1:30 EU / 1:50 EEUU",
    platforms: "MT4, OANDA Trade, TradingView",
    propFirmFriendly: false,
    rating: 4.2,
    pros: [
      "Sin depósito mínimo requerido",
      "Regulación sólida en múltiples países",
      "Datos de mercado de alta calidad",
    ],
    cons: [
      "Spreads ligeramente más altos",
      "Menos instrumentos que competidores",
    ],
  },
  {
    name: "IG Markets",
    type: "CFD",
    regulated: true,
    regulators: "FCA, ASIC, MAS, BaFin",
    minDeposit: 250,
    spread: "Desde 0.6 pips",
    leverage: "1:30 EU / 1:200 Intl",
    platforms: "MT4, IG Platform, ProRealTime",
    propFirmFriendly: false,
    rating: 4.4,
    pros: [
      "Más de 17.000 mercados disponibles",
      "Plataforma propia muy avanzada",
      "Excelente reputación y solidez",
    ],
    cons: [
      "Comisiones más altas para pequeños traders",
      "Proceso de apertura de cuenta lento",
    ],
  },
  {
    name: "eToro",
    type: "Multi-asset",
    regulated: true,
    regulators: "FCA, CySEC, ASIC, SEC",
    minDeposit: 50,
    spread: "Desde 1.0 pips",
    leverage: "1:30 EU / 1:400 Intl",
    platforms: "eToro Platform, eToro App",
    propFirmFriendly: false,
    rating: 4.0,
    pros: [
      "Copy Trading integrado en la plataforma",
      "Acceso a criptomonedas reales",
      "Comunidad activa de traders",
    ],
    cons: [
      "Spreads más altos que brokers ECN",
      "Comisión por retiro de 5 USD",
    ],
  },
  {
    name: "Binance",
    type: "Crypto",
    regulated: false,
    regulators: "Regulación limitada por país",
    minDeposit: 10,
    spread: "Desde 0.1% comisión",
    leverage: "1:125 en futuros",
    platforms: "Binance Web, App, API",
    propFirmFriendly: false,
    rating: 4.3,
    pros: [
      "Mayor volumen de trading cripto del mundo",
      "Más de 350 criptomonedas disponibles",
      "Tarifas muy bajas con BNB",
    ],
    cons: [
      "Regulación incierta en varios países",
      "No apto para trading tradicional de Forex",
    ],
  },
  {
    name: "Bybit",
    type: "Crypto",
    regulated: false,
    regulators: "Regulación limitada por país",
    minDeposit: 0,
    spread: "Desde 0.1% comisión",
    leverage: "1:100 en perpetuos",
    platforms: "Bybit Web, App, API",
    propFirmFriendly: true,
    rating: 4.2,
    pros: [
      "Especializado en derivados cripto",
      "Interfaz intuitiva y moderna",
      "Programa de prop trading disponible",
    ],
    cons: [
      "Sin activos financieros tradicionales",
      "Restricciones en algunos países",
    ],
  },
  {
    name: "FTMO",
    type: "Forex",
    regulated: false,
    regulators: "No aplica (Prop Firm)",
    minDeposit: 155,
    spread: "Desde 0.0 pips",
    leverage: "1:100",
    platforms: "MT4, MT5, cTrader",
    propFirmFriendly: true,
    rating: 4.8,
    pros: [
      "Líder mundial en empresas de financiación",
      "División de beneficios hasta el 90%",
      "Proceso de evaluación estructurado",
    ],
    cons: [
      "Tarifa de evaluación no reembolsable en primer intento",
      "Reglas estrictas de gestión de riesgo",
    ],
  },
  {
    name: "Darwinex",
    type: "Multi-asset",
    regulated: true,
    regulators: "FCA",
    minDeposit: 500,
    spread: "Desde 0.4 pips",
    leverage: "1:30 EU",
    platforms: "MT4, MT5, Darwinex App",
    propFirmFriendly: true,
    rating: 4.1,
    pros: [
      "Plataforma de inversión social única",
      "Los traders pueden monetizar su estrategia (DARWINs)",
      "Regulado por la FCA del Reino Unido",
    ],
    cons: [
      "Depósito mínimo elevado (500 USD)",
      "Plataforma con curva de aprendizaje",
    ],
  },
];

const typeLabels: Record<string, string> = {
  all: "Todos",
  Forex: "Forex",
  "Multi-asset": "Multi-activo",
  Crypto: "Cripto",
  CFD: "CFDs",
};

const sortLabels: Record<string, string> = {
  rating: "Valoración",
  minDeposit: "Depósito mínimo",
  name: "Nombre",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        return (
          <span
            key={star}
            className={`text-sm ${
              filled
                ? "text-yellow-400"
                : half
                ? "text-yellow-400 opacity-60"
                : "text-gray-600"
            }`}
          >
            ★
          </span>
        );
      })}
      <span className="text-yellow-400 font-semibold text-sm ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function TypeBadge({ type }: { type: BrokerType }) {
  const colors: Record<BrokerType, string> = {
    Forex: "bg-blue-900 text-blue-300 border-blue-700",
    "Multi-asset": "bg-purple-900 text-purple-300 border-purple-700",
    Crypto: "bg-orange-900 text-orange-300 border-orange-700",
    CFD: "bg-green-900 text-green-300 border-green-700",
  };
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded border ${colors[type]}`}
    >
      {typeLabels[type]}
    </span>
  );
}

function BrokerCard({ broker }: { broker: Broker }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#12122a] border border-[#2a2a40] rounded-xl overflow-hidden hover:border-[#3a3a60] transition-all duration-200">
      {/* Cabecera */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-white font-bold text-lg leading-tight">
                {broker.name}
              </h3>
              {broker.propFirmFriendly && (
                <span className="text-xs bg-emerald-900 text-emerald-300 border border-emerald-700 px-2 py-0.5 rounded font-medium whitespace-nowrap">
                  Prop Friendly
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <TypeBadge type={broker.type} />
              <span
                className={`text-xs px-2 py-0.5 rounded border font-medium ${
                  broker.regulated
                    ? "bg-teal-900 text-teal-300 border-teal-700"
                    : "bg-red-900 text-red-300 border-red-700"
                }`}
              >
                {broker.regulated ? "Regulado" : "No regulado"}
              </span>
            </div>
          </div>
          <div className="shrink-0">
            <StarRating rating={broker.rating} />
          </div>
        </div>

        {/* Info reguladores */}
        <p className="text-gray-400 text-xs mb-4 leading-relaxed">
          <span className="text-gray-500">Reguladores:</span>{" "}
          {broker.regulators}
        </p>

        {/* Grid de datos clave */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-[#1a1a2e] rounded-lg p-3">
            <p className="text-gray-500 text-xs mb-0.5">Depósito mín.</p>
            <p className="text-white font-semibold text-sm">
              {broker.minDeposit === 0 ? "Sin mínimo" : `$${broker.minDeposit}`}
            </p>
          </div>
          <div className="bg-[#1a1a2e] rounded-lg p-3">
            <p className="text-gray-500 text-xs mb-0.5">Spread</p>
            <p className="text-white font-semibold text-sm">{broker.spread}</p>
          </div>
          <div className="bg-[#1a1a2e] rounded-lg p-3">
            <p className="text-gray-500 text-xs mb-0.5">Apalancamiento</p>
            <p className="text-white font-semibold text-sm leading-tight">
              {broker.leverage}
            </p>
          </div>
          <div className="bg-[#1a1a2e] rounded-lg p-3">
            <p className="text-gray-500 text-xs mb-0.5">Plataformas</p>
            <p className="text-white font-semibold text-sm leading-tight">
              {broker.platforms}
            </p>
          </div>
        </div>

        {/* Botón expandir */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors py-1.5 border border-[#2a2a40] hover:border-[#3a3a60] rounded-lg"
        >
          {expanded ? "Ocultar detalles" : "Ver pros y contras"}
          <span
            className={`transform transition-transform duration-200 ${
              expanded ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </button>
      </div>

      {/* Panel expandible */}
      {expanded && (
        <div className="px-5 pb-5 border-t border-[#2a2a40]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div>
              <h4 className="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-1">
                <span>✓</span> Ventajas
              </h4>
              <ul className="space-y-1.5">
                {broker.pros.map((pro, i) => (
                  <li
                    key={i}
                    className="text-gray-300 text-xs flex items-start gap-2"
                  >
                    <span className="text-emerald-500 mt-0.5 shrink-0">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-red-400 font-semibold text-sm mb-2 flex items-center gap-1">
                <span>✗</span> Desventajas
              </h4>
              <ul className="space-y-1.5">
                {broker.cons.map((con, i) => (
                  <li
                    key={i}
                    className="text-gray-300 text-xs flex items-start gap-2"
                  >
                    <span className="text-red-500 mt-0.5 shrink-0">−</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BrokerComparator() {
  const [filterType, setFilterType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("rating");
  const [propOnly, setPropOnly] = useState(false);

  const filtered = brokers
    .filter((b) => (filterType === "all" ? true : b.type === filterType))
    .filter((b) => (propOnly ? b.propFirmFriendly : true))
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "minDeposit") return a.minDeposit - b.minDeposit;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6">
        {/* Encabezado */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-1">
            Comparador de Brókers
          </h3>
          <p className="text-sm text-[#a0a0b8]">
            Compara los brókers más populares y encuentra el ideal para tu estilo.
          </p>
        </div>

        {/* Controles de filtro */}
        <div className="bg-[#12122a] border border-[#2a2a40] rounded-xl p-5 mb-8">
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
            {/* Filtro por tipo */}
            <div className="flex-1">
              <p className="text-gray-400 text-xs mb-2 font-medium uppercase tracking-wider">
                Tipo de bróker
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(typeLabels).map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => setFilterType(value)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-150 ${
                      filterType === value
                        ? "bg-indigo-600 border-indigo-500 text-white"
                        : "bg-[#1a1a2e] border-[#2a2a40] text-gray-400 hover:border-[#3a3a60] hover:text-gray-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Ordenar por */}
            <div>
              <p className="text-gray-400 text-xs mb-2 font-medium uppercase tracking-wider">
                Ordenar por
              </p>
              <div className="flex gap-2 flex-wrap">
                {Object.entries(sortLabels).map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => setSortBy(value)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-150 ${
                      sortBy === value
                        ? "bg-violet-700 border-violet-600 text-white"
                        : "bg-[#1a1a2e] border-[#2a2a40] text-gray-400 hover:border-[#3a3a60] hover:text-gray-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Toggle Prop Firm */}
          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={() => setPropOnly(!propOnly)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                propOnly ? "bg-emerald-600" : "bg-[#2a2a40]"
              }`}
              aria-label="Mostrar solo prop firm friendly"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                  propOnly ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <span className="text-gray-300 text-sm">
              Mostrar solo brókers{" "}
              <span className="text-emerald-400 font-semibold">
                Prop Firm Friendly
              </span>
            </span>
          </div>
        </div>

        {/* Contador de resultados */}
        <p className="text-gray-500 text-sm mb-5">
          Mostrando{" "}
          <span className="text-indigo-400 font-semibold">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "bróker" : "brókers"}
          {filterType !== "all" && (
            <span> de tipo {typeLabels[filterType]}</span>
          )}
          {propOnly && <span> compatibles con Prop Firm</span>}
        </p>

        {/* Grid de tarjetas */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((broker) => (
              <BrokerCard key={broker.name} broker={broker} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg font-medium text-gray-400">
              No se encontraron brókers
            </p>
            <p className="text-sm mt-1">
              Prueba a cambiar los filtros de búsqueda.
            </p>
          </div>
        )}

        {/* Aviso legal */}
        <p className="text-gray-600 text-xs text-center mt-12 max-w-3xl mx-auto leading-relaxed">
          ⚠️ La información aquí mostrada es orientativa y puede no estar
          actualizada. El trading con apalancamiento implica un alto riesgo de
          pérdida. Verifica siempre los datos directamente con cada bróker antes
          de operar.
        </p>
    </div>
  );
}
