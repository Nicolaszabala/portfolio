import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { DEVELOPER_INFO, SOCIAL_LINKS } from "@/lib/constants";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: async (response) => {
      const result = await response.json();
      toast({
        title: "Message sent successfully!",
        description: result.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactItems = [
    {
      icon: <Mail className="text-primary" size={20} />,
      label: "Email",
      value: DEVELOPER_INFO.email,
    },
    {
      icon: <Phone className="text-primary" size={20} />,
      label: "Phone",
      value: DEVELOPER_INFO.phone,
    },
    {
      icon: <MapPin className="text-primary" size={20} />,
      label: "Location",
      value: DEVELOPER_INFO.location,
    },
    {
      icon: <Clock className="text-primary" size={20} />,
      label: "Response Time",
      value: "Within 24 hours",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-muted/30 dark:bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center space-x-2">
                <Mail className="text-primary h-8 w-8" />
                <span>Get In Touch</span>
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, I'll try my
                best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-xl glass-effect hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center neon-glow">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">
                      {item.label}
                    </div>
                    <div className="text-muted-foreground font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-6"
            >
              <div className="flex space-x-4">
                <motion.a
                  href={SOCIAL_LINKS.linkedin}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 neon-glow"
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.github}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-14 h-14 bg-foreground text-background rounded-xl flex items-center justify-center hover:bg-foreground/90 transition-colors duration-200 neon-glow"
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.twitter}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-accent text-accent-foreground rounded-xl flex items-center justify-center hover:bg-accent/90 transition-colors duration-200 neon-glow"
                >
                  <FaTwitter size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glass-effect p-8 rounded-2xl shadow-2xl border-border hover:border-primary/30 transition-all duration-300 neon-glow">
              <CardContent className="p-0">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-bold text-foreground">
                              First Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John"
                                className="bg-background/50 border-border focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-bold text-foreground">
                              Last Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Doe"
                                className="bg-background/50 border-border focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              className="border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            Project Type
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                <SelectValue placeholder="Select a project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="web-development">Web Development</SelectItem>
                              <SelectItem value="mobile-app">Mobile App</SelectItem>
                              <SelectItem value="fullstack">Fullstack Application</SelectItem>
                              <SelectItem value="consultation">Consultation</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            Project Budget
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                              <SelectItem value="50k+">$50,000+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Tell me about your project..."
                              className="border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {contactMutation.isPending ? (
                        <span className="flex items-center justify-center space-x-2">
                          <Loader2 className="animate-spin" size={20} />
                          <span>Sending...</span>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center space-x-2">
                          <span>Send Message</span>
                          <Send size={20} />
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
