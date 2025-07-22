import {
  Area,
  AreaChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const generatedData = Array.from({ length: 12 }, (_, i) => ({
  name: monthNames[i % 12],
  A: Math.floor(Math.random() * 3000) + 1000,
}));

function VisitorInsights() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        width={200}
        height={60}
        data={generatedData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="insights" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#A9DFD8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#A9DFD803" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Tooltip
          contentStyle={{
            background: "#21222D",
          }}
          cursor={{
            stroke: "#FCB859",
            strokeDasharray: "3 3",
          }}
        />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#fff" }} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tickMargin={15}
          tick={{ fill: "#fff" }}
        />
        <Area
          type="linear"
          dataKey="A"
          stroke="#A9DFD8"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#insights)"
          activeDot={{ fill: "#FCB859", r: 6 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

type Needle = {
  value: number;

  cx: number;
  cy: number;
};

const sharpChartNumber = ({ value, cx, cy }: Needle) => {
  const percentage = Math.trunc(value);

  return (
    <text
      x={cx}
      y={cy}
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={36}
      fill={"#fff"}
      fontWeight="bold"
    >
      {percentage}%
    </text>
  );
};

const chartData = [
  { name: "A", value: 80, color: "#A9DFD8" },
  { name: "B", value: 20, color: "#2B2B36" },
];

function SharpChart() {
  const cx = 150;
  const cy = 150;
  const iR = 90;
  const oR = 140;
  const value = chartData[0].value;

  return (
    <PieChart width={300} height={200} className="">
      <Pie
        width={350}
        height={150}
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={chartData}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#fff"
        stroke="none"
      >
        {chartData.map((entry) => (
          <Cell
            className="cursor-pointer"
            key={`cell-${entry.name}`}
            fill={entry.color}
          />
        ))}
      </Pie>
      {sharpChartNumber({ value, cx, cy })}
      <Tooltip
        contentStyle={{
          background: "#A9DFD8",
          color: "white",
        }}
      />
    </PieChart>
  );
}

export default function Footer() {
  return (
    <section className="w-full flex justify-between gap-8 p-4">
      <div className="flex-1/4 bg-[#21222D] p-4 rounded-xl">
        <p className="text-2xl font-bold">Earnings</p>
        <p className="text-[#87888C] text-sm">Total Expense</p>
        <p className="text-3xl text-[#A9DFD8] font-bold my-3">$6078.76</p>
        <p className="text-[#87888C] text-sm">
          Profit is 48% More than last Month
        </p>

        <SharpChart />
      </div>
      <div className="flex-3/4 bg-[#21222D] p-4 rounded-xl">
        <div className="w-full flex justify-between items-center">
          <p className="text-2xl mb-4">Visitor Insights</p>
          <p className="flex gap-4 items-center px-3 py-1 rounded-md bg-[#171821]">
            <span className="block w-[10px] h-[10px] rounded-full bg-[#FCB859]" />
            New visitors
          </p>
        </div>

        <VisitorInsights />
      </div>
    </section>
  );
}
