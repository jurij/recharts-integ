import './App.css';
import {
  Bar,
  BarChart,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function App() {
  const data = [
    { x: 100, y: 200, z: 200 },
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];

  return (
    <>
      <h1>Vite + React 19 + TypeScript + Recharts</h1>
      <BarChart
        width={600}
        height={300}
        data={[
          { name: 'A', value: 100 },
          { name: 'B', value: 200 },
        ]}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" fill="gold" name="Tooltip value" />
        <Legend />
        <Tooltip />
      </BarChart>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} defaultIndex={1} />
          <Scatter name="A school" data={data} fill="#8884d8" />
          <Legend />
        </ScatterChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;
