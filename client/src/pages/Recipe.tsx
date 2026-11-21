import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, CheckCircle, Clock, Flame, Leaf, Utensils, Droplet } from 'lucide-react';

const VIDEO_ID = '4TAmm-6YE4Y';

const INGREDIENTS = [
  { name: 'Jammu Rajma (kidney beans)', qty: '1 cup', note: 'small red Jammu beans' },
  { name: 'Water', qty: '4-5 cups', note: 'for soaking and cooking' },
  { name: 'Mustard oil or ghee', qty: '2 tbsp', note: 'for tempering' },
  { name: 'Cumin seeds', qty: '1 tsp', note: 'jeera' },
  { name: 'Bay leaf', qty: '1', note: 'tej patta' },
  { name: 'Cinnamon stick', qty: '1 inch', note: 'dalchini' },
  { name: 'Green cardamom', qty: '2', note: 'elaichi' },
  { name: 'Cloves', qty: '3-4', note: 'laung' },
  { name: 'Onion', qty: '1 large', note: 'finely chopped' },
  { name: 'Ginger-garlic paste', qty: '1 tbsp', note: 'adrak-lehsun' },
  { name: 'Tomatoes', qty: '2 medium', note: 'pureed' },
  { name: 'Turmeric powder', qty: '1/2 tsp', note: 'haldi' },
  { name: 'Red chili powder', qty: '1 tsp', note: 'lal mirch' },
  { name: 'Coriander powder', qty: '1 tsp', note: 'dhania powder' },
  { name: 'Garam masala', qty: '1/2 tsp', note: 'for finishing' },
  { name: 'Salt', qty: 'to taste', note: '' },
  { name: 'Fresh coriander', qty: '2 tbsp', note: 'chopped, for garnish' },
];

const STEPS = [
  {
    id: 'soak',
    title: 'Soak the Rajma',
    time: '8 hours / overnight',
    icon: Droplet,
    text: 'Rinse the Jammu rajma beans thoroughly and soak them in water overnight or for at least 8 hours. The beans should double in size.',
    iconColor: 'text-gold',
  },
  {
    id: 'cook',
    title: 'Cook the Rajma',
    time: '20-25 minutes',
    icon: Flame,
    text: 'Pressure cook the soaked rajma with water, salt, bay leaf, cinnamon, cardamom, and cloves until soft and tender. About 3-4 whistles.',
    iconColor: 'text-terra',
  },
  {
    id: 'temper',
    title: 'Prepare the Tempering',
    time: '10 minutes',
    icon: Utensils,
    text: 'Heat mustard oil or ghee in a pan. Add cumin seeds and let them splutter. Add chopped onions and sauté until golden brown.',
    iconColor: 'text-gold',
  },
  {
    id: 'masala',
    title: 'Add Aromatics & Spices',
    time: '5 minutes',
    icon: Clock,
    text: 'Add ginger-garlic paste and sauté for 1 minute. Add tomato puree, turmeric, red chili powder, and coriander powder. Cook until oil separates.',
    iconColor: 'text-terra',
  },
  {
    id: 'combine',
    title: 'Combine & Simmer',
    time: '15 minutes',
    icon: Leaf,
    text: 'Add the cooked rajma with its water to the masala. Mash some beans against the side of the pan to thicken the gravy. Simmer on low heat.',
    iconColor: 'text-gold',
  },
  {
    id: 'finish',
    title: 'Finish & Serve',
    time: '5 minutes',
    icon: CheckCircle,
    text: 'Add garam masala and fresh coriander. Give it a final stir. Serve hot with steamed basmati rice — classic Rajma Chawal!',
    iconColor: 'text-terra',
  },
];

export function Recipe() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const progress = (completedSteps.size / STEPS.length) * 100;

  useEffect(() => {
    if (completedSteps.has(currentStep)) return;
    const timer = setTimeout(() => {
      setCompletedSteps((prev) => new Set([...prev, currentStep]));
      if (currentStep < STEPS.length - 1) setCurrentStep(currentStep + 1);
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentStep, completedSteps]);

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <section
      id="recipe"
      className="min-h-screen bg-ivory text-forest"
    >
      {/* Back to Home */}
      <nav className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-8">
        <motion.a
          href="/"
          whileHover={{ x: -4 }}
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-gold hover:text-terra transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </motion.a>
      </nav>

      {/* Header */}
      <header className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-16 lg:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-6"
        >
          <Leaf size={14} className="text-terra" />
          Authentic Recipe
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-medium italic leading-[1.05] tracking-tight text-forest mb-4"
        >
          Jammu Style Rajma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-2xl text-lg sm:text-xl leading-relaxed text-forest/75"
        >
          A treasured regional dish from Jammu &amp; the Himalayas — slow-cooked kidney beans in aromatic whole spices, served with steamed basmati rice.
        </motion.p>
      </header>

      {/* Video Section */}
      <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative aspect-video w-full overflow-hidden rounded-xl border border-gold/30 bg-forest shadow-[0_20px_50px_-12px_rgba(24,60,48,0.4)]"
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?si=tHG4DxSc3gKA7FtR`}
            title="Jammu Style Rajma Recipe by Chef Ranveer Brar"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-center text-sm text-forest/60"
        >
          Watch the full video recipe by Chef Ranveer Brar
        </motion.p>
      </section>

      {/* Ingredients Section */}
      <section className="bg-forest text-ivory py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-medium italic leading-[1.05] text-ivory mb-2">
                Ingredients
              </h2>
              <p className="text-sm text-gold/70 uppercase tracking-[0.2em]">
                Fresh, regional &amp; authentic
              </p>
            </div>
            <div className="w-full lg:w-48">
              <div className="relative h-8 w-48 overflow-hidden rounded-full bg-forest/40 border border-gold/30 mb-4">
                <div
                  className="absolute left-0 top-0 h-full bg-gold transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-gold mb-2">
                <span>Ingredients</span>
                <span>{completedSteps.size}/{STEPS.length}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {INGREDIENTS.map((ing, i) => (
              <motion.div
                key={ing.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="flex items-start gap-3 p-4 rounded-lg border border-gold/25 bg-forest/20 text-ivory/90"
              >
                <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
                  {ing.qty}
                </span>
                <div>
                  <span className="block text-sm font-medium">{ing.name}</span>
                  {ing.note && <span className="block text-xs text-ivory/60 mt-0.5">{ing.note}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-ivory text-forest py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-medium italic leading-[1.05] text-forest mb-2">
                Cooking Steps
              </h2>
              <p className="text-sm text-forest/60 uppercase tracking-[0.2em]">
                Follow each step to perfection
              </p>
            </div>
            <div className="text-right">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-gold/10 text-gold text-[11px] font-bold uppercase tracking-[0.2em] cursor-pointer"
                onClick={() => goToStep(0)}
              >
                <Play size={12} className="text-terra" />
                Start Cooking
              </motion.span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, i) => {
              const isCompleted = completedSteps.has(i);
              const isCurrent = currentStep === i;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.2 + i * 0.08, duration: 0.7 },
                  }}
                  whileHover={{ y: -6 }}
                  className={`relative group p-6 rounded-xl border transition-all duration-300 ${
                    isCompleted
                      ? 'bg-gold/5 border-gold/30 shadow-[0_10px_30px_-10px_rgba(185,154,89,0.15)]'
                      : isCurrent
                      ? 'bg-ivory border-gold shadow-[0_15px_40px_-10px_rgba(185,154,89,0.25)]'
                      : 'bg-forest/5 border-gold/15 text-forest/70'
                  }`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-gold bg-ivory z-10 group-hover:border-terra group-hover:text-terra transition-colors">
                    <span className="text-[11px] font-bold text-terra">{i + 1}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <step.icon className={`w-6 h-6 ${step.iconColor} group-hover:text-terra transition-colors`} />
                    <h3 className="font-display text-lg sm:text-xl font-medium leading-tight text-forest group-hover:text-terra transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-forest/75 mb-4">
                    {step.text}
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60">
                      {step.time}
                    </span>
                    {isCompleted && (
                      <span className="ml-auto text-[10px] text-gold flex items-center gap-1">
                        <CheckCircle size={12} className="text-terra" />
                        Done
                      </span>
                    )}
                    {isCurrent && !isCompleted && (
                      <span className="ml-auto animate-pulse text-[10px] text-terra font-bold">
                        Now
                      </span>
                    )}
                  </div>

                  {/* Progress Line */}
                  <div className="absolute left-0 top-12 w-px h-[calc(100%-4rem)] bg-gold/20" />
                  {i < STEPS.length - 1 && (
                    <div className="absolute left-0 top-12 w-px h-full bg-gold/10" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Completion Celebration */}
          {completedSteps.size === STEPS.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 px-6 py-8 rounded-2xl border border-gold/40 bg-gold/10 text-center"
            >
              <div className="inline-block animate-bounce text-4xl mb-4">🍛</div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium italic text-terra mb-2">
                Your Jammu Rajma is Ready!
              </h3>
              <p className="text-base text-forest/75 max-w-md mx-auto">
                Serve hot with steamed basmati rice. Classic Rajma Chawal from the hills of Jammu.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </section>
  );
}
