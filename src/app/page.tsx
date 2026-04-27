import Conversiones from "./components/Conversiones";

type TemperatureUnit = "Celsius" | "Fahrenheit" | "Kelvin";

type Conversion = {
  label: TemperatureUnit;
  value: number;
  unit: string;
};

const initialTemperature = 55;
const initialUnit: TemperatureUnit = "Celsius";

function convertToCelsius(value: number, unit: TemperatureUnit) {
  if (unit === "Celsius") return value;
  if (unit === "Fahrenheit") return (value - 32) * (5 / 9);
  return value - 273.15;
}

function fromCelsiusToFahrenheit(celsius: number) {
  return celsius * (9 / 5) + 32;
}

function fromCelsiusToKelvin(celsius: number) {
  return celsius + 273.15;
}

export default function Home() {
  const celsiusValue = convertToCelsius(initialTemperature, initialUnit);

  const conversions: Conversion[] = [
    {
      label: "Celsius",
      value: celsiusValue,
      unit: "°C",
    },
    {
      label: "Fahrenheit",
      value: fromCelsiusToFahrenheit(celsiusValue),
      unit: "°F",
    },
    {
      label: "Kelvin",
      value: fromCelsiusToKelvin(celsiusValue),
      unit: "K",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 px-6 py-16">
        <section className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold">Conversor de temperatura</h1>
          <p className="mt-3 text-slate-600">
            Valor inicial: <span className="font-bold">{initialTemperature}</span> <span className="font-semibold">{initialUnit}</span>
          </p>
          <p className="mt-2 text-slate-600">
            Se calculan automáticamente las tres unidades y se muestran en una lista ordenada.
          </p>
          <div className="mt-8">
            <Conversiones conversions={conversions} />
          </div>
        </section>
      </main>
    </div>
  );
}
