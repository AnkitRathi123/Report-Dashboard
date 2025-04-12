import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data - replace with your actual data source
const reports = [
  {
    id: "1",
    name: "Financial Summary",
    description: "Overview of financial performance",
    hasSubReports: true,
  },
  {
    id: "2",
    name: "Customer Analytics",
    description: "Customer behavior and demographics analysis",
    hasSubReports: true,
  },
  {
    id: "3",
    name: "Inventory Status",
    description: "Current inventory levels and movements",
    hasSubReports: false,
  },
  {
    id: "4",
    name: "Sales Performance",
    description: "Sales metrics and performance indicators",
    hasSubReports: true,
  },
]

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Reports Dashboard</h1>
      <p className="text-muted-foreground mb-8">Select a report to view its details, columns, and descriptions</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <Card key={report.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle>{report.name}</CardTitle>
              <CardDescription>{report.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  {report.hasSubReports ? "Contains sub-reports" : "No sub-reports"}
                </div>
                <Link href={`/reports/${report.id}`} passHref>
                  <Button variant="ghost" size="sm" className="gap-1">
                    View Details
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
