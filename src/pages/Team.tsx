
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail, Award, Building2, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CardImage } from "@/components/ui/card"
import {useNavigate,useLocation} from 'react-router-dom'
import {useEffect} from 'react'

// Import images from assets
import ceoImage from "@/assets/ceo.jpg"
import akosuaImage from "@/assets/mentor.jpg"
import kofiImage from "@/assets/start-up.jpg"
import amaImage from "@/assets/beneficiary_1.jpg"
import yawImage from "@/assets/beneficiary_2.jpg"
import sarahImage from "@/assets/man_2.jpg"
import michaelImage from "@/assets/man_3.jpg"
import graceImage from "@/assets/mentor.jpg"
import danielImage from "@/assets/mentee_sharing.jpg"
// import abenaImage from "@/assets/own_venture.jpg"
import josephImage from "@/assets/appointment_letter_confirmed.jpg"
import fatimaImage from "@/assets/acquisition.jpg"
import richmondImage from "@/assets/man_3.jpg"
import priscillaImage from "@/assets/mentee_sharing.jpg"
import emmanuelImage from "@/assets/man_2.jpg"
import Hero from "@/components/hero_team"

const Team = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
     const el = document.getElementById("top-header");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  // CEO
  const ceo = {
    name: "Mary Akua Ahenmah Dadzie",
    position: "Founder/Executive Director",
    image: ceoImage,
    bio: "Ms. Mary Akua Ahenmah Dadzie brings over 15 years of experience in education and youth development. Former Director of Career Services at University of Ghana, she holds a PhD in Educational Leadership and has been recognized as a leading voice in African youth empowerment.",
    achievements: [
      "PhD in Educational Leadership, Harvard University",
      "Former Director of Career Services, University of Ghana",
      "Author of 'Bridging the Gap: Education to Employment in Africa'",
      "Recipient of the Ghana Youth Development Excellence Award 2022"
    ],
    social: {
      linkedin: "https://linkedin.com/in/kwameasante",
      twitter: "https://twitter.com/kwameasante",
      email: "kwame.asante@eci.gh"
    }
  }

  // Board of Directors
  const boardMembers = [
    {
      name: "Prof. Akosua Mensah",
      position: "Chairperson of the Board",
      image: yawImage,
      company: "University of Ghana Business School",
      bio: "Leading academic and researcher in business education with 20+ years experience. Former Dean of UGBS.",
      expertise: ["Academic Leadership", "Strategic Planning", "Research"]
    },
    {
      name: "Mr. Kofi Oppong",
      position: "Board Member - Finance",
      image: kofiImage,
      company: "PwC Ghana, Managing Partner",
      bio: "Senior financial executive with extensive experience in corporate finance and business development.",
      expertise: ["Corporate Finance", "Business Strategy", "Risk Management"]
    },
    {
      name: "Ms. Ama Darko",
      position: "Board Member - Industry Relations",
      image: amaImage,
      company: "MTN Ghana, HR Director",
      bio: "Human resources leader specializing in talent development and organizational transformation.",
      expertise: ["Talent Development", "HR Strategy", "Change Management"]
    },
    {
      name: "Dr. Yaw Osei",
      position: "Board Member - Technology",
      image: akosuaImage,
      company: "Tech Innovators Ghana, CTO",
      bio: "Technology entrepreneur and innovator focused on digital solutions for education and career development.",
      expertise: ["EdTech", "Digital Innovation", "Software Development"]
    }
  ]

  // Core Team
  const coreTeam = [
    {
      name: "Sarah Adjei",
      position: "Director of Programs",
      image: danielImage,
      department: "Programs & Training",
      bio: "Leads all career development programs with expertise in curriculum design and student success.",
      experience: "8 years in youth development"
    },
    {
      name: "Michael Boateng",
      position: "Head of Partnerships",
      image: michaelImage,
      department: "Corporate Relations",
      bio: "Manages relationships with partner organizations and develops new collaboration opportunities.",
      experience: "10 years in business development"
    },
    {
      name: "Grace Owusu",
      position: "Director of Operations",
      image: graceImage,
      department: "Operations & Finance",
      bio: "Oversees daily operations, financial management, and organizational efficiency initiatives.",
      experience: "12 years in operations management"
    },
    {
      name: "Daniel Nkrumah",
      position: "Technology Lead",
      image: sarahImage,
      department: "Technology & Innovation",
      bio: "Develops and maintains our digital platforms and explores innovative tech solutions.",
      experience: "6 years in software development"
    },
    {
      name: "Abena Gyasi",
      position: "Communications Manager",
      image: danielImage,
      department: "Marketing & Communications",
      bio: "Manages all communications, marketing campaigns, and social media presence.",
      experience: "5 years in digital marketing"
    },
    {
      name: "Joseph Mensah",
      position: "Mentorship Coordinator",
      image: josephImage,
      department: "Mentorship Programs",
      bio: "Coordinates our mentorship programs and facilitates mentor-mentee matching.",
      experience: "7 years in program coordination"
    }
  ]

  // Program Coordinators
  const programCoordinators = [
    {
      name: "Fatima Abdul-Rahman",
      position: "Skills Training Coordinator",
      image: fatimaImage,
      programs: ["CV Workshops", "Interview Preparation", "Soft Skills Training"],
      bio: "Specializes in professional skills development and career readiness training."
    },
    {
      name: "Richmond Appiah",
      position: "Job Placement Specialist",
      image: richmondImage,
      programs: ["Job Matching", "Career Counseling", "Industry Networking"],
      bio: "Connects students with employment opportunities and provides career guidance."
    },
    {
      name: "Priscilla Nkansah",
      position: "Workshop Facilitator",
      image: priscillaImage,
      programs: ["Leadership Training", "Entrepreneurship", "Digital Literacy"],
      bio: "Experienced trainer in leadership development and entrepreneurial skills."
    },
    {
      name: "Emmanuel Owusu",
      position: "Student Success Advisor",
      image: emmanuelImage,
      programs: ["Academic Support", "Career Planning", "Alumni Relations"],
      bio: "Provides comprehensive support to ensure student success throughout their journey."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-warm" id="top-header">
      <Header />
         <Hero></Hero>
      <main className="container mx-auto px-4 pt-20 pb-12">
     
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl md:text-8xl font-bold text-primary mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Passionate professionals dedicated to empowering Ghana's youth and transforming career development across West Africa.
          </p>
        </div> */}

        <Tabs defaultValue="ceo" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="ceo" className="flex items-center gap-2 data-[state=active]:bg-gradient-hero data-[state=active]:text-primary-foreground ">
              <Award className="w-4 h-4" /> CEO
            </TabsTrigger>
            <TabsTrigger value="board" className="flex items-center gap-2 data-[state=active]:bg-gradient-hero data-[state=active]:text-primary-foreground">
              <Building2 className="w-4 h-4" /> Board
            </TabsTrigger>
            { <TabsTrigger value="core" className="flex items-center gap-2 data-[state=active]:bg-gradient-hero data-[state=active]:text-primary-foreground">
              <Users className="w-4 h-4 " /> Core Team
            </TabsTrigger> }
          </TabsList>

          {/* CEO */}
          <TabsContent value="ceo">
            <Card className="max-w-10xl mx-auto">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="text-center">
                    <CardImage
                      src={ceo.image}
                      alt={ceo.name}
                      className="w-40 h-40 mx-auto rounded-full object-cover mb-10"
                    />
                    <h2 className="text-2xl font-bold text-foreground mb-1">{ceo.name}</h2>
                    <p className="text-lg text-primary font-medium mb-4">{ceo.position}</p>
                    <div className="flex justify-center gap-3">
                      <Button size="sm" variant="hero" onClick={() => window.open(ceo.social.linkedin, "_blank")}>
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="hero" onClick={() => window.open(ceo.social.twitter, "_blank")}>
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="hero" onClick={() => window.open(`mailto:${ceo.social.email}`)}>
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold mb-4">Biography</h3>
                    <p className="text-secondary-foreground leading-relaxed mb-6">{ceo.bio}</p>
                    <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                    <ul className="space-y-3">
                      {ceo.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span className="text-secondary-foreground">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Board */}
          <TabsContent value="board">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boardMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <CardImage
                        src={member.image}
                        alt={member.name}
                        className="w-40 h-40 rounded-full object-cover"
                      />
                      <div className="flex-1 pt-10">
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <p className="text-primary font-medium">{member.position}</p>
                        <p className="text-sm text-muted-foreground">{member.company}</p>
                        
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-foreground mb-4 text-sm leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="hero">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="core">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreTeam.map((member, index) => (
                <Card key={index} className="hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6 text-center">
                    <CardImage
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-1">{member.position}</p>
                    <Badge variant="hero" className="mb-4">{member.department}</Badge>
                    <p className="text-xm text-secondary-foreground leading-relaxed mb-3">{member.bio}</p>
                    <p className="text-xs font-bold text-secondary-foreground">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent> 
</Tabs>
          {/* Core Team} */}
          

          {/* Coordinators */}
          {/* <TabsContent value="coordinators">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programCoordinators.map((coordinator, index) => (
                <Card key={index} className="hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <CardImage
                        src={coordinator.image}
                        alt={coordinator.name}
                        className="w-40 h-40 rounded-full object-cover"
                      />
                      <div className="flex-1 pt-10">
                        <CardTitle className="text-lg">{coordinator.name}</CardTitle>
                        <p className="text-primary font-medium">{coordinator.position}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{coordinator.bio}</p>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Programs Led:</h4>
                      <div className="flex flex-wrap gap-2">
                        {coordinator.programs.map((program) => (
                          <Badge key={program} variant="hero">{program}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          </Tabs>

        {/* Stats */}
        {/* <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-center">Team & Experiences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <p className="text-sm text-muted-foreground">Years Combined Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <p className="text-sm text-muted-foreground">Different Departments</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <p className="text-sm text-muted-foreground">Universities Represented</p>
              </div>
            </div>
          </CardContent>
        </Card> */}

        {/* CTA */}
        <Card className="mt-16 bg-gradient-brand text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Are you passionate about youth development and want to make a lasting impact? 
              We're always looking for talented individuals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button variant="hero" size="lg" onClick={()=>{
              navigate('/programs')
             }}>
            Join Our Team
             </Button>
              
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

export default Team
