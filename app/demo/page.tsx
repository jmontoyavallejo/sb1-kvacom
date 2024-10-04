import { Button } from "@/components/ui/button";

export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Watch a Demo</h1>
      <p className="mb-4">
        See how our AI-powered customer experience platform can transform your business.
      </p>
      <Button onClick={() => console.log("Play demo video")}>Play Demo</Button>
      {/* Add a video player component or embed a YouTube video here */}
    </div>
  );
}