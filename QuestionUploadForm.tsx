import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion } from "framer-motion";

export default function QuestionUpload() {
  const [subject, setSubject] = useState("");
  const [questions, setQuestions] = useState("");
  const [date, setDate] = useState<Date>();
  const [duration, setDuration] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) setFile(uploadedFile);
  };

  const handleSubmit = () => {
    console.log("Subject:", subject);
    console.log("Questions:", questions);
    console.log("Exam Date:", date);
    console.log("Duration:", duration);
    console.log("Answer File:", file);
    alert("Questions uploaded successfully!");
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="rounded-2xl shadow-md p-4">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold">Upload Questions</h2>

          <Input
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <Textarea
            placeholder="Type or paste your MCQs here (A-D options)."
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
            className="min-h-[200px]"
          />

          <div className="flex items-center space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <Input
            placeholder="Duration (e.g., 60 minutes)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />

          <Input type="file" onChange={handleFileChange} />

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="w-full" onClick={handleSubmit}>
              Upload Questions
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
