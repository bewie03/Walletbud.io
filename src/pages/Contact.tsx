import { FormEvent, useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">Contact Us</h1>
            <p className="text-xl text-blue-100 hover:scale-105 transition-transform duration-300">
              Have questions? We're here to help.
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-blue-800 rounded-lg p-8 mb-8 border border-blue-700">
            <h2 className="text-2xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">Quick Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://discord.gg/walletpup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 p-4 rounded-lg border border-blue-700 hover:border-blue-500 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2 hover:scale-105 transition-transform duration-300">Discord Support</h3>
                <p className="text-blue-100 hover:scale-105 transition-transform duration-300">Get instant help from our community and support team</p>
              </a>
              <a
                href="/faq"
                className="bg-blue-900 p-4 rounded-lg border border-blue-700 hover:border-blue-500 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2 hover:scale-105 transition-transform duration-300">FAQ</h3>
                <p className="text-blue-100 hover:scale-105 transition-transform duration-300">Find answers to common questions</p>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-800 rounded-lg p-8 border border-blue-700">
            <h2 className="text-2xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-blue-100"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md bg-blue-900 border-blue-700 text-white placeholder-blue-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-100"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md bg-blue-900 border-blue-700 text-white placeholder-blue-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-blue-100"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md bg-blue-900 border-blue-700 text-white placeholder-blue-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-white text-center mb-6 hover:scale-105 transition-transform duration-300">
              Connect With Us
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://discord.gg/walletpup"
                className="text-blue-100 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
              <a
                href="https://twitter.com/walletpup"
                className="text-blue-100 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://t.me/walletpup"
                className="text-blue-100 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Support Hours */}
          <div className="mt-12 text-center">
            <p className="text-blue-100 hover:scale-105 transition-transform duration-300">
              Support Hours: 24/7 on Discord<br />
              Email Response Time: Within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
