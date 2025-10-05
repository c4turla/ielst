import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary/90">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
          Master IELTS with AI
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground mb-8 max-w-3xl mx-auto">
          Personalized preparation powered by artificial intelligence to help you achieve your target band score
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive IELTS Preparation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Speaking Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>AI-powered evaluation of your speaking skills with instant feedback on fluency, vocabulary, and pronunciation.</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/speaking">Practice Now</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Writing Improvement</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Get detailed feedback on your essays with AI analysis of grammar, coherence, and task achievement.</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/writing">Practice Now</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Listening Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Practice with authentic IELTS listening materials and improve your comprehension skills.</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/listening">Practice Now</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Reading Comprehension</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Enhance your reading speed and comprehension with a variety of academic and general texts.</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/reading">Practice Now</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Achieve Your IELTS Goals?</h2>
            <p className="text-xl mb-8">Join thousands of students who have improved their scores with our AI-powered platform.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/sign-up">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
