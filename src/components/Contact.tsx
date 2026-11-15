import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Building2 } from 'lucide-react';
import { supabase } from '../supabaseClient';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Frontend validation logic
  const validate = (data: ContactFormData): FormErrors => {
    const errs: FormErrors = {};

    // Name validation
    if (!data.name.trim()) {
      errs.name = 'Your name is required.';
    } else if (data.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!data.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(data.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    // Subject validation
    if (!data.subject.trim()) {
      errs.subject = 'Subject is required.';
    } else if (data.subject.trim().length < 3) {
      errs.subject = 'Subject should be at least 3 characters.';
    }

    // Message validation
    if (!data.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (data.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const nextData = { ...formData, [name]: value };
    setFormData(nextData);

    if (touched[name]) {
      const validationErrors = validate(nextData);
      setErrors((prev) => ({
        ...prev,
        [name]: validationErrors[name as keyof FormErrors],
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validate(formData);
    setErrors(validationErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim()
          }
        ]);

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTouched({});
      setErrors({});

    } catch (error) {
      console.error('Supabase error:', error);
      alert('Message could not be sent. Please try again.');

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-pill">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Get In <span className="bg-gradient-to-r from-purple-brand to-indigo-brand bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Feel free to reach out regarding software development roles, internships, or academic project discussions.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            <div className="portfolio-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                I am an aspiring software developer eager to discuss entry-level development opportunities and collaborate on modern software projects.
              </p>

              <div className="space-y-6">

                {/* Full Name & Title */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 flex-shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">Name</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {personalData.fullName}
                    </span>
                    <span className="text-xs text-purple-600 dark:text-purple-400 block font-medium">
                      {personalData.title}
                    </span>
                  </div>
                </div>

                {/* College & Degree */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">Institution & Branch</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {personalData.college}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">
                      {personalData.degree} – {personalData.branch} (CGPA: {personalData.cgpa})
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-300 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">Location</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {personalData.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Response Time Guarantee Pill */}
            <div className="p-4 rounded-2xl bg-purple-50 dark:bg-navy-900/60 border border-purple-200 dark:border-navy-700 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-300">
                Actively reviewing messages and responding within 24 hours.
              </span>
            </div>

          </div>

          {/* Right Column: Contact Form with Validation & Supabase Submission */}
          <div className="lg:col-span-7">
            <div className="portfolio-card p-6 sm:p-8">

              {isSuccess ? (
                /* Success Message After Successful Submission */
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-300 dark:border-emerald-800 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out. Your message has been received and saved successfully. I will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 shadow-sm transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                    Fill out the form below to get in touch. All fields are validated.
                  </p>

                  {/* Name Input Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g., Alex Johnson"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border ${errors.name && touched.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-navy-700 focus:border-purple-brand focus:ring-purple-brand/20'
                        } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
                    />
                    {errors.name && touched.name && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-500">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g., alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border ${errors.email && touched.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-navy-700 focus:border-purple-brand focus:ring-purple-brand/20'
                        } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-500">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject Input Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g., Software Developer Opportunity / Project Inquiry"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border ${errors.subject && touched.subject
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-navy-700 focus:border-purple-brand focus:ring-purple-brand/20'
                        } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
                    />
                    {errors.subject && touched.subject && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-500">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Message <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400 dark:text-slate-500">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border ${errors.message && touched.message
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-navy-700 focus:border-purple-brand focus:ring-purple-brand/20'
                        } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-y`}
                    />
                    {errors.message && touched.message && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-500">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Send Message Submit Button with Loading State */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-brand to-indigo-brand hover:from-purple-dark hover:to-indigo-600 shadow-md shadow-purple-brand/25 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
