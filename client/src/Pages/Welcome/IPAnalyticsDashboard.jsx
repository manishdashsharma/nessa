import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Pagination } from '@mui/material'
import { fetchVisitorLocation } from '../../services/api.services'
import MapComponent from './MapComponent'

const IPAnalyticsDashboard = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [apiData, setApiData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const rowsPerPage = 5

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchVisitorLocation()
            setApiData(response.data)
        }
        fetchData()
    }, [])

    // Aggregate data for visualizations
    const countryStats = apiData.reduce((acc, curr) => {
        acc[curr.countryName] = (acc[curr.countryName] || 0) + 1
        return acc
    }, {})

    const pieData = Object.entries(countryStats).map(([name, value]) => ({
        name,
        value
    }))

    const COLORS = ['#60A5FA', '#34D399', '#F472B6', '#FBBF24']

    const filteredData = apiData.filter(
        (item) =>
            item.ipAddress.includes(searchTerm) ||
            item.cityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.countryName.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Pagination logic
    const indexOfLastRow = currentPage * rowsPerPage
    const indexOfFirstRow = indexOfLastRow - rowsPerPage
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow)

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage)
    }

    return (
        <div className="min-h-screen bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">IP Analytics Dashboard</h1>
                    <div className="relative">
                        <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={20}
                        />
                        <input
                            type="text"
                            placeholder="Search IP, City, or Country"
                            className="bg-gray-800 text-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <h3 className="text-lg font-semibold mb-2">Total Visitors</h3>
                        <p className="text-3xl font-bold">{apiData.length}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <h3 className="text-lg font-semibold mb-2">Unique Countries</h3>
                        <p className="text-3xl font-bold">{new Set(apiData.map((item) => item.countryName)).size}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <h3 className="text-lg font-semibold mb-2">Unique Cities</h3>
                        <p className="text-3xl font-bold">{new Set(apiData.map((item) => item.cityName)).size}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <h3 className="text-lg font-semibold mb-2">Time Zones</h3>
                        <p className="text-3xl font-bold">{new Set(apiData.map((item) => item.timeZone)).size}</p>
                    </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <h2 className="text-xl font-semibold mb-4">Visitors by Country</h2>
                        <div className="h-80">
                            <ResponsiveContainer
                                width="100%"
                                height="100%">
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value">
                                        {pieData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#ff6e6e',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '10px',
                                            color: '#5698fc',
                                            padding: '12px',
                                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
                                        }}
                                        labelStyle={{
                                            color: '#5698fc',
                                            fontSize: '14px',
                                            fontWeight: '500'
                                        }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Location Map */}
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <h2 className="text-xl font-semibold mb-4">Visitor Locations</h2>
                        <MapComponent data={apiData} />
                    </div>
                </div>

                {/* Data Table with Pagination */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 rounded-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-700">
                        <h2 className="text-xl font-semibold">Visitor Details</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">IP Address</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">Location</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">Country</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">Time Zone</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">Currency</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {currentRows.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="">
                                        <td className="px-6 py-4 text-sm">{item.ipAddress}</td>
                                        <td className="px-6 py-4 text-sm">{`${item.cityName}, ${item.regionName}`}</td>
                                        <td className="px-6 py-4 text-sm">{item.countryName}</td>
                                        <td className="px-6 py-4 text-sm">{item.timeZone}</td>
                                        <td className="px-6 py-4 text-sm">{`${item.currency.code} (${item.currency.name})`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 flex justify-center">
                        <Pagination
                            count={Math.ceil(filteredData.length / rowsPerPage)}
                            page={currentPage}
                            onChange={handleChangePage}
                            color="primary"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IPAnalyticsDashboard

