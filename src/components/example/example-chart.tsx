"use client"

import * as React from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent,
} from "@/components/ui/chart"

const data = [
  { name: "Jan", uv: 4000, pv: 2400 },
  { name: "Feb", uv: 3000, pv: 1398 },
  { name: "Mar", uv: 2000, pv: 9800 },
  { name: "Apr", uv: 2780, pv: 3908 },
  { name: "May", uv: 1890, pv: 4800 },
  { name: "Jun", uv: 2390, pv: 3800 },
  { name: "Jul", uv: 3490, pv: 4300 },
]

export default function ExampleChart() {
  const config = React.useMemo(() => ({
    uv: { label: "UV", color: "#7c3aed" },
    pv: { label: "PV", color: "#06b6d4" },
  }), [])

  return (
    <div className="w-full max-w-3xl">
      <ChartContainer id="example" config={config} className="w-full">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Legend content={<ChartLegendContent />} />
          <Area type="monotone" dataKey="uv" stroke="var(--color-uv)" fill="var(--color-uv)" />
          <Area type="monotone" dataKey="pv" stroke="var(--color-pv)" fill="var(--color-pv)" />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}
