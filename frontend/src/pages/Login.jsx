import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-gray-900 border border-gray-800 text-gray-100 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-400 text-center">
            Welcome Back
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="bg-gray-800 text-gray-100 mt-2"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="bg-gray-800 text-gray-100 mt-2"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Login
            </Button>
            <p className="text-center text-sm text-gray-400">
              Don’t have an account?{" "}
              <a href="/register" className="text-blue-400 hover:underline">
                Register
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
