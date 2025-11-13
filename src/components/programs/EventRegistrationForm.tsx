import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { format } from "date-fns";

interface EventRegistrationFormProps {
  event: any;
  isOpen: boolean;
  onClose: () => void;
}

const EventRegistrationForm = ({ event, isOpen, onClose }: EventRegistrationFormProps) => {
  // 👇 Redirect back home when Google Form is submitted
  useEffect(() => {
    const interval = setInterval(() => {
      const iframe: any = document.querySelector("iframe");
      if (iframe && iframe.src.includes("formResponse")) {
        clearInterval(interval);
        onClose();
        window.location.href = "/"; // redirect to home page
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-full h-[85vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Register for Event
          </DialogTitle>
          <DialogDescription className="space-y-2">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
              <div className="space-y-1 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  {format(event.date, "MMMM d, yyyy")}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
              </div>
              <Badge variant="secondary" className="mt-2">
                {event.type}
              </Badge>
            </div>
          </DialogDescription>
        </DialogHeader>

        {/* 👇 Embedded Google Form */}
        <div className="flex flex-col items-center justify-center w-full h-full">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd-7aL0Z3U3_zCtrIds5-bnb7ksN9D6LLJ0Ekk6-rMBrsZVUg/viewform?embedded=true"
           width="640"
           height="959" 
           frameBorder="0" 
           marginHeight={0}
           marginWidth={0}>
              Loading…
            </iframe>
        </div>

        {/* Optional close button */}
        <div className="pt-4 flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventRegistrationForm;
