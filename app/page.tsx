"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import {
  Clock,
  MessageSquare,
  BarChart,
  Calendar,
  FileText,
  Users,
  HelpCircle,
  TrendingDown,
  Clock8,
  MessageCircle,
  PieChart,
  Zap,
} from "lucide-react"
import Image from "next/image"
import "@/lib/i18n-client"
import CTAPopup from "@/components/cta-popup"
import CookieConsent from "@/components/cookie-consent"
import ClientAnalytics from "@/components/client-analytics"
import CountUp from "@/components/count-up"
import LanguageToggle from "@/components/language-toggle"
import { useTranslation } from "react-i18next"
import HeroCarousel from "@/components/hero-carousel"
import StatCard from "@/components/stat-card"


export default function Home() {
  const { t } = useTranslation("common")

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl text-violet-700">
            Next<span className="text-sky-500">AI</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="font-medium hover:text-violet-600 transition-colors">
              {t("home")}
            </a>
            <a href="#features" className="font-medium hover:text-violet-600 transition-colors">
              {t("features")}
            </a>
            <a href="#demo" className="font-medium hover:text-violet-600 transition-colors">
              {t("freeDemo")}
            </a>
            <a href="#contact" className="font-medium hover:text-violet-600 transition-colors">
              {t("contact")}
            </a>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
          <LanguageToggle />
        </div>
      </header>

      {/* Part 1: Hero Section */}
      <section id="home" className="w-full py-20 bg-gradient-to-br from-white to-sky-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
              {t("heroHeadline1")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-sky-500">
                {t("heroHeadline2")}
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t("heroSubtext")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center justify-center text-center">
                <Clock className="h-6 w-6 text-violet-600 mr-2" />
                <span className="text-gray-700">{t("benefit1")}</span>
              </div>
              <div className="flex items-center justify-center text-center">
                <MessageSquare className="h-6 w-6 text-violet-600 mr-2" />
                <span className="text-gray-700">{t("benefit2")}</span>
              </div>
              <div className="flex items-center justify-center text-center">
                <Zap className="h-6 w-6 text-violet-600 mr-2" />
                <span className="text-gray-700">{t("benefit3")}</span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-sky-500 hover:from-violet-700 hover:to-sky-600 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
              data-goal="hero-cta"
            >
              {t("requestDemo")}
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full px-4 sm:px-0 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-[300px] sm:h-[400px] md:h-[500px]">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Services and Capabilities */}
      <section id="features" className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t("servicesTitle")}</h2>
            <p className="text-xl text-gray-700">{t("servicesSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<MessageCircle className="h-10 w-10 text-violet-600" />}
              title={t("service1Title")}
              description={t("service1Desc")}
            />
            <ServiceCard
              icon={<Calendar className="h-10 w-10 text-violet-600" />}
              title={t("service2Title")}
              description={t("service2Desc")}
            />
            <ServiceCard
              icon={<FileText className="h-10 w-10 text-violet-600" />}
              title={t("service3Title")}
              description={t("service3Desc")}
            />
            <ServiceCard
              icon={<Users className="h-10 w-10 text-violet-600" />}
              title={t("service4Title")}
              description={t("service4Desc")}
            />
            <ServiceCard
              icon={<HelpCircle className="h-10 w-10 text-violet-600" />}
              title={t("service5Title")}
              description={t("service5Desc")}
            />
            <ServiceCard
              icon={<BarChart className="h-10 w-10 text-violet-600" />}
              title={t("service6Title")}
              description={t("service6Desc")}
            />
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-sky-500 hover:from-violet-700 hover:to-sky-600 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
              data-goal="features-cta"
            >
              {t("requestDemoNow")}
            </Button>
          </div>
        </div>
      </section>

      {/* Part 3: Results */}
      <section className="w-full py-20 bg-gradient-to-br from-violet-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t("realResultsTitle")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ResultCard
              icon={<TrendingDown className="h-10 w-10 text-green-500" />}
              stat="45%"
              description={t("result1")}
            />
            <ResultCard
              icon={<Clock8 className="h-10 w-10 text-violet-600" />}
              stat="120+"
              description={t("result2")}
            />
            <ResultCard
              icon={<MessageCircle className="h-10 w-10 text-sky-500" />}
              stat="24/7"
              description={t("result3")}
            />
            <ResultCard
              icon={<PieChart className="h-10 w-10 text-violet-600" />}
              stat="100%"
              description={t("result4")}
            />
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-sky-500 hover:from-green-600 hover:to-sky-600 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
              data-goal="calculator-cta"
            >
              {t("calculateSavings")}
            </Button>
          </div>
        </div>
      </section>

      {/* Part 4: Trust Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t("whyTrust")}</h2>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">{t("theyTrust")}</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={`/images/client${i}.png`}
                    alt={`Client ${i}`}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">{t("ourApproach")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-violet-50 to-white p-8 rounded-xl shadow-sm">
                <Image
                  src="/images/our_team.jpeg"
                  alt="Our Team"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg mb-6"
                />
                <p className="text-gray-700 leading-relaxed">
                  {t("ourApproachText")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StatCard number="80+" text={t("stat1")} imageSrc="/images/stat1.jpeg" />
                <StatCard number="44+" text={t("stat2")} imageSrc="/images/icon1.png" />
                <StatCard number="200+" text={t("stat3")} imageSrc="/images/icon1.png" />
                <StatCard number="10+" text={t("stat4")} imageSrc="/images/icon1.png" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-sky-500 hover:from-violet-700 hover:to-sky-600 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
              data-goal="trust-cta"
            >
              {t("requestDemoNow")}
            </Button>
          </div>
        </div>
      </section>

      {/* Part 5: Contact Form */}
      <section id="contact" className="w-full py-20 bg-gradient-to-br from-violet-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
                {t("contactTitle")}
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("formName")}
                    </label>
                    <Input id="name" placeholder={t("yourName")} className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("formCompany")}
                    </label>
                    <Input id="company" placeholder={t("yourCompany")} className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("formPhone")}
                    </label>
                    <Input id="phone" placeholder={t("yourPhone")} className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("formEmail")}
                    </label>
                    <Input id="email" placeholder={t("yourEmail")} className="w-full" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("formMessage")}
                  </label>
                  <Textarea id="message" placeholder={t("yourMessage")} className="w-full" />
                </div>

                <div className="flex items-start">
                  <Checkbox id="diagnosis" className="mt-1" />
                  <label htmlFor="diagnosis" className="ml-2 text-sm text-gray-700">
                    {t("formConsent")}
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-sky-500 hover:from-violet-700 hover:to-sky-600 text-white py-6 rounded-lg text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
                  data-goal="contact-submit"
                >
                  {t("submitButton")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Next<span className="text-sky-400">AI</span>
              </h3>
              <p className="text-gray-400">
                {t("companySummary")}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">{t("contact")}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>{t("formCompany")}: Next</li>
                <li>{t("formEmail")}: contact@nextai.com</li>
                <li>{t("formPhone")}: +34 912 345 678</li>
                <li>WhatsApp: +34 600 123 456</li>
                <li>{t("companyAddress")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-sky-400 transition-colors">
                    {t("privacyPolicy")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-400 transition-colors">
                    {t("termsService")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-400 transition-colors">
                    {t("cokiePolicy")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} NextAI. {t("copyright")}</p>
          </div>
        </div>
      </footer>

      {/* CTA Popup and Cookie Consent */}
      <CTAPopup />
      <CookieConsent />
      <ClientAnalytics />
    </main>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  )
}

function ResultCard({ icon, stat, description }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg text-center">
      <CardContent className="p-6">
        <div className="flex justify-center mb-4">{icon}</div>
        <div className="text-3xl font-bold mb-2 text-gray-900">
          <CountUp value={stat} />
        </div>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  )
}
