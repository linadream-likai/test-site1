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
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-[#FBFBFA] border-t border-[#E9E9E6]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-[#787774] uppercase mb-2">
                {lang === 'ja' ? 'お問い合わせ' : 'CONTACT US'}
              </h2>
              <p className="text-2xl sm:text-3xl font-bold text-[#37352F] tracking-tight mb-4">
                {lang === 'ja' ? '新しいプロジェクトを始めましょう' : 'Let\'s Build Something Great'}
              </p>
              <p className="text-sm text-[#787774] leading-[1.6]">
                {lang === 'ja'
                  ? '開発のご相談、お見積りのご依頼、採用に関するご質問など、お気軽にお問い合わせください。2営業日以内に担当者よりご連絡いたします。'
                  : 'Have a project in mind, need an estimate, or want to join our team? Drop us a line and we\'ll get back to you within 2 business days.'}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-white border border-[#E9E9E6] rounded-[4px] text-[#37352F]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#37352F]">{lang === 'ja' ? '所在地' : 'Office Location'}</h4>
                  <p className="text-xs text-[#787774] mt-0.5">
                    {lang === 'ja'
                      ? '〒810-0001 福岡県福岡市中央区天神1丁目1-1 天神ITタワー 12F'
                      : '12F Tenjin IT Tower, 1-1-1 Tenjin, Chuo-ku, Fukuoka, 810-0001 Japan'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-white border border-[#E9E9E6] rounded-[4px] text-[#37352F]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#37352F]">{lang === 'ja' ? 'メールアドレス' : 'Email Address'}</h4>
                  <p className="text-xs text-[#787774] mt-0.5">info@linadream.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-white border border-[#E9E9E6] rounded-[4px] text-[#37352F]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#37352F]">{lang === 'ja' ? '電話番号' : 'Phone Number'}</h4>
                  <p className="text-xs text-[#787774] mt-0.5">092-123-4567 (平日 10:00 - 19:00)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E9E9E6] rounded-[6px] p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex p-3 bg-[#EBF5FE] text-[#1D4ED8] rounded-full mb-2">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#37352F]">
                    {lang === 'ja' ? '送信が完了しました！' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="text-xs text-[#787774] max-w-md mx-auto leading-[1.6]">
                    {lang === 'ja'
                      ? 'お問い合わせありがとうございます。内容を確認の上、担当者より折り返しご連絡いたします。'
                      : 'Thank you for reaching out. Our team will review your message and get back to you shortly.'}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-4 py-2 rounded-[4px] bg-[#F1F1EF] text-[#37352F] border border-[#E9E9E6] hover:bg-[#E9E9E6] transition-colors text-xs font-bold"
                  >
                    {lang === 'ja' ? '新しく問い合わせる' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-[#787774] uppercase tracking-wider mb-1.5">
                        {lang === 'ja' ? 'お名前' : 'Your Name'} <span className="text-[#ef4444]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-[4px] bg-white border border-[#E9E9E6] text-[#37352F] focus:border-[#37352F] focus:ring-1 focus:ring-[#37352F] focus:outline-none transition-colors"
                        placeholder={lang === 'ja' ? '山田 太郎' : 'John Doe'}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#787774] uppercase tracking-wider mb-1.5">
                        {lang === 'ja' ? '会社名・組織名' : 'Company Name'}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-[4px] bg-white border border-[#E9E9E6] text-[#37352F] focus:border-[#37352F] focus:ring-1 focus:ring-[#37352F] focus:outline-none transition-colors"
                        placeholder={lang === 'ja' ? '株式会社〇〇' : 'Acme Corp'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#787774] uppercase tracking-wider mb-1.5">
                      {lang === 'ja' ? 'メールアドレス' : 'Email Address'} <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-[4px] bg-white border border-[#E9E9E6] text-[#37352F] focus:border-[#37352F] focus:ring-1 focus:ring-[#37352F] focus:outline-none transition-colors"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#787774] uppercase tracking-wider mb-1.5">
                      {lang === 'ja' ? 'お問い合わせ内容' : 'Message'} <span className="text-[#ef4444]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-[4px] bg-white border border-[#E9E9E6] text-[#37352F] focus:border-[#37352F] focus:ring-1 focus:ring-[#37352F] focus:outline-none transition-colors resize-none"
                      placeholder={
                        lang === 'ja'
                          ? 'プロジェクトの概要、ご予算、納期などをご記入ください。'
                          : 'Please describe your project requirements, budget, and timeline.'
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-[4px] bg-[#37352F] text-white text-xs font-bold hover:bg-[#4F4D47] transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                  >
                    <Send className="w-3.5 h-3.5" />
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
