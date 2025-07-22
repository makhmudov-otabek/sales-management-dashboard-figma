import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     A: 4000,
//     B: 2400,
//   },
//   {
//     name: "Page B",
//     A: 3000,
//     B: 1398,
//   },
//   {
//     name: "Page C",
//     A: 2000,
//     B: 800,
//   },
//   {
//     name: "Page D",
//     A: 2780,
//     B: 2008,
//   },
//   {
//     name: "Page E",
//     A: 2890,
//     B: 2140,
//   },
//   {
//     name: "Page F",
//     A: 2390,
//     B: 800,
//   },
//   {
//     name: "Page G",
//     A: 3490,
//     B: 2300,
//   },
// ];

const data = Array.from({ length: 7 }, (_, i) => ({
  name: "Page " + i,
  A: Math.floor(Math.random() * 3000) + 1000,
  B: Math.floor(Math.random() * 3000) + 1000,
}));

function TopProductsChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        width={200}
        height={60}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#A9DFD8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#A9DFD8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F2C8ED" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#F2C8ED" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Tooltip
          contentStyle={{
            background: "#21222D",
          }}
        />
        <Area
          type="linear"
          dataKey="A"
          stroke="#A9DFD8"
          fillOpacity={1}
          fill="url(#colorUv)"
          dot={{ fill: "#A9DFD8" }}
        />
        <Area
          type="linear"
          dataKey="B"
          stroke="#F2C8ED"
          fillOpacity={1}
          fill="url(#colorPv)"
          dot={{ fill: "#F2C8ED" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default function TopProducts() {
  const productsData = [
    {
      name: "Home Decor Range",
      popularity: 80,
      color: "#FCB859",
    },
    {
      name: "Disney Princess Dress",
      popularity: 45,
      color: "#A9DFD8",
    },
    {
      name: "Bathroom Essentials",
      popularity: 65,
      color: "#28AEF3",
    },
    {
      name: "Apple Smartwatch",
      popularity: 33,
      color: "#F2C8ED",
    },
  ];
  return (
    <section className="w-full grid grid-cols-3 justify-between gap-8 p-4">
      <div className="col-span-3 md:col-span-3 xl:col-span-2 bg-[#21222D] rounded-xl">
        <p className="text-2xl font-bold mb-4 px-4 py-4">Top Products</p>
        <table className="text-left w-full mb-4">
          <thead>
            <tr className="text-[#87888C] border-solid border-[#FFFFFF0F] border-b">
              <th className="pl-5">#</th>
              <th className="pl-5">Name</th>
              <th className="pl-5">Popularity</th>
              <th className="pl-5">Sales</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((item, idx) => {
              return (
                <tr
                  key={idx}
                  className="border-solid border-[#FFFFFF0F] border-b"
                >
                  <td className="pl-5 py-4">{idx + 1}</td>
                  <td className="pl-5 py-4">{item.name}</td>
                  <td className="pl-5">
                    <div className="relative h-[3px] w-full">
                      <div className="absolute top-0 left-0 w-full h-full rounded-full bg-[#2B2B36] z-0" />

                      <div
                        className="absolute top-0 left-0 h-full rounded-full z-10"
                        style={{
                          width: `${item.popularity}%`,
                          background: item.color,
                        }}
                      />
                    </div>
                  </td>
                  <td className="pl-5 py-4">
                    <p
                      className="inline p-2 border-solid border rounded-md"
                      style={{
                        borderColor: `${item.color}`,
                        background: `${item.color}20`,
                        color: `${item.color}`,
                      }}
                    >
                      {item.popularity}%
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="col-span-3 md:col-span-3 xl:col-span-1 bg-[#21222D] rounded-xl">
        <p className="font-bold text-xl p-4 pb-0">Customer Fulfillment</p>

        <div className="p-4">
          <TopProductsChart />
        </div>
        <div className="p-4 border-t border-[#333] flex justify-center items-center">
          <div className="text-center">
            <p className="flex items-center text-[#A0A0A0] gap-2 px-4 border-solid border-r border-[#FFFFFF2E]">
              <span className="block w-[10px] h-[10px] rounded-full bg-[#A9DFD8]" />
              Last month
            </p>
            <p>$8990</p>
          </div>
          <div className="text-center">
            <p className="flex items-center text-[#A0A0A0] gap-2 px-4">
              <span className="block w-[10px] h-[10px] rounded-full bg-[#2B2B36]" />
              This month
            </p>
            <p>$3290</p>
          </div>
        </div>
      </div>
    </section>
  );
}
