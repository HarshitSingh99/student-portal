function StatsCard({ title, value, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-all">

      <h3 className="text-gray-500 text-lg">
        {title}
      </h3>

      <h1 className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </h1>

    </div>
  );
}

export default StatsCard;