import Link from "next/link"
import { ArrowLeft, ChevronRight, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data - replace with your actual data source
const reportsData = {
  "1": {
    id: "1",
    name: "Financial Summary",
    description: "Comprehensive overview of financial performance across all departments",
    subReports: [
      { id: "1-1", name: "Revenue Analysis", description: "Detailed breakdown of revenue streams" },
      { id: "1-2", name: "Expense Report", description: "Analysis of all company expenses" },
      { id: "1-3", name: "Profit Margins", description: "Profit margin calculations by product and service" },
    ],
    columns: [
      { id: "col1", name: "Revenue", description: "Total revenue generated in the reporting period" },
      { id: "col2", name: "Expenses", description: "Total expenses incurred during the reporting period" },
      { id: "col3", name: "Net Profit", description: "Total profit after deducting all expenses" },
      { id: "col4", name: "Profit Margin", description: "Percentage of revenue that is profit" },
      { id: "col5", name: "YoY Growth", description: "Year over year growth percentage" },
    ],
  },
  "2": {
    id: "2",
    name: "Customer Analytics",
    description: "In-depth analysis of customer behavior, demographics, and purchasing patterns",
    subReports: [
      { id: "2-1", name: "Demographics", description: "Customer demographic breakdown" },
      { id: "2-2", name: "Purchase History", description: "Analysis of customer purchasing patterns" },
    ],
    columns: [
      { id: "col1", name: "Customer ID", description: "Unique identifier for each customer" },
      { id: "col2", name: "Age Group", description: "Age bracket of the customer" },
      { id: "col3", name: "Location", description: "Geographic location of the customer" },
      { id: "col4", name: "Total Spend", description: "Total amount spent by the customer" },
      { id: "col5", name: "Purchase Frequency", description: "How often the customer makes purchases" },
    ],
  },
  "3": {
    id: "3",
    name: "Inventory Status",
    description: "Current inventory levels, movements, and forecasts",
    subReports: [],
    columns: [
      { id: "col1", name: "Product ID", description: "Unique identifier for each product" },
      { id: "col2", name: "Product Name", description: "Name of the product" },
      { id: "col3", name: "Current Stock", description: "Current inventory level" },
      { id: "col4", name: "Reorder Level", description: "Level at which reordering is recommended" },
      { id: "col5", name: "Lead Time", description: "Time taken for restocking" },
    ],
  },
  "4": {
    id: "4",
    name: "Sales Performance",
    description: "Detailed sales metrics and performance indicators across regions and products",
    subReports: [
      { id: "4-1", name: "Regional Sales", description: "Sales breakdown by region" },
      { id: "4-2", name: "Product Sales", description: "Sales breakdown by product" },
      { id: "4-3", name: "Sales Team Performance", description: "Performance metrics for sales representatives" },
    ],
    columns: [
      { id: "col1", name: "Sales ID", description: "Unique identifier for each sale" },
      { id: "col2", name: "Product", description: "Product sold" },
      { id: "col3", name: "Quantity", description: "Number of units sold" },
      { id: "col4", name: "Revenue", description: "Revenue generated from the sale" },
      { id: "col5", name: "Sales Rep", description: "Sales representative who made the sale" },
    ],
  },
  "1-1": {
    id: "1-1",
    name: "Revenue Analysis",
    description: "Detailed breakdown of revenue streams by product, service, and region",
    parentId: "1",
    subReports: [],
    columns: [
      { id: "col1", name: "Revenue Stream", description: "Source of revenue (product/service)" },
      { id: "col2", name: "Amount", description: "Revenue amount" },
      { id: "col3", name: "Percentage", description: "Percentage of total revenue" },
      { id: "col4", name: "YoY Change", description: "Year over year change percentage" },
    ],
  },
  // Add more sub-reports as needed
}

export default function ReportPage({ params }: { params: { id: string } }) {
  const reportId = params.id
  const report = reportsData[reportId]

  if (!report) {
    return <div className="container mx-auto py-10">Report not found</div>
  }

  const parentReport = report.parentId ? reportsData[report.parentId] : null

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {parentReport && (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/reports/${parentReport.id}`}>{parentReport.name}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            )}
            <BreadcrumbItem>
              <BreadcrumbLink href={`/reports/${report.id}`}>{report.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{report.name}</h1>
        <Link href="/" passHref>
          <Button variant="outline" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Reports
          </Button>
        </Link>
      </div>

      <p className="text-muted-foreground mb-8">{report.description}</p>

      <Tabs defaultValue="columns" className="mb-8">
        <TabsList>
          <TabsTrigger value="columns">Columns</TabsTrigger>
          {report.subReports && report.subReports.length > 0 && (
            <TabsTrigger value="subreports">Sub-Reports</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="columns">
          <Card>
            <CardHeader>
              <CardTitle>Columns and Descriptions</CardTitle>
              <CardDescription>Detailed information about each column in this report</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Column Name</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {report.columns.map((column) => (
                    <TableRow key={column.id}>
                      <TableCell className="font-medium">{column.name}</TableCell>
                      <TableCell>{column.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {report.subReports && report.subReports.length > 0 && (
          <TabsContent value="subreports">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {report.subReports.map((subReport) => (
                <Card key={subReport.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      {subReport.name}
                    </CardTitle>
                    <CardDescription>{subReport.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/reports/${subReport.id}`} passHref>
                      <Button variant="ghost" size="sm" className="gap-1">
                        View Details
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}
