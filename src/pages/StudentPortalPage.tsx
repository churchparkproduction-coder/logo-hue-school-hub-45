import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Search, GraduationCap, DollarSign, Calendar, User, BookOpen } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Mock data
const MOCK_STUDENT_DATA = {
  profile: {
    name: "John Doe",
    rollNumber: "2024001",
    class: "Class 10-A",
    fatherName: "Robert Doe",
    motherName: "Jane Doe",
    phone: "+1 234 567 8900",
    address: "123 Main Street, City"
  },
  results: [
    { subject: "Mathematics", marks: 85, totalMarks: 100, grade: "A" },
    { subject: "Science", marks: 78, totalMarks: 100, grade: "B+" },
    { subject: "English", marks: 92, totalMarks: 100, grade: "A+" },
    { subject: "History", marks: 74, totalMarks: 100, grade: "B" },
    { subject: "Geography", marks: 88, totalMarks: 100, grade: "A" },
  ],
  fees: {
    totalFees: 5000,
    paidAmount: 3000,
    pendingAmount: 2000,
    dueDate: "2024-03-15",
    payments: [
      { date: "2024-01-15", amount: 1500, description: "Tuition Fee - Quarter 1" },
      { date: "2024-02-15", amount: 1500, description: "Tuition Fee - Quarter 2" },
    ]
  },
  attendance: {
    totalDays: 180,
    presentDays: 162,
    absentDays: 18,
    percentage: 90,
    recentAttendance: [
      { date: "2024-02-20", status: "Present" },
      { date: "2024-02-19", status: "Present" },
      { date: "2024-02-18", status: "Absent" },
      { date: "2024-02-17", status: "Present" },
      { date: "2024-02-16", status: "Present" },
    ]
  }
};

const StudentPortalPage = () => {
  const [searchClass, setSearchClass] = useState("");
  const [searchRoll, setSearchRoll] = useState("");
  const [studentFound, setStudentFound] = useState(false);

  const handleSearch = () => {
    // Mock search logic - in real app, this would query the backend
    if (searchClass && searchRoll) {
      setStudentFound(true);
    }
  };

  const calculatePercentage = (marks: number, total: number) => (marks / total) * 100;
  const totalMarks = MOCK_STUDENT_DATA.results.reduce((sum, subject) => sum + subject.marks, 0);
  const totalPossibleMarks = MOCK_STUDENT_DATA.results.reduce((sum, subject) => sum + subject.totalMarks, 0);
  const overallPercentage = (totalMarks / totalPossibleMarks) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-center mb-2">Student Portal</h1>
            <p className="text-center text-muted-foreground">
              Access your academic records, fees, and attendance information
            </p>
          </div>

          {/* Search Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Student Search
              </CardTitle>
              <CardDescription>Enter your class and roll number to access your records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="class">Class</Label>
                  <Input
                    id="class"
                    placeholder="e.g., Class 10-A"
                    value={searchClass}
                    onChange={(e) => setSearchClass(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="roll">Roll Number</Label>
                  <Input
                    id="roll"
                    placeholder="e.g., 2024001"
                    value={searchRoll}
                    onChange={(e) => setSearchRoll(e.target.value)}
                  />
                </div>
                <div className="flex items-end">
                  <Button onClick={handleSearch} className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Search Records
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Student Data Display */}
          {(studentFound || true) && ( // Show by default for demo
            <div className="space-y-6">
              {/* Student Profile */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Student Profile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <Label className="text-sm font-medium">Student Name</Label>
                      <p className="text-lg">{MOCK_STUDENT_DATA.profile.name}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Roll Number</Label>
                      <p className="text-lg">{MOCK_STUDENT_DATA.profile.rollNumber}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Class</Label>
                      <p className="text-lg">{MOCK_STUDENT_DATA.profile.class}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Father's Name</Label>
                      <p className="text-lg">{MOCK_STUDENT_DATA.profile.fatherName}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Mother's Name</Label>
                      <p className="text-lg">{MOCK_STUDENT_DATA.profile.motherName}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Phone</Label>
                      <p className="text-lg">{MOCK_STUDENT_DATA.profile.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="results" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="results" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Results
                  </TabsTrigger>
                  <TabsTrigger value="fees" className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Fees
                  </TabsTrigger>
                  <TabsTrigger value="attendance" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Attendance
                  </TabsTrigger>
                </TabsList>

                {/* Results Tab */}
                <TabsContent value="results">
                  <Card>
                    <CardHeader>
                      <CardTitle>Academic Results</CardTitle>
                      <CardDescription>
                        Overall Percentage: <Badge variant="secondary">{overallPercentage.toFixed(1)}%</Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Subject</TableHead>
                            <TableHead>Marks Obtained</TableHead>
                            <TableHead>Total Marks</TableHead>
                            <TableHead>Percentage</TableHead>
                            <TableHead>Grade</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {MOCK_STUDENT_DATA.results.map((result, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{result.subject}</TableCell>
                              <TableCell>{result.marks}</TableCell>
                              <TableCell>{result.totalMarks}</TableCell>
                              <TableCell>{calculatePercentage(result.marks, result.totalMarks).toFixed(1)}%</TableCell>
                              <TableCell>
                                <Badge variant={result.grade.includes('A') ? 'default' : 'secondary'}>
                                  {result.grade}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Fees Tab */}
                <TabsContent value="fees">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Fee Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm font-medium">Total Fees</Label>
                            <p className="text-2xl font-bold">${MOCK_STUDENT_DATA.fees.totalFees}</p>
                          </div>
                          <div>
                            <Label className="text-sm font-medium">Paid Amount</Label>
                            <p className="text-2xl font-bold text-green-600">${MOCK_STUDENT_DATA.fees.paidAmount}</p>
                          </div>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Pending Amount</Label>
                          <p className="text-2xl font-bold text-red-600">${MOCK_STUDENT_DATA.fees.pendingAmount}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Due Date</Label>
                          <p className="text-lg">{MOCK_STUDENT_DATA.fees.dueDate}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Payment Progress</Label>
                          <Progress 
                            value={(MOCK_STUDENT_DATA.fees.paidAmount / MOCK_STUDENT_DATA.fees.totalFees) * 100} 
                            className="mt-2"
                          />
                          <p className="text-sm text-muted-foreground mt-1">
                            {((MOCK_STUDENT_DATA.fees.paidAmount / MOCK_STUDENT_DATA.fees.totalFees) * 100).toFixed(1)}% paid
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Payment History</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {MOCK_STUDENT_DATA.fees.payments.map((payment, index) => (
                            <div key={index} className="flex justify-between items-start p-3 border rounded-lg">
                              <div>
                                <p className="font-medium">{payment.description}</p>
                                <p className="text-sm text-muted-foreground">{payment.date}</p>
                              </div>
                              <Badge variant="outline">${payment.amount}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Attendance Tab */}
                <TabsContent value="attendance">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Attendance Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold mb-2">{MOCK_STUDENT_DATA.attendance.percentage}%</div>
                          <p className="text-muted-foreground">Overall Attendance</p>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-bold">{MOCK_STUDENT_DATA.attendance.totalDays}</p>
                            <p className="text-sm text-muted-foreground">Total Days</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-green-600">{MOCK_STUDENT_DATA.attendance.presentDays}</p>
                            <p className="text-sm text-muted-foreground">Present</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-red-600">{MOCK_STUDENT_DATA.attendance.absentDays}</p>
                            <p className="text-sm text-muted-foreground">Absent</p>
                          </div>
                        </div>

                        <div>
                          <Label className="text-sm font-medium">Attendance Progress</Label>
                          <Progress value={MOCK_STUDENT_DATA.attendance.percentage} className="mt-2" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Attendance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {MOCK_STUDENT_DATA.attendance.recentAttendance.map((record, index) => (
                            <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                              <span className="font-medium">{record.date}</span>
                              <Badge 
                                variant={record.status === 'Present' ? 'default' : 'destructive'}
                              >
                                {record.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentPortalPage;