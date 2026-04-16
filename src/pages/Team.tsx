import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardContent, CardImage } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail, Award, Building2, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import JoinTeamModal from "@/components/modals/JoinTeamModal"
import Hero from "@/components/hero_team"
import { imagePresets } from "@/lib/cloudinary"
import { nominations, nominationPresets } from "@/data/nominationsData"
import ceoImage from "@/assets/ceo.jpeg"
import akosuaImage from "@/assets/mentor.jpg"
import kofiImage from "@/assets/start-up.jpg"
import amaImage from "@/assets/beneficiary_1.jpg"
import yawImage from "@/assets/beneficiary_2.jpg"
import sarahImage from "@/assets/man_2.jpg"
import michaelImage from "@/assets/man_3.jpg"
import graceImage from "@/assets/mentor.jpg"
import danielImage from "@/assets/mentee_sharing.jpg"
import josephImage from "@/assets/appointment_letter_confirmed.jpg"

const CEO_PUBLIC_ID = "ceo_sgt1o2"

const Team = () => {
  const location = useLocation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const awardsRef = useRef<HTMLElement | null>(null)
  const [awardsInView, setAwardsInView] = useState(false)

  useEffect(() => {
    const el = document.getElementById("top-header")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [location])

  useEffect(() => {
    const el = awardsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAwardsInView(true)
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const ceo = {
    name: "Mary Akua Ahenmah Dadzie",
    position: "Founder/Executive Director",
    imageUrl: imagePresets.portrait(CEO_PUBLIC_ID),
    bio: "Mary Akua Ahenmah Dadzie is a seasoned Human Resources professional with over 8 years of corporate experience. As an expert HR and Career Coach, she collaborates with business leaders, job seekers, and entrepreneurs to empower them to excel. Through LinkedIn and other platforms, she is dedicated to mentoring professionals, delivering insightful career strategies, and fostering personal and professional growth. She is a sought-after speaker who has participated in notable events across Ghana, Nigeria, the US, India, and other international platforms. Passionate about empowering individuals, she actively contributes to community initiatives and delivers impactful sessions to equip participants with the tools to thrive in their careers and businesses.",
    achievements: [
      "Nominated as one of the 'Top 10 Exceptional Professionals in HR' at the TIBA Awards",
      "Founder and Executive Director of Elite Career Initiatives",
      "Founder/Convenor of Career Impact Hour",
      "Creator of the Brand Builders Coaching Program",
      "Executive member of the NGO 'Defend The Poor (DTP)'",
      "Master's degree in Public Administration from the Ghana Institute of Management and Public Administration (GIMPA)",
      "Bachelor's degree in Business Administration from the University of Professional Studies (UPSA)",
      "Currently pursuing the HR Chartered program from the Chartered Institute of Human Resource Management (CIHRM)",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/mary-akua-ahenmah-dadzie",
      twitter: "https://x.com/a_ahenmah",
      email: "akuaahenmahdadzie@gmail.com",
      instagram: "https://www.instagram.com/a_ahenmah",
      Facebook: "https://www.linkedin.com/in/mary-akua-ahenmah-dadzie",
    },
  }

  const boardMembers = [
    { name: "Prof. Akosua Mensah", position: "Chairperson of the Board", image: yawImage, company: "University of Ghana Business School", bio: "Leading academic and researcher in business education with 20+ years experience. Former Dean of UGBS.", expertise: ["Academic Leadership", "Strategic Planning", "Research"] },
    { name: "Mr. Kofi Oppong", position: "Board Member - Finance", image: kofiImage, company: "PwC Ghana, Managing Partner", bio: "Senior financial executive with extensive experience in corporate finance and business development.", expertise: ["Corporate Finance", "Business Strategy", "Risk Management"] },
    { name: "Ms. Ama Darko", position: "Board Member - Industry Relations", image: amaImage, company: "MTN Ghana, HR Director", bio: "Human resources leader specializing in talent development and organizational transformation.", expertise: ["Talent Development", "HR Strategy", "Change Management"] },
    { name: "Dr. Yaw Osei", position: "Board Member - Technology", image: akosuaImage, company: "Tech Innovators Ghana, CTO", bio: "Technology entrepreneur and innovator focused on digital solutions for education and career development.", expertise: ["EdTech", "Digital Innovation", "Software Development"] },
  ]

  const coreTeam = [
    { name: "Sarah Adjei", position: "Director of Programs", image: danielImage, department: "Programs & Training", bio: "Leads all career development programs with expertise in curriculum design and student success.", experience: "8 years in youth development" },
    { name: "Michael Boateng", position: "Head of Partnerships", image: michaelImage, department: "Corporate Relations", bio: "Manages relationships with partner organizations and develops new collaboration opportunities.", experience: "10 years in business development" },
    { name: "Grace Owusu", position: "Director of Operations", image: graceImage, department: "Operations & Finance", bio: "Oversees daily operations, financial management, and organizational efficiency initiatives.", experience: "12 years in operations management" },
    { name: "Daniel Nkrumah", position: "Technology Lead", image: sarahImage, department: "Technology & Innovation", bio: "Develops and maintains our digital platforms and explores innovative tech solutions.", experience: "6 years in software development" },
    { name: "Abena Gyasi", position: "Communications Manager", image: danielImage, department: "Marketing & Communications", bio: "Manages all communications, marketing campaigns, and social media presence.", experience: "5 years in digital marketing" },
    { name: "Joseph Mensah", position: "Mentorship Coordinator", image: josephImage, department: "Mentorship Programs", bio: "Coordinates our mentorship programs and facilitates mentor-mentee matching.", experience: "7 years in program coordination" },
  ]

  return (
    <div className="min-h-screen bg-gradient-warm" id="top-header">
      <Header />
      <Hero />

      <main className="container mx-auto px-4 pt-20 pb-12">
        <Tabs defaultValue="ceo" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-1 gap-2 sm:grid-cols-1">
            <TabsTrigger value="ceo" className="flex items-center justify-center gap-2 data-[state=active]:bg-gradient-hero data-[state=active]:text-primary-foreground">
              <Award className="h-4 w-4" /> CEO
            </TabsTrigger>
            {/* <TabsTrigger value="board" className="flex items-center justify-center gap-2 data-[state=active]:bg-gradient-hero data-[state=active]:text-primary-foreground">
              <Building2 className="h-4 w-4" /> Board
            </TabsTrigger>
            <TabsTrigger value="core" className="flex items-center justify-center gap-2 data-[state=active]:bg-gradient-hero data-[state=active]:text-primary-foreground">
              <Users className="h-4 w-4" /> Core Team
            </TabsTrigger> */}
          </TabsList>

          <TabsContent value="ceo">
            <Card className="mx-auto max-w-10xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
                  <div className="text-center">
                    <img
                      src={ceo.imageUrl}
                      alt={ceo.name}
                      className="mx-auto mb-10 h-40 w-40 rounded-full object-cover ring-4 ring-primary/20"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.onerror = null
                        target.src = ceoImage
                      }}
                    />
                    <h2 className="mb-1 text-2xl font-bold text-foreground">{ceo.name}</h2>
                    <p className="mb-4 text-lg font-medium text-primary">{ceo.position}</p>
                    <div className="flex justify-center gap-3">
                      <Button size="sm" variant="hero" onClick={() => window.open(ceo.social.linkedin, "_blank")}>
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="hero" onClick={() => window.open(ceo.social.twitter, "_blank")}>
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="hero" onClick={() => window.open(`mailto:${ceo.social.email}`)}>
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h3 className="mb-4 text-xl font-semibold">Biography</h3>
                    <p className="mb-6 leading-relaxed text-secondary-foreground">{ceo.bio}</p>
                    <h3 className="mb-4 text-xl font-semibold">Key Achievements</h3>
                    <ul className="space-y-3">
                      {ceo.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <span className="text-secondary-foreground">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <section
                  ref={awardsRef}
                  className="mt-12 border-t border-border/40 pt-10"
                  aria-labelledby="team-awards-heading"
                >
                  <div className="mb-6 text-center">
                    <h3 id="team-awards-heading" className="text-2xl font-bold text-foreground">
                      Awards &amp; Recognition
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Nominations and accolades received by our Founder &amp; Executive Director
                    </p>
                  </div>

                  <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
                    {nominations.map((nom, index) => (
                      <Card
                        key={nom.id}
                        className={`group min-w-[85vw] shrink-0 snap-center border-border/60 transition-all duration-700 ease-out md:min-w-0 ${
                          awardsInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                        }`}
                        style={{ transitionDelay: awardsInView ? `${index * 120}ms` : "0ms" }}
                      >
                        <div className="overflow-hidden rounded-t-lg bg-muted">
                          <img
                            src={nominationPresets.card(nom.publicId)}
                            alt={nom.title}
                            className="max-h-[320px] w-full object-contain transition duration-300 group-hover:brightness-[0.97]"
                            onError={(e) => {
                              const target = e.currentTarget
                              target.onerror = null
                              target.src = `https://placehold.co/500x650?text=Nomination+${nom.id}`
                            }}
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base leading-snug">{nom.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-1 pt-0">
                          <p className="text-xs text-muted-foreground">{nom.organization}</p>
                          <Badge variant="secondary">{nom.year}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="board">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {boardMembers.map((member, index) => (
                <Card key={index} className="transition-shadow hover:shadow-elegant">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <CardImage src={member.image} alt={member.name} className="h-40 w-40 rounded-full object-cover" />
                      <div className="flex-1 pt-10">
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <p className="font-medium text-primary">{member.position}</p>
                        <p className="text-sm text-muted-foreground">{member.company}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm leading-relaxed text-secondary-foreground">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="hero">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="core">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {coreTeam.map((member, index) => (
                <Card key={index} className="transition-shadow hover:shadow-elegant">
                  <CardContent className="p-6 text-center">
                    <CardImage src={member.image} alt={member.name} className="mx-auto mb-4 h-40 w-40 rounded-full object-cover" />
                    <h3 className="mb-1 text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="mb-1 font-medium text-primary">{member.position}</p>
                    <Badge variant="hero" className="mb-4">
                      {member.department}
                    </Badge>
                    <p className="mb-3 text-xm leading-relaxed text-secondary-foreground">{member.bio}</p>
                    <p className="text-xs font-bold text-secondary-foreground">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mt-16 bg-gradient-brand text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Join Our Team</h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl opacity-90">
              Are you passionate about youth development and want to make a lasting impact? We&apos;re always looking for talented individuals to join our mission.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
                Join Our Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
      <JoinTeamModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}

export default Team
