import React from 'react';
import { Wrench, BookOpen, Headset, Clock } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Technical Support",
      description: "24/7 expert technical assistance for all our imaging equipment.",
      icon: <Headset className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Maintenance & Repair",
      description: "Scheduled preventive maintenance and rapid repair services by certified engineers.",
      icon: <Wrench className="w-6 h-6" />,
      color: "bg-teal-100 text-teal-600"
    },
    {
      title: "Clinical Training",
      description: "Comprehensive training programs for medical staff on equipment operation.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Fast Logistics",
      description: "Global delivery network ensuring parts and equipment reach you on time.",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Support Services</h1>
          <p className="text-lg text-slate-600">
            We don't just sell equipment; we partner with you to ensure your imaging department runs at peak performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex gap-6 hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center ${service.color}`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
