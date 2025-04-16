import React from "react";
import { LineChart, BarChartIcon, Database } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <LineChart className="h-12 w-12 text-icosom-500" />,
      title: "Statistics",
      description:
        "Latest innovations in statistical modeling, inference, and data analysis methodologies.",
    },
    {
      icon: <BarChartIcon className="h-12 w-12 text-icosom-600" />,
      title: "Optimization",
      description:
        "Cutting-edge optimization algorithms and techniques for solving complex real-world problems.",
    },
    {
      icon: <Database className="h-12 w-12 text-icosom-teal" />,
      title: "Machine Learning",
      description:
        "Advanced machine learning approaches and applications across diverse fields.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About The Conference
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            The conference aims to bring together
            researchers, academicians, and industry professionals to share
            insights and advancements in these interrelated fields. The
            conference provides a platform for presenting recent research, novel
            methodologies, and applications in statistics, optimization, and
            machine learning. ICOSOM 2026 will feature keynote talks by leading
            experts, technical paper presentations, and interactive sessions,
            encouraging dialogue, collaboration, and the exchange of ideas. We
            welcome participants from academia, industry, and research
            organizations to be part of this exciting event at MANIT Bhopal and
            contribute to the growing global dialogue in statistics,
            optimization, and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
