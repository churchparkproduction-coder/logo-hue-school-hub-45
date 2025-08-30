import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Settings, 
  Users, 
  Calendar, 
  Image, 
  Mail, 
  Phone, 
  MapPin,
  Book,
  GraduationCap,
  Eye,
  Edit,
  Trash2,
  Plus,
  Globe,
  Building,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  UserCheck,
  Upload,
  Search
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SCHOOL_CONFIG, ADMIN_CONTENT } from "@/lib/config";

const AdminPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleSave = (section: string) => {
    toast({
      title: "Settings Saved",
      description: `${section} settings have been updated successfully.`,
    });
  };

  const handleViewPage = (path: string) => {
    navigate(path);
  };

  const handleEditPage = (pageName: string) => {
    toast({
      title: "Edit Mode",
      description: `Redirecting to ${pageName} editor...`,
    });
    // In a real admin, this would open an editor
    navigate("/admin");
  };

  const handleAddEvent = () => {
    setActiveTab("events");
    toast({
      title: "Add Event",
      description: "Switched to Events tab to add new event.",
    });
  };

  const handleEditHomepage = () => {
    navigate("/");
    toast({
      title: "Homepage",
      description: "Redirecting to homepage for preview...",
    });
  };

  const handleManageGallery = () => {
    navigate("/gallery");
    toast({
      title: "Gallery Management",
      description: "Redirecting to gallery page...",
    });
  };

  const handleAddProgram = () => {
    toast({
      title: "Program Added",
      description: "New program has been created successfully.",
    });
  };

  const handleUploadPhotos = () => {
    toast({
      title: "Photo Upload",
      description: "Photo upload feature activated.",
    });
  };

  const handleAddStudent = () => {
    toast({
      title: "Student Added",
      description: "New student record has been created successfully.",
    });
  };

  const handleEditStudent = (studentName: string) => {
    toast({
      title: "Edit Student",
      description: `Opening ${studentName}'s record for editing...`,
    });
  };

  const handleDeleteStudent = (studentName: string) => {
    toast({
      title: "Student Deleted",
      description: `${studentName}'s record has been removed.`,
    });
  };

  // Mock student data
  const mockStudents = [
    {
      id: 1,
      name: "John Doe",
      rollNumber: "2024001",
      class: "Class 10-A",
      fatherName: "Robert Doe",
      phone: "+1 234 567 8900",
      fees: { total: 5000, paid: 3000, pending: 2000 },
      attendance: 90,
      lastResult: "85%"
    },
    {
      id: 2,
      name: "Jane Smith",
      rollNumber: "2024002",
      class: "Class 10-A",
      fatherName: "Michael Smith",
      phone: "+1 234 567 8901",
      fees: { total: 5000, paid: 5000, pending: 0 },
      attendance: 95,
      lastResult: "92%"
    },
    {
      id: 3,
      name: "Alice Johnson",
      rollNumber: "2024003",
      class: "Class 9-B",
      fatherName: "David Johnson",
      phone: "+1 234 567 8902",
      fees: { total: 4500, paid: 2000, pending: 2500 },
      attendance: 87,
      lastResult: "78%"
    }
  ];

  const [searchStudentClass, setSearchStudentClass] = useState("");
  const [searchStudentRoll, setSearchStudentRoll] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(mockStudents);

  const handleStudentSearch = () => {
    let filtered = mockStudents;
    
    if (searchStudentClass) {
      filtered = filtered.filter(student => 
        student.class.toLowerCase().includes(searchStudentClass.toLowerCase())
      );
    }
    
    if (searchStudentRoll) {
      filtered = filtered.filter(student => 
        student.rollNumber.includes(searchStudentRoll)
      );
    }
    
    setFilteredStudents(filtered);
    toast({
      title: "Search Complete",
      description: `Found ${filtered.length} student(s) matching your criteria.`,
    });
  };

  const resetStudentSearch = () => {
    setSearchStudentClass("");
    setSearchStudentRoll("");
    setFilteredStudents(mockStudents);
  };


  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Church Park Admin Dashboard</h1>
              <p className="text-muted-foreground">Master control panel for website management</p>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Admin Access
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Pages</CardTitle>
                  <Book className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">10</div>
                  <p className="text-xs text-muted-foreground">Active website pages</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Events</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Upcoming events</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Programs</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">6</div>
                  <p className="text-xs text-muted-foreground">Active programs</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Gallery Images</CardTitle>
                  <Image className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">48</div>
                  <p className="text-xs text-muted-foreground">Total images</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used admin functions</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button onClick={handleAddEvent} className="h-20 flex flex-col gap-2">
                  <Plus className="h-6 w-6" />
                  Add New Event
                </Button>
                <Button onClick={handleEditHomepage} variant="outline" className="h-20 flex flex-col gap-2">
                  <Edit className="h-6 w-6" />
                  Edit Homepage
                </Button>
                <Button onClick={handleManageGallery} variant="outline" className="h-20 flex flex-col gap-2">
                  <Image className="h-6 w-6" />
                  Manage Gallery
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Management Tab */}
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Page Management</CardTitle>
                <CardDescription>Manage all website pages and their content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Homepage", path: "/", status: "Published" },
                    { name: "About", path: "/about", status: "Published" },
                    { name: "Admissions", path: "/admissions", status: "Published" },
                    { name: "Programs", path: "/programs", status: "Published" },
                    { name: "Student Portal", path: "/student-portal", status: "Published" },
                    { name: "Gallery", path: "/gallery", status: "Published" },
                    { name: "Events", path: "/events", status: "Published" },
                    { name: "Contact", path: "/contact", status: "Published" },
                    { name: "Login", path: "/login", status: "Published" },
                    { name: "Signup", path: "/signup", status: "Published" },
                    { name: "Schedule Visit", path: "/schedule-visit", status: "Published" },
                  ].map((page) => (
                    <div key={page.path} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{page.name}</h3>
                        <p className="text-sm text-muted-foreground">{page.path}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{page.status}</Badge>
                        <Button size="sm" variant="outline" onClick={() => handleViewPage(page.path)}>
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" onClick={() => handleEditPage(page.name)}>
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Students Management Tab */}
          <TabsContent value="students" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Students Management</h2>
                <p className="text-muted-foreground">Manage student records, fees, and attendance</p>
              </div>
              <Button onClick={handleAddStudent}>
                <Plus className="h-4 w-4 mr-2" />
                Add Student
              </Button>
            </div>

            {/* Search Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Student Search
                </CardTitle>
                <CardDescription>Search students by class and roll number</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="student-class">Class</Label>
                    <Input
                      id="student-class"
                      placeholder="e.g., Class 10-A"
                      value={searchStudentClass}
                      onChange={(e) => setSearchStudentClass(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="student-roll">Roll Number</Label>
                    <Input
                      id="student-roll"
                      placeholder="e.g., 2024001"
                      value={searchStudentRoll}
                      onChange={(e) => setSearchStudentRoll(e.target.value)}
                    />
                  </div>
                  <div className="flex items-end">
                    <Button onClick={handleStudentSearch} className="w-full">
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>
                  <div className="flex items-end">
                    <Button onClick={resetStudentSearch} variant="outline" className="w-full">
                      Reset
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Students List */}
            <Card>
              <CardHeader>
                <CardTitle>Student Records</CardTitle>
                <CardDescription>
                  Showing {filteredStudents.length} student(s)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredStudents.map((student) => (
                    <div key={student.id} className="border rounded-lg p-4">
                      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                        <div className="lg:col-span-2">
                          <h3 className="font-semibold">{student.name}</h3>
                          <p className="text-sm text-muted-foreground">Roll: {student.rollNumber}</p>
                          <p className="text-sm text-muted-foreground">{student.class}</p>
                        </div>
                        
                        <div>
                          <Label className="text-xs">Fees Status</Label>
                          <div className="flex items-center gap-2">
                            <Badge variant={student.fees.pending === 0 ? "default" : "destructive"}>
                              {student.fees.pending === 0 ? "Paid" : `$${student.fees.pending} Due`}
                            </Badge>
                          </div>
                        </div>
                        
                        <div>
                          <Label className="text-xs">Attendance</Label>
                          <div className="flex items-center gap-2">
                            <Badge variant={student.attendance >= 90 ? "default" : "secondary"}>
                              {student.attendance}%
                            </Badge>
                          </div>
                        </div>
                        
                        <div>
                          <Label className="text-xs">Last Result</Label>
                          <p className="font-medium">{student.lastResult}</p>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEditStudent(student.name)}
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeleteStudent(student.name)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                      
                      {/* Student Details Expandable */}
                      <div className="mt-4 pt-4 border-t">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <Label className="text-xs">Father's Name</Label>
                            <p>{student.fatherName}</p>
                          </div>
                          <div>
                            <Label className="text-xs">Phone</Label>
                            <p>{student.phone}</p>
                          </div>
                          <div>
                            <Label className="text-xs">Fee Details</Label>
                            <p>Total: ${student.fees.total} | Paid: ${student.fees.paid}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Management Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Events Management</CardTitle>
                  <CardDescription>Create and manage church events</CardDescription>
                </div>
                <Button onClick={() => handleSave("Event")}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="event-title">Event Title</Label>
                      <Input id="event-title" placeholder="Sunday Service" />
                    </div>
                    <div>
                      <Label htmlFor="event-date">Date & Time</Label>
                      <Input id="event-date" type="datetime-local" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="event-description">Description</Label>
                    <Textarea id="event-description" placeholder="Event description..." />
                  </div>
                  <Button onClick={() => handleSave("Event")}>Save Event</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Programs Management Tab */}
          <TabsContent value="programs" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Programs Management</CardTitle>
                  <CardDescription>Manage church programs and activities</CardDescription>
                </div>
                <Button onClick={handleAddProgram}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Program
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="program-name">Program Name</Label>
                      <Input id="program-name" placeholder="Sunday School" />
                    </div>
                    <div>
                      <Label htmlFor="program-age">Age Group</Label>
                      <Input id="program-age" placeholder="Children 5-12" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="program-description">Program Description</Label>
                    <Textarea id="program-description" placeholder="Program details..." />
                  </div>
                  <Button onClick={() => handleSave("Program")}>Save Program</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Management Tab */}
          <TabsContent value="gallery" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Gallery Management</CardTitle>
                  <CardDescription>Upload and organize church photos</CardDescription>
                </div>
                <Button onClick={handleUploadPhotos}>
                  <Plus className="h-4 w-4 mr-2" />
                  Upload Photos
                </Button>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <Image className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Drag and drop images here or click to upload</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Management Tab */}
          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Update church contact details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <Label htmlFor="phone">Phone Number</Label>
                    </div>
                    <Input id="phone" defaultValue={SCHOOL_CONFIG.contact.phone.main} />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <Label htmlFor="email">Email Address</Label>
                    </div>
                    <Input id="email" defaultValue={SCHOOL_CONFIG.contact.email.main} />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <Label htmlFor="address">Address</Label>
                  </div>
                  <Textarea 
                    id="address" 
                    defaultValue={SCHOOL_CONFIG.contact.address.full}
                  />
                </div>
                
                <Button onClick={() => handleSave("Contact Information")}>
                  Update Contact Info
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Website Settings</CardTitle>
                <CardDescription>Configure global website settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="site-title">Site Title</Label>
                    <Input id="site-title" defaultValue="Church Park" />
                  </div>
                  
                  <div>
                    <Label htmlFor="site-description">Site Description</Label>
                    <Textarea 
                      id="site-description" 
                      defaultValue="Welcome to Church Park - A place of worship, community, and spiritual growth."
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="outline" size="sm">
                        Disabled
                      </Button>
                      <span className="text-sm text-muted-foreground">
                        Website is currently live
                      </span>
                    </div>
                  </div>
                </div>
                
                <Button onClick={() => handleSave("Website Settings")}>
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;