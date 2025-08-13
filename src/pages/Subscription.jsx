import { useState } from "react"
import { motion } from "framer-motion"

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("diamond")

  const plans = [
    {
      id: "silver",
      name: "Silver Plan",
      price: "1.000.000 VND",
      period: "/MONTH",
      features: [
        "Meal session/day 1 session",
        "Daily points: 1,000 points",
        "Students allowed daily or long food from home"
      ],
      color: "bg-gray-300",
      textColor: "text-gray-800"
    },
    {
      id: "diamond",
      name: "Diamond Plan", 
      price: "3.000.000 VND",
      period: "/MONTH",
      badge: "BEST !",
      features: [
        "Meal session/day: Unlimited sessions",
        "Daily points: 3,000 points (flexible usage)",
        "Bonus: Free snack every weekend",
        "Suitable for: Students who need flexibility and comfort"
      ],
      color: "bg-blue-500",
      textColor: "text-white",
      popular: true
    },
    {
      id: "gold",
      name: "Gold Plan",
      price: "2.000.000 VND", 
      period: "/MONTH",
      features: [
        "Meal session/day: 2 sessions",
        "Daily points: 2,000 points",
        "Advanced snack allowance",
        "Students allowed daily or long food dining only at school"
      ],
      color: "bg-yellow-500",
      textColor: "text-white"
    }
  ]

  const benefits = [
    {
      title: "Easy spending control",
      description: "Funds are clearly and flexibly allocated per meal session"
    },
    {
      title: "Age-appropriate nutrition", 
      description: "Parents can freely choose from approved restaurants for their child's meals"
    },
    {
      title: "Convenience",
      description: "No need to prepare meals after school — hassle-free for parents"
    },
    {
      title: "Weekly report & tracking",
      description: "The system sends detailed weekly reports on your child's spending and meals"
    }
  ]

  const faqs = [
    {
      question: "Can I change the plan mid-month?",
      answer: "Yes, parents can change the plan once per month."
    },
    {
      question: "Will unused points carry over to next month?",
      answer: "Yes, unused funds will remain in the child's sub-wallet."
    },
    {
      question: "Can I customize how the sub-wallet is allocated?",
      answer: "Yes, parents can adjust the point distribution per session."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gray-200 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose the right meal plan
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Control your child's spending every day
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Funds are automatically allocated to sub-wallets and used according to meal sessions per day. 
            Helping parents manage spending while ensuring nutrition.
          </p>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            SUBSCRIPTION
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: plans.indexOf(plan) * 0.1 }}
                className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                  selectedPlan === plan.id ? "ring-2 ring-blue-500" : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {plan.badge}
                  </div>
                )}
                
                <div className={`${plan.color} ${plan.textColor} p-6 text-center`}>
                  <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold">{plan.price}</span>
                    <span className="text-sm opacity-90">{plan.period}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      selectedPlan === plan.id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            WHY YOU SHOULD CHOOSE
          </h2>
          <h3 className="text-2xl font-bold text-center text-white mb-12">
            OUR SUBSCRIPTION PLANS
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-300 p-6 rounded-lg text-center"
              >
                <h4 className="font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg p-6 text-white"
              >
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
            
            {/* Additional grayed out FAQ items as shown in design */}
            <div className="bg-gray-400 rounded-lg p-6 text-gray-600">
              <h3 className="font-bold text-lg mb-2">Can I customize how the sub-wallet is allocated?</h3>
              <p>Yes, parents can adjust the point distribution per session.</p>
            </div>
            
            <div className="bg-gray-500 rounded-lg p-6 text-gray-300">
              <h3 className="font-bold text-lg mb-2">Can I customize how the sub-wallet is allocated?</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription