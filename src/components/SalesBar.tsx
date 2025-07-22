import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

const data = Array.from({ length: 6 }, (_, i) => ({
  name: "Line " + i,
  uv: Math.floor(Math.random() * 3000) + 1000,
  pv: Math.floor(Math.random() * 3000) + 1000,
}));

export default function SalesBar() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Tooltip
          contentStyle={{
            background: "#ee8231dd",
            border: "none",
          }}
          labelStyle={{
            fontWeight: "bolder",
          }}
          itemStyle={{
            fontWeight: "bolder",
          }}
        />

        <Bar
          dataKey="uv"
          stackId="a"
          fill="#A9DFD8"
          barSize={20}
          radius={[5, 5, 0, 0]}
        />
        <Bar
          dataKey="pv"
          stackId="a"
          fill="#2B2B36"
          barSize={20}
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
