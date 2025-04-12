# Report-Dashboard
This interactive report system includes:

1. **Main Dashboard Page**:

1. Displays a grid of report cards
2. Each card shows the report name, description, and whether it has sub-reports
3. Clicking "View Details" navigates to the report's detail page



2. **Report Detail Page**:

1. Shows comprehensive information about the selected report
2. Includes breadcrumb navigation for easy traversal between reports
3. Uses tabs to organize content:

1. "Columns" tab: Displays a table of all columns with their descriptions
2. "Sub-Reports" tab: Shows cards for all sub-reports (if any exist)



4. Clicking on a sub-report navigates to its detail page



3. **Key Features**:

1. Hierarchical navigation between reports and sub-reports
2. Breadcrumb navigation to track your location
3. Responsive design that works on all device sizes
4. Clean, modern UI using shadcn/ui components





The sample data structure demonstrates how reports can contain sub-reports and columns with descriptions. You can replace this with your actual data source (API, database, etc.) while maintaining the same structure.

To extend this project, you could add:

- Search functionality to find specific reports
- Filtering options for columns
- User authentication to restrict access to certain reports
- Export functionality to download reports in various formats
