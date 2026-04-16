import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

const INTEREST_OPTIONS = [
  "Education",
  "Environment",
  "Social Justice",
  "Community Development",
  "Research & Writing",
  "Event Planning & Management",
  "Fundraising & Development",
  "Marketing & Communications",
  "Others",
];

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria",
  "Bangladesh", "Belgium", "Brazil", "Canada", "China", "Colombia",
  "Denmark", "Egypt", "Ethiopia", "Finland", "France", "Germany",
  "Ghana", "Greece", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Jamaica", "Japan", "Kenya", "Malaysia", "Mexico",
  "Morocco", "Netherlands", "New Zealand", "Nigeria", "Norway", "Pakistan",
  "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Saudi Arabia", "Singapore", "South Africa", "South Korea",
  "Spain", "Sri Lanka", "Sweden", "Switzerland", "Tanzania", "Thailand",
  "Turkey", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Vietnam", "Zimbabwe",
];

interface JoinTeamModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const JoinTeamModal = ({ open, onOpenChange }: JoinTeamModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    whatsappNumber: "",
    gender: "",
    countryOfResidence: "",
    nationality: "",
    socialMediaLinks: "",
    interests: [] as string[],
    bio: "",
    headshot: null as File | null,
  });
  const [headshotPreview, setHeadshotPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image under 5MB.",
          variant: "destructive",
        });
        return;
      }
      setFormData((prev) => ({ ...prev, headshot: file }));
      const reader = new FileReader();
      reader.onloadend = () => setHeadshotPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission — replace with your actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in joining OGPD. We'll be in touch.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      dateOfBirth: "",
      whatsappNumber: "",
      gender: "",
      countryOfResidence: "",
      nationality: "",
      socialMediaLinks: "",
      interests: [],
      bio: "",
      headshot: null,
    });
    setHeadshotPreview(null);
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl font-bold">
            Join Our Team
          </DialogTitle>
          <DialogDescription>
            Fill in your details below to apply to join OGPD.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[70vh] px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-5 pr-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* WhatsApp Number */}
            <div className="space-y-2">
              <Label htmlFor="whatsappNumber">WhatsApp Number *</Label>
              <Input
                id="whatsappNumber"
                name="whatsappNumber"
                type="tel"
                placeholder="+234 800 000 0000"
                value={formData.whatsappNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label>Gender *</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, gender: value }))
                }
                className="flex gap-4"
              >
                {["Male", "Female", "Non-binary", "Prefer not to say"].map(
                  (g) => (
                    <div key={g} className="flex items-center space-x-2">
                      <RadioGroupItem value={g} id={`gender-${g}`} />
                      <Label htmlFor={`gender-${g}`} className="font-normal">
                        {g}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            {/* Country of Residence */}
            <div className="space-y-2">
              <Label>Country of Residence *</Label>
              <Select
                value={formData.countryOfResidence}
                onValueChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    countryOfResidence: value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Nationality */}
            <div className="space-y-2">
              <Label htmlFor="nationality">Nationality *</Label>
              <Input
                id="nationality"
                name="nationality"
                placeholder="Enter your nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Social Media Links */}
            <div className="space-y-2">
              <Label htmlFor="socialMediaLinks">Social Media Links</Label>
              <Textarea
                id="socialMediaLinks"
                name="socialMediaLinks"
                placeholder="LinkedIn, Twitter/X, Instagram, etc. (one per line)"
                value={formData.socialMediaLinks}
                onChange={handleInputChange}
                rows={3}
              />
            </div>

            {/* Interests - Multiple Choice */}
            <div className="space-y-3">
              <Label>Areas of Interest *</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INTEREST_OPTIONS.map((interest) => (
                  <div
                    key={interest}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`interest-${interest}`}
                      checked={formData.interests.includes(interest)}
                      onCheckedChange={() => handleInterestToggle(interest)}
                    />
                    <Label
                      htmlFor={`interest-${interest}`}
                      className="font-normal text-sm"
                    >
                      {interest}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio / Expertise / Why join */}
            <div className="space-y-2">
              <Label htmlFor="bio">
                Short Bio, Expertise & Why You Want to Join OGPD *
              </Label>
              <Textarea
                id="bio"
                name="bio"
                placeholder="Tell us about yourself, your expertise, and why you'd like to join OGPD..."
                value={formData.bio}
                onChange={handleInputChange}
                rows={5}
                required
              />
            </div>

            {/* Headshot Upload */}
            <div className="space-y-2">
              <Label htmlFor="headshot">Your DP / Headshot *</Label>
              <div className="flex items-center gap-4">
                {headshotPreview && (
                  <img
                    src={headshotPreview}
                    alt="Headshot preview"
                    className="h-16 w-16 rounded-full object-cover border border-border"
                  />
                )}
                <Input
                  id="headshot"
                  name="headshot"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required={!formData.headshot}
                  className="cursor-pointer"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Max 3MB. JPG, PNG or WebP recommended.
              </p>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default JoinTeamModal;