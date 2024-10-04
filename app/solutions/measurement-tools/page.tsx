import { Button } from "@/components/ui/button";

export default function MeasurementToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Measurement Tools</h1>
      <p className="text-xl mb-8">
        Our advanced Measurement Tools provide comprehensive insights into your customer experience performance, helping you make data-driven decisions.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Customizable KPI dashboards</li>
            <li>Real-time data collection and analysis</li>
            <li>Multi-channel performance tracking</li>
            <li>Predictive analytics and trend forecasting</li>
            <li>Integration with popular CRM and analytics platforms</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Gain actionable insights from customer data</li>
            <li>Measure and improve ROI on customer experience initiatives</li>
            <li>Identify areas for improvement and optimization</li>
            <li>Track progress towards customer experience goals</li>
            <li>Make informed decisions based on accurate, real-time data</li>
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