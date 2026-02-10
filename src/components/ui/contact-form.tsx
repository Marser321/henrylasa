"use client";

import React, { useState } from "react";
import { GlassCard } from "./glass-card";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle2, Globe } from "lucide-react";
import { content, type Locale } from "@/lib/content/master-copy";

export function ContactForm({ className }: { className?: string }) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [lang, setLang] = useState<Locale>("en");

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const c = content.contact;
    const labels = c.formLabels;

    const t = (block: { en: string; es: string }) => block[lang];

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form Data:", formData);
        setIsLoading(false);
        setIsSuccess(true);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    if (isSuccess) {
        return (
            <GlassCard className={cn("flex flex-col items-center justify-center py-16 text-center max-w-2xl mx-auto", className)}>
                <div className="mb-6 rounded-full bg-[var(--accent-gold)]/20 p-4 backdrop-blur-md">
                    <CheckCircle2 className="h-12 w-12 text-[var(--accent-gold)]" />
                </div>
                <h3 className="text-3xl font-display text-white mb-4">{t(c.successMessage.headline)}</h3>
                <p className="text-white/60 max-w-md mx-auto leading-relaxed mb-8">
                    {t(c.successMessage.body)}
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="text-sm text-[var(--accent-gold)] hover:text-white transition-colors underline underline-offset-4 tracking-widest uppercase"
                >
                    {t(c.successMessage.cta)}
                </button>
            </GlassCard>
        );
    }

    return (
        <GlassCard className={cn("w-[90%] max-w-2xl mx-auto relative overflow-hidden my-4", className)}>
            {/* Language Toggle */}
            <div className="absolute top-6 right-6 z-10 flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/5">
                <button
                    onClick={() => setLang("en")}
                    className={cn(
                        "px-3 py-1 text-xs uppercase tracking-wider rounded-full transition-all",
                        lang === "en" ? "bg-white text-black font-medium" : "text-white/40 hover:text-white"
                    )}
                >
                    EN
                </button>
                <button
                    onClick={() => setLang("es")}
                    className={cn(
                        "px-3 py-1 text-xs uppercase tracking-wider rounded-full transition-all",
                        lang === "es" ? "bg-white text-black font-medium" : "text-white/40 hover:text-white"
                    )}
                >
                    ES
                </button>
            </div>

            <div className="mb-6 text-center">
                <p className="text-overline mb-3 text-[var(--accent-gold)]">{t(c.overline)}</p>
                <h2 className="text-2xl md:text-4xl font-display text-white mb-3 whitespace-pre-line">
                    {t(c.headline)}
                </h2>
                <p className="text-white/50 max-w-xl mx-auto font-light leading-relaxed text-sm">
                    {t(c.description)}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* 1. Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs uppercase tracking-wider text-white/40 ml-1">{t(labels.name)}</label>
                        <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            placeholder={t(labels.namePlaceholder as any) || ""}
                            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[var(--accent-gold)]/50 focus:border-[var(--accent-gold)]/50 transition-all"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest text-[var(--accent-gold)] font-bold ml-1">{t(labels.phone)}</label>
                        <input
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            placeholder={t(labels.phonePlaceholder as any) || ""}
                            className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent-gold)] focus:border-[var(--accent-gold)] transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs uppercase tracking-widest text-[var(--accent-gold)] font-bold ml-1">{t(labels.email)}</label>
                    <input
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder={t(labels.emailPlaceholder as any) || ""}
                        className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent-gold)] focus:border-[var(--accent-gold)] transition-all"
                    />
                </div>



                <div className="space-y-1">
                    <label className="text-xs uppercase tracking-widest text-[var(--accent-gold)] font-bold ml-1">{t(labels.message)}</label>
                    <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t(labels.messagePlaceholder as any) || ""}
                        rows={4}
                        className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent-gold)] focus:border-[var(--accent-gold)] transition-all resize-none"
                    />
                </div>

                <div className="pt-4">
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full py-4 rounded-xl bg-white text-black font-display font-semibold text-lg tracking-wide hover:bg-[#eaeaea] focus:ring-2 focus:ring-white/50 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                {t(labels.sending as any)}
                            </>
                        ) : (
                            t(labels.submit)
                        )}
                    </button>
                </div>
            </form>
        </GlassCard>
    );
}
