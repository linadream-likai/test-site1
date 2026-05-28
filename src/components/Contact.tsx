import React, { useState } from 'react';
import { Language } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#171717] relative overflow-hidden border-t border-[#2F2F2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-[#9E7FFF] uppercase mb-3">
                {lang === 'ja' ? 'お問い合わせ' : 'CONTACT US'}
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                {lang === 'ja' ? '新しいプロジェクトを始めましょう' : 'Let\'s Build Something Great'}
              </p>
              <p className="text-[#A3A3A3] leading-relaxed">
                {lang === 'ja'
                  ? '開発のご相談、お見積りのご依頼、採用に関するご質問など、お気軽にお問い合わせください。2営業日以内に担当者よりご連絡いたします。'
                  : 'Have a project in mind, need an estimate, or want to join our team? Drop us a line and we\'ll get back to you within 2 business days.'}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#262626] rounded-xl border border-[#2F2F2F] text-[#38bdf8]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{lang === 'ja' ? '所在地' : 'Office Location'}</h4>
                  <p className="text-sm text-[#A3A3A3]">
                    {lang === 'ja'
                      ? '〒810-0001 福岡県福岡市中央区天神1丁目1-1 天神ITタワー 12F'
                      : '12F Tenjin IT Tower, 1-1-1 Tenjin, Chuo-ku, Fukuoka, 810-0001 Japan'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#262626] rounded-xl border border-[#2F2F2F] text-[#9E7FFF]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{lang === 'ja' ? 'メールアドレス' : 'Email Address'}</h4>
                  <p className="text-sm text-[#A3A3A3]">info@linadream.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#262626] rounded-xl border border-[#2F2F2F] text-[#f472b6]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{lang === 'ja' ? '電話番号' : 'Phone Number'}</h4>
                  <p className="text-sm text-[#A3A3A3]">092-123-4567 (平日 10:00 - 19:00)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#262626] border border-[#2F2F2F] rounded-3xl p-8 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex p-4 bg-[#10b981]/10 text-[#10b981] rounded-full mb-4">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {lang === 'ja' ? '送信が完了しました！' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="text-[#A3A3A3] max-w-md mx-auto">
                    {lang === 'ja'
                      ? 'お問い合わせありがとうございます。内容を確認の上、担当者より折り返しご連絡いたします。'
                      : 'Thank you for reaching out. Our team will review your message and get back to you shortly.'}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-[#171717] text-white border border-[#2F2F2F] hover:bg-[#2F2F2F] transition-colors text-sm font-semibold"
                  >
                    {lang === 'ja' ? '新しく問い合わせる' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">
                        {lang === 'ja' ? 'お名前' : 'Your Name'} <span className="text-[#ef4444]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#171717] border border-[#2F2F2F] text-white focus:border-[#9E7FFF] focus:outline-none transition-colors"
                        placeholder={lang === 'ja' ? '山田 太郎' : 'John Doe'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">
                        {lang === 'ja' ? '会社名・組織名' : 'Company Name'}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#171717] border border-[#2F2F2F] text-white focus:border-[#9E7FFF] focus:outline-none transition-colors"
                        placeholder={lang === 'ja' ? '株式会社〇〇' : 'Acme Corp'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">
                      {lang === 'ja' ? 'メールアドレス' : 'Email Address'} <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#171717] border border-[#2F2F2F] text-white focus:border-[#9E7FFF] focus:outline-none transition-colors"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">
                      {lang === 'ja' ? 'お問い合わせ内容' : 'Message'} <span className="text-[#ef4444]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#171717] border border-[#2F2F2F] text-white focus:border-[#9E7FFF] focus:outline-none transition-colors resize-none"
                      placeholder={
                        lang === 'ja'
                          ? 'プロジェクトの概要、ご予算、納期などをご記入ください。'
                          : 'Please describe your project requirements, budget, and timeline.'
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#9E7FFF] to-[#38bdf8] text-white font-bold hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#9E7FFF]/20"
                  >
                    <Send className="w-4 h-4" />
                    {lang === 'ja' ? '送信する' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
