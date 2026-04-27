type TemperatureUnit = "Celsius" | "Fahrenheit" | "Kelvin";

type Conversion = {
  label: TemperatureUnit;
  value: number;
  unit: string;
};

type ConversionesProps = {
  conversions: Conversion[];
};

export default function Conversiones({ conversions }: ConversionesProps) {
  return (
    <div className="w-full max-w-md rounded-xl bg-slate-100 p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Resultados de conversión</h2>
      <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-800">
        {conversions.map((conversion) => (
          <li key={conversion.label}>
            <span className="font-semibold">{conversion.label}:</span>{" "}
            {conversion.value.toFixed(2)} {conversion.unit}
          </li>
        ))}
      </ul>
    </div>
  );
}
