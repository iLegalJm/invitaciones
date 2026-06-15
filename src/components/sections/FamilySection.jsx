import React from 'react';
import { motion } from 'framer-motion';

const FamilySection = ({ data }) => {
    return (
        <section className="py-12 px-6 bg-transparent">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif italic text-wedding-primary max-w-xl mx-auto mb-16">
                        Con la bendición de Dios y el amor de nuestros padres
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { label: data.family.bride.label, names: data.family.bride.parents },
                            { label: data.family.groom.label, names: data.family.groom.parents },
                            { label: data.family.godparents.label, names: data.family.godparents.people }
                        ].map((group, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="font-sans text-wedding-primary/60 uppercase tracking-[0.3em] text-[10px] font-bold">
                                    {group.label}
                                </h3>
                                <div className="text-wedding-primary font-serif text-lg space-y-1">
                                    {group.names.map((name, i) => (
                                        <p key={i} className="leading-relaxed">{name}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FamilySection;