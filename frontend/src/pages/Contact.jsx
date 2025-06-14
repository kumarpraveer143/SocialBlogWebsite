import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Form Submitted:", data);
    e.target.reset();
  };

  return (
    <section className="min-h-screen  px-4 py-16 flex items-center justify-center">
      <Card className="w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl shadow-xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl font-bold text-blue-400 mb-1">
            Contact Me
          </CardTitle>
          <p className="text-gray-400 text-sm">
            Have something to say? Fill out the form and I’ll get back to you.
          </p>
          <p className="text-sm mt-2 text-gray-500">
            📞 Phone:{" "}
            <span className="text-blue-300 font-medium">+91 8252965226</span>
          </p>
        </CardHeader>

        <CardContent className="mt-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-1">
              <Label htmlFor="name" className="text-gray-300">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="bg-gray-800 text-gray-100 border-gray-700 focus-visible:ring-blue-500"
                required
              />
            </div>

            <div className="grid gap-1">
              <Label htmlFor="email" className="text-gray-300">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="bg-gray-800 text-gray-100 border-gray-700 focus-visible:ring-blue-500"
                required
              />
            </div>

            <div className="grid gap-1">
              <Label htmlFor="message" className="text-gray-300">
                Your Message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                className="bg-gray-800 text-gray-100 border-gray-700 focus-visible:ring-blue-500"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
