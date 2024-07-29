
import { formatDate } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tableData = [
  {
    name: "Laser Lemonade Machine",
    price: "$499.99",
    category: "Food",
    createdAt: "2023-07-12 10:42 AM",
    badgeVariant: "outline",
  },
  {
    name: "Hypernova Headphones",
    price: "$129.99",
    category: "Transport",
    createdAt: "2023-10-18 03:21 PM",
    badgeVariant: "outline",
  },
  {
    name: "AeroGlow Desk Lamp",
    price: "$39.99",
    category: "Others",
    createdAt: "2023-11-29 08:15 AM",
    badgeVariant: "outline",
  },
  {
    name: "TechTonic Energy Drink",
    price: "$2.99",
    category: "Groceries",
    createdAt: "2023-12-25 11:59 PM",
    badgeVariant: "secondary",
  },
  {
    name: "Gamer Gear Pro Controller",
    price: "$59.99",
    category: "Clothes",
    createdAt: "2024-01-01 12:00 AM",
    badgeVariant: "outline",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    category: "Something",
    createdAt: "2024-02-14 02:14 PM",
    badgeVariant: "outline",
  },
  {
    name: "Hypernova Headphones",
    price: "$129.99",
    category: "Transport",
    createdAt: "2024-03-12 03:21 PM",
    badgeVariant: "outline",
  },
  {
    name: "AeroGlow Desk Lamp",
    price: "$39.99",
    category: "Others",
    createdAt: "2024-04-29 08:15 AM",
    badgeVariant: "outline",
  }
];

const TableView = () => {
  return (
    <main className="grid flex-1 items-start">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Recent Expenses</CardTitle>
              <CardDescription>
                A summary of your recent expenses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Price
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Category
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Created at
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {item.price}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {item.category}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {formatDate(item.createdAt)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-10</strong> of <strong>32</strong> products
              </div>
            </CardFooter>
          </Card>
    </main>
  );
};

export default TableView;
