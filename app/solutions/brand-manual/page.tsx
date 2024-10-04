import { Button } from "@/components/ui/button";

export default function BrandManualPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Brand Manual</h1>
      <p className="text-xl mb-8">
        Our comprehensive Brand Manual solution helps you create, manage, and distribute your brand guidelines effectively.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Centralized brand asset management</li>
            <li>Customizable templates for various brand elements</li>
            <li>Version control and change tracking</li>
            <li>Collaborative editing and approval workflows</li>
            <li>Easy distribution and access control</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ensure brand consistency across all touchpoints</li>
            <li>Streamline brand management processes</li>
            <li>Improve collaboration between teams and external partners</li>
            <li>Reduce time and costs associated with brand guideline creation and updates</li>
            <li>Enhance brand recognition and loyalty</li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <Button size="lg" className="mr-4">Request a Demo</Button>
        <Button size="lg" variant="outline">Learn More</Button>
      </div>
    </div>
  );
}