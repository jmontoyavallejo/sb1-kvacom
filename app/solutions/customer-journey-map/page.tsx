import { Button } from "@/components/ui/button";

export default function CustomerJourneyMapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Customer Journey Map</h1>
      <p className="text-xl mb-8">
        Our Customer Journey Map solution helps you visualize and optimize every step of your customer's experience with your brand.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Interactive and customizable journey mapping tools</li>
            <li>Integration with customer data and feedback</li>
            <li>Identification of pain points and opportunities</li>
            <li>Collaboration features for cross-functional teams</li>
            <li>Real-time updates and version control</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Gain a holistic view of the customer experience</li>
            <li>Identify and address customer pain points</li>
            <li>Improve customer satisfaction and loyalty</li>
            <li>Align teams around customer-centric goals</li>
            <li>Make data-driven decisions to enhance the customer journey</li>
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